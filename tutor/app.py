"""Aplicação Flask do Tutor de Inglês com Groq."""

import os
import uuid

import requests
from flask import Flask, jsonify, render_template, request, session

GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
MODEL = "llama-3.1-8b-instant"
MAX_MESSAGE_LENGTH = 4000
MAX_HISTORY_ITEMS = 6
MAX_HISTORY_CHARS = 1000
REQUEST_TIMEOUT = 20

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("FLASK_SECRET_KEY") or os.urandom(32)
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024


class TutorError(Exception):
    """Erro de integração que pode ser apresentado ao cliente."""


def gerar_resposta_groq(mensagem):
    api_key = os.environ.get("GROQ_API_KEY")
    if not api_key:
        raise TutorError("O serviço de IA não está configurado (GROQ_API_KEY ausente).")

    historico = session.get("historico", [])[-MAX_HISTORY_ITEMS:]
    messages = [
        {"role": "system", "content": "Você é um tutor de inglês brasileiro. Responda sempre em português e explique com clareza."}
    ]
    messages.extend(historico)
    messages.append({"role": "user", "content": mensagem})
    try:
        response = requests.post(
            GROQ_API_URL,
            json={"model": MODEL, "messages": messages, "temperature": 0.7, "max_tokens": 1000},
            headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
            timeout=REQUEST_TIMEOUT,
        )
        if response.status_code != 200:
            app.logger.warning("Groq respondeu com status %s", response.status_code)
            raise TutorError("O serviço de IA não conseguiu responder. Tente novamente mais tarde.")
        try:
            answer = response.json()["choices"][0]["message"]["content"]
        except (ValueError, KeyError, IndexError, TypeError):
            raise TutorError("O serviço de IA retornou uma resposta inválida.")
        if not isinstance(answer, str) or not answer.strip():
            raise TutorError("O serviço de IA retornou uma resposta vazia.")
    except requests.Timeout:
        raise TutorError("O serviço de IA demorou para responder. Tente novamente.")
    except requests.RequestException:
        raise TutorError("Não foi possível conectar ao serviço de IA. Tente novamente.")

    historico.extend([{"role": "user", "content": mensagem}, {"role": "assistant", "content": answer}])
    session["historico"] = limitar_historico(historico)
    return answer


def limitar_historico(historico):
    historico = historico[-MAX_HISTORY_ITEMS:]
    bounded = []
    total_chars = 0
    for item in reversed(historico):
        if not isinstance(item, dict) or item.get("role") not in {"user", "assistant"}:
            continue
        content = item.get("content")
        if not isinstance(content, str):
            continue
        remaining = MAX_HISTORY_CHARS - total_chars
        if remaining <= 0:
            break
        content = content[-remaining:]
        bounded.append({"role": item["role"], "content": content})
        total_chars += len(content)
    return list(reversed(bounded))


def inicializar_sessao_usuario():
    if "user_id" not in session:
        session["user_id"] = str(uuid.uuid4())
    historico = session.get("historico", [])
    session["historico"] = limitar_historico(historico) if isinstance(historico, list) else []
    session.setdefault("progresso", {
        "sessoes_completas": 0,
        "duvidas_tiradas": 0,
        "planos_criados": 0,
        "ultima_sessao": None,
    })


def obter_dados():
    dados = request.get_json(silent=True)
    if not isinstance(dados, dict):
        return None, (jsonify(sucesso=False, erro="Envie os dados em formato JSON."), 400)
    return dados, None


def validar_texto(dados, campo, obrigatorio=True):
    valor = dados.get(campo)
    if valor is None and not obrigatorio:
        return ""
    if not isinstance(valor, str) or (obrigatorio and not valor.strip()):
        raise ValueError("Preencha o campo solicitado com texto.")
    valor = valor.strip()
    if len(valor) > MAX_MESSAGE_LENGTH:
        raise OverflowError(f"O texto deve ter no máximo {MAX_MESSAGE_LENGTH} caracteres.")
    return valor


def executar(prompt, contador):
    inicializar_sessao_usuario()
    try:
        resposta = gerar_resposta_groq(prompt)
    except TutorError as erro:
        return jsonify(sucesso=False, erro=str(erro)), 503
    session["progresso"][contador] += 1
    session.modified = True
    return jsonify(sucesso=True, resposta=resposta)


@app.errorhandler(413)
def requisicao_grande(_erro):
    return jsonify(sucesso=False, erro="A requisição excede o limite permitido."), 413


@app.route("/")
def index():
    inicializar_sessao_usuario()
    return render_template("index.html")


@app.route("/health")
def health():
    return jsonify(status="ok")


@app.route("/criar_plano", methods=["POST"])
def criar_plano():
    dados, erro = obter_dados()
    if erro:
        return erro
    try:
        nome = validar_texto(dados, "nome", obrigatorio=False) or "Estudante"
        nivel = validar_texto(dados, "nivel", obrigatorio=False) or "iniciante"
        tempo = validar_texto(dados, "tempo", obrigatorio=False) or "30 minutos"
        objetivo = validar_texto(dados, "objetivo", obrigatorio=False) or "conversação"
    except (ValueError, OverflowError) as exc:
        return jsonify(sucesso=False, erro=str(exc)), 400
    prompt = (f"Crie um plano de estudo de inglês em português para {nome}. Nível: {nivel}. "
              f"Tempo diário: {tempo}. Objetivo: {objetivo}. Organize em semanas com atividades práticas.")
    return executar(prompt, "planos_criados")


@app.route("/praticar_conversacao", methods=["POST"])
def praticar_conversacao():
    dados, erro = obter_dados()
    if erro:
        return erro
    try:
        resposta_aluno = validar_texto(dados, "resposta")
        cenario = validar_texto(dados, "cenario", obrigatorio=False) or "conversa geral"
    except (ValueError, OverflowError) as exc:
        return jsonify(sucesso=False, erro=str(exc)), 400
    prompt = (f"Analise em português a resposta em inglês do aluno no cenário {cenario}: "
              f"{resposta_aluno!r}. Aponte acertos, correções gramaticais e sugestões de expressão natural.")
    return executar(prompt, "sessoes_completas")


@app.route("/tirar_duvida", methods=["POST"])
def tirar_duvida():
    dados, erro = obter_dados()
    if erro:
        return erro
    try:
        duvida = validar_texto(dados, "duvida")
    except (ValueError, OverflowError) as exc:
        return jsonify(sucesso=False, erro=str(exc)), 400
    return executar(f"Responda em português, de forma clara e com exemplos, à dúvida de inglês: {duvida!r}.", "duvidas_tiradas")


@app.route("/get_progresso")
def get_progresso():
    inicializar_sessao_usuario()
    return jsonify(progresso=session["progresso"])


if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0", port=7860)
