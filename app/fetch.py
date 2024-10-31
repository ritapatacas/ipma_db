import requests
from pymongo import MongoClient
from dotenv import load_dotenv
from pprint import pprint
import os

load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"))
db = client["ipma"]
collection = db["ansiao"]

# Ansião
station = "1210716"
url = "https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json"


res = requests.get(url)
if res.status_code == 200:
    data = res.json()

    station_data = [
        {"data_hora": hour, **obs[station]}
        for hour, obs in data.items()
        if station in obs and obs[station] is not None
    ]

    if station_data:
        collection.insert_many(station_data)
        print("data stored")
        print(station_data)
    else:
        print("no valid data")
else:
    print(f"error: {res.status_code}")


def get_database_data(collection, query=None):
    if query is None:
        query = {}
    
    try:
        data = list(collection.find(query))
        return data
    except Exception as e:
        print(f"error: {e}")
        return []


def get_temperature(collection, query=None):
    if query is None:
        query = {}
    
    try:
        projection = {"data_hora": 1, "temperatura": 1, "_id": 0}
        data = list(collection.find(query, projection))
        return data
    except Exception as e:
        print(f"error: {e}")
        return []

if __name__ == "__main__":
    temperature_data = get_temperature(collection)
    print("data retrieved")
    pprint(temperature_data)