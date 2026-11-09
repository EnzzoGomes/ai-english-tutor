FROM python:3.9-slim

WORKDIR /app

# Copia primeiro o requirements para cache de dependências
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copia o resto dos arquivos
COPY . .

EXPOSE 7860

CMD ["python", "app.py"]
