import os
import json
import argparse
import logging
from datetime import datetime
from dotenv import load_dotenv
from pymongo import MongoClient
import requests
import pandas as pd

# https://share.bito.ai/static/share?aid=c4463bfe-3372-4d77-aff9-c0143e2c8ccb

logging.basicConfig(
    level=logging.INFO, format="\n> %(levelname)s:%(name)s: %(message)s"
)
logger = logging.getLogger(__name__)

# db connection
load_dotenv()
MONGO_DB_NAME = "ipma"
MONGO_COLLECTION_NAME = "ansiao"

# ipma api request (ansião station)
STATION = "1210716"
IPMA_API_URL = (
    "https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json"
)


def get_collection():
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client[MONGO_DB_NAME]
    return db[MONGO_COLLECTION_NAME]


collection = get_collection()


def fetch_station_data():
    try:
        res = requests.get(IPMA_API_URL)
        res.raise_for_status()
        return res.json()
    except requests.RequestException as e:
        logger.error(f"{e} error fetching")
        return None


def fetch_and_store_data():
    data = fetch_station_data()
    if data is None:
        return

    station_data = [
        {"data_hora": parse_datetime(hour), **obs[STATION]}
        for hour, obs in data.items()
        if STATION in obs and obs[STATION] is not None
    ]

    if station_data:
        for entry in station_data:
            collection.update_one(
                {"data_hora": entry["data_hora"]}, {"$set": entry}, upsert=True
            )
        logger.info("fetched and stored with great success")


def analyze_data():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)

    selected_columns = {
        "data_hora": "date",
        "temperatura": "temp",
        "precAcumulada": "prec",
        "radiacao": "rad",
        "idDireccVento": "wind dir",
        "intensidadeVentoKM": "wind km",
        "intensidadeVento": "wind",
    }

    if not df.empty:
        df = (
            df[selected_columns.keys()]
            .rename(columns=selected_columns)
            .pipe(convert_date_column, "date")
            .assign(
                date_sort=lambda x: pd.to_datetime(x["date"], format="%Y-%m-%d %HH")
            )
            .sort_values(by="date_sort", ascending=True)
            .drop(columns=["date_sort"])
        )

        df = clean_no_data(df)
        direction_mapping = {
            0: "-",
            1: "N",
            9: "N",
            2: "NE",
            3: "E",
            4: "SE",
            5: "S",
            6: "SW",
            7: "W",
            8: "NW",
        }
        df["wind dir"] = df["wind dir"].map(direction_mapping).fillna("Unknown")
        pd.set_option("display.max_columns", None)
        pd.set_option("display.max_rows", None)
        print(df)
    else:
        logger.error("no data in the collection")


def export_json(collection):
    try:
        data = list(collection.find())

        for doc in data:
            doc["_id"] = str(doc.get("_id", ""))
            if isinstance(doc.get("data_hora"), datetime):
                doc["data_hora"] = doc["data_hora"].strftime("%Y-%m-%dT%H:%M:%S")

        parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
        exports_dir = os.path.join(parent_dir, "exports")
        os.makedirs(exports_dir, exist_ok=True)
        output_file = os.path.join(
            exports_dir, f"export_{datetime.now().strftime('%Y%m%d-%HH')}.json"
        )

        with open(output_file, "w") as file:
            json.dump(data, file, indent=4)

        logger.info(f"{len(data)} docs exported to {output_file}.")
    except Exception as e:
        logger.error(f"{e} error exporting")


def parse_datetime(date_str, formats=["%Y-%m-%dT%H:%M:%S", "%Y-%m-%dT%H:%M"]):
    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue
    raise ValueError(f"date string '{date_str}' does not match format")


def convert_date_column(df, column_name):
    df[column_name] = pd.to_datetime(df[column_name], format="%Y-%m-%dT%H:%M")
    df[column_name] = df[column_name].dt.strftime("%Y-%m-%d %HH")
    return df


def clean_no_data(df):
    df = df.replace(-99.0, "-")
    df = df.loc[:, (df != "-").any(axis=0)]
    return df


if __name__ == "__main__":
    fetch_and_store_data()
    analyze_data()

    # clean_duplicates(collection)
    # create_unique_index(collection)

    temperature_data = collection.find({}, {"data_hora": 1, "temperatura": 1, "_id": 0})
    # pprint(list(temperature_data))

    export_json(collection)
