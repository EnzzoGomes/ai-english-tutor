import requests
import pytest

import app as tutor_app


class FakeResponse:
    status_code = 200

    def json(self):
        return {"choices": [{"message": {"content": "Resposta de teste"}}]}


@pytest.fixture
def client(monkeypatch):
    monkeypatch.setattr(tutor_app.app, "secret_key", "test-secret")
    tutor_app.app.config.update(TESTING=True)
    with tutor_app.app.test_client() as test_client:
        yield test_client


def test_health_and_index(client):
    assert client.get("/health").json == {"status": "ok"}
    assert client.get("/").status_code == 200


def test_question_calls_groq_and_tracks_progress(client, monkeypatch):
    monkeypatch.setenv("GROQ_API_KEY", "test-key")
    calls = []
    monkeypatch.setattr(tutor_app.requests, "post", lambda *args, **kwargs: calls.append(kwargs) or FakeResponse())
    response = client.post("/tirar_duvida", json={"duvida": "Quando uso do e does?"})
    assert response.status_code == 200
    assert response.json["resposta"] == "Resposta de teste"
    assert calls[0]["timeout"] == tutor_app.REQUEST_TIMEOUT
    assert client.get("/get_progresso").json["progresso"]["duvidas_tiradas"] == 1


def test_missing_api_key_returns_json_error(client, monkeypatch):
    monkeypatch.delenv("GROQ_API_KEY", raising=False)
    response = client.post("/tirar_duvida", json={"duvida": "Uma dúvida"})
    assert response.status_code == 503
    assert response.json["sucesso"] is False
    assert "GROQ_API_KEY" in response.json["erro"]


def test_groq_timeout_returns_json_error(client, monkeypatch):
    monkeypatch.setenv("GROQ_API_KEY", "test-key")

    def timeout(*_args, **_kwargs):
        raise requests.Timeout()

    monkeypatch.setattr(tutor_app.requests, "post", timeout)
    response = client.post("/tirar_duvida", json={"duvida": "Uma dúvida"})
    assert response.status_code == 503
    assert "demorou" in response.json["erro"]


def test_invalid_groq_status_returns_json_error(client, monkeypatch):
    monkeypatch.setenv("GROQ_API_KEY", "test-key")

    class ErrorResponse:
        status_code = 429

    monkeypatch.setattr(tutor_app.requests, "post", lambda *_args, **_kwargs: ErrorResponse())
    response = client.post("/tirar_duvida", json={"duvida": "Uma dúvida"})
    assert response.status_code == 503
    assert response.json["sucesso"] is False


def test_message_validation_and_history_bound(client, monkeypatch):
    invalid = client.post("/tirar_duvida", json={"duvida": "   "})
    too_long = client.post("/tirar_duvida", json={"duvida": "x" * (tutor_app.MAX_MESSAGE_LENGTH + 1)})
    assert invalid.status_code == 400
    assert too_long.status_code == 400

    monkeypatch.setenv("GROQ_API_KEY", "test-key")
    monkeypatch.setattr(tutor_app.requests, "post", lambda *_args, **_kwargs: FakeResponse())
    with client.session_transaction() as current_session:
        current_session["historico"] = [
            {"role": "user", "content": f"mensagem {index}"} for index in range(tutor_app.MAX_HISTORY_ITEMS)
        ]
    client.post("/tirar_duvida", json={"duvida": "Mais uma dúvida"})
    with client.session_transaction() as current_session:
        assert len(current_session["historico"]) <= tutor_app.MAX_HISTORY_ITEMS
        assert sum(len(item["content"]) for item in current_session["historico"]) <= tutor_app.MAX_HISTORY_CHARS
