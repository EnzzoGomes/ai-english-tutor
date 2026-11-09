# AI English Tutor

Projeto de portfólio com uma landing page e uma aplicação de tutoria de inglês baseada em modelo de linguagem.

**Demonstração:** [AI English Tutor no Hugging Face](https://huggingface.co/spaces/Enzzozink/tutor-ingles-ia)

## Arquitetura

O diretório raiz contém a landing page em React 19, TypeScript e Vite. Tailwind CSS é carregado por CDN. A aplicação do tutor está em `tutor/`: Flask serve o HTML e disponibiliza rotas JSON. O backend solicita respostas à API da Groq usando o modelo `llama-3.1-8b-instant`. O Dockerfile mantém a execução do Space na porta 7860.

O repositório contém uma cópia local do código do tutor para desenvolvimento e demonstração da arquitetura. Alterações locais não são publicadas automaticamente no Hugging Face Space.

## Funcionalidades implementadas

- Geração de plano de estudo com nome, nível, tempo disponível e objetivo.
- Feedback textual sobre uma resposta em inglês em um cenário selecionado.
- Respostas em português a dúvidas sobre inglês.
- Contadores de atividade e histórico recente mantidos na sessão assinada do Flask.
- Rota `GET /health` para verificação de disponibilidade.

O aplicativo não analisa áudio, não mede pronúncia falada, não adapta automaticamente um currículo e não persiste dados em banco de dados.

## Tecnologias

- Landing page: React 19, TypeScript, Vite e Tailwind CSS via CDN.
- Tutor: Python, Flask, Requests e API da Groq.
- Execução do tutor: Docker, compatível com Hugging Face Spaces.
- Testes: pytest, com a chamada HTTP à Groq simulada.

## Executar a landing page

Requer Node.js e npm instalados.

```bash
npm install
npm run dev
```

Para gerar os arquivos de produção:

```bash
npm run build
```

## Executar o tutor

Requer Python 3.9 ou superior. Instale as dependências e configure as variáveis no ambiente do processo:

```bash
cd tutor
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export GROQ_API_KEY="sua_chave_groq"
export FLASK_SECRET_KEY="um_segredo_aleatorio"
python app.py
```

No Windows, ative o ambiente virtual com `.venv\Scripts\activate`. A aplicação escuta em `http://localhost:7860`. Consulte `tutor/.env.example` para os nomes das variáveis. O arquivo é apenas um modelo e não contém credenciais.

| Variável | Uso |
| --- | --- |
| `GROQ_API_KEY` | Chave necessária para chamar a API da Groq. |
| `FLASK_SECRET_KEY` | Segredo usado para assinar sessões. Se omitido, um valor aleatório é gerado para o processo atual e as sessões deixam de ser válidas após reiniciar. |

## Testes

Instale as dependências de desenvolvimento e execute pytest a partir de `tutor/`:

```bash
cd tutor
pip install -r requirements-dev.txt
pytest
```

Os testes substituem a chamada HTTP à Groq e não acessam a rede.
