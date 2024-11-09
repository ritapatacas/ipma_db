FROM python:3.9-slim

WORKDIR /app

COPY . /app

RUN pip install requests pymongo
RUN pip install requests pymongo pandas
CMD ["python", "fetch.py"]
