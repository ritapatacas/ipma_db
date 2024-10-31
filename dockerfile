FROM python:3.9-slim

WORKDIR /app

COPY . /app

RUN pip install requests pymongo

CMD ["python", "fetch.py"]
