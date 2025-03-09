import os
import json
import logging
from datetime import datetime
from dotenv import load_dotenv
from pymongo import MongoClient
from prettytable import PrettyTable
import matplotlib.pyplot as plt
import requests
import pandas as pd
import certifi

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
    MONGO_URI = os.getenv("MONGO_URI")

    client = MongoClient(
        MONGO_URI,
        tls=True,
        tlsAllowInvalidCertificates=False,
        tlsCAFile=certifi.where(),
    )
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
        {
            "data_hora": parse_datetime(hour),
            "data": parse_datetime(hour).strftime("%Y-%m-%d"),
            "hora": parse_datetime(hour).strftime("%H:%M"),
            **obs[STATION],
        }
        for hour, obs in data.items()
        if STATION in obs and obs[STATION] is not None
    ]

    if station_data:
        for entry in station_data:
            existing_entry = collection.find_one({"data_hora": entry["data_hora"]})

            if not existing_entry or existing_entry != entry:
                collection.update_one(
                    {"data_hora": entry["data_hora"]}, {"$set": entry}, upsert=True
                )
        logger.info("Fetched, processed, and stored data successfully")


def analyze_data():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)

    selected_columns = {
        "data_hora": "datetime",
        "hora": "time",
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
            .pipe(convert_date_column, "datetime")
            .sort_values(by="datetime", ascending=True)
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

        last_entries = df.tail(170)

        pd.set_option("display.max_columns", None)
        pd.set_option("display.max_rows", None)
        print(last_entries)
    else:
        logger.error("No data in the collection")


def check_missing_data():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)

    if df.empty:
        logger.error("No data in the collection")
        return

    df["date"] = pd.to_datetime(df["data_hora"])
    df["day"] = df["date"].dt.date
    df["hour"] = df["date"].dt.hour

    day_counts = df.groupby("day").size().reset_index(name="total_entries")

    min_date = df["day"].min()
    max_date = df["day"].max()
    complete_days = pd.date_range(start=min_date, end=max_date, freq="D").date

    complete_df = pd.DataFrame({"day": complete_days})
    complete_df["expected_entries"] = 24

    merged_df = complete_df.merge(day_counts, on="day", how="left").fillna(0)
    merged_df["total_entries"] = merged_df["total_entries"].astype(int)

    merged_df["missing_entries"] = (
        merged_df["expected_entries"] - merged_df["total_entries"]
    )

    days_with_missing_entries = merged_df[merged_df["missing_entries"] > 0]

    table = PrettyTable()
    table.field_names = ["Date", "Missing Entries"]
    total_missing = days_with_missing_entries["missing_entries"].sum()

    for _, row in days_with_missing_entries.iterrows():
        table.add_row([row["day"].strftime("%Y-%m-%d"), row["missing_entries"]])

    table.add_row(["Total", total_missing])
    print(table)
    print("\nTotal days with missing entries:", len(days_with_missing_entries))


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


def add_date_hour_fields():
    collection.update_many(
        {},
        [
            {
                "$set": {
                    "data": {
                        "$dateToString": {"format": "%Y-%m-%d", "date": "$data_hora"}
                    },
                    "hora": {
                        "$dateToString": {"format": "%H:%M", "date": "$data_hora"}
                    },
                }
            }
        ],
    )
    logger.info(
        "Fields 'data' and 'hora' updated to include hour and minute successfully."
    )


def plot_temperature_histogram():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)

    if df.empty:
        logger.error("No data in the collection")
        return

    df["temperatura"] = pd.to_numeric(df["temperatura"], errors="coerce")

    ideal_temps = df[df["temperatura"] < 7.2]["temperatura"]

    if ideal_temps.empty:
        logger.warning("No temperatures below 7.2°C found in the dataset.")
        return

    plt.figure(figsize=(10, 6))
    plt.hist(ideal_temps, bins=20, edgecolor="black", alpha=0.7)
    plt.title("Frequency of Temperatures Below 7.2°C", fontsize=16)
    plt.xlabel("Temperature (°C)", fontsize=14)
    plt.ylabel("Frequency", fontsize=14)
    plt.grid(axis="y", linestyle="--", alpha=0.7)

    plt.tight_layout()
    plt.show()


def hours_bellow_7():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)

    if df.empty:
        logger.error("No data in the collection")
        return

    df["temperatura"] = pd.to_numeric(df["temperatura"], errors="coerce")

    df["data_hora"] = pd.to_datetime(df["data_hora"])
    df["date"] = df["data_hora"].dt.date
    df["hour"] = df["data_hora"].dt.hour
    ideal_temps = df[df["temperatura"] < 7.5]

    if ideal_temps.empty:
        logger.warning("No temperatures below 7.5°C found in the dataset.")
        return

    ideal_hours = ideal_temps.groupby(["date", "hour"]).size().reset_index(name="count")

    daily_summary = ideal_hours.groupby("date").size().reset_index(name="ideal_hours")

    total_ideal_hours = daily_summary["ideal_hours"].sum()

    table = PrettyTable()
    table.field_names = ["date", "hours < 7.5°C"]

    for _, row in daily_summary.iterrows():
        table.add_row([row["date"], row["ideal_hours"]])

    table.add_row(["Total", total_ideal_hours])
    print(table)


def update_datetime_field(collection):
    try:
        result = collection.update_many(
            {"data_hora": {"$type": "string"}},
            [
                {
                    "$set": {
                        "data_hora": {"$toDate": "$data_hora"}
                    }
                }
            ]
        )
        print(f"{result.modified_count} documents updated with 'data_hora' as datetime.")
    except Exception as e:
        print(f"{e} error updating existing 'data_hora' to datetime")




def clean_duplicates(collection):
    duplicates = collection.aggregate([
        {
            "$group": {
                "_id": "$data_hora",
                "count": {"$sum": 1},
                "docs": {"$push": "$_id"}
            }
        },
        {
            "$match": {"count": {"$gt": 1}}
        }
    ])

    for d in duplicates:
        data_to_remove = d["docs"][1:]
        collection.delete_many({"_id": {"$in": data_to_remove}})
        print(f"removed duplicates for data_hora {d['_id']}")



def create_unique_index(collection):
    try:
        collection.create_index("data_hora", unique=True)
        print("unique index on 'data_hora' created with great success")
    except Exception as e:
        print(f"{e} error creating unique index")



def reorder_data(collection):
    try:
        all_data = list(collection.find().sort("data_hora", -1))
        collection.delete_many({})
        collection.insert_many(all_data)
        print("data reordered with great success based on 'data_hora' in descending order.")
    except Exception as e:
        print(f"{e} error reordering")

if __name__ == "__main__":
    # add_date_hour_fields()
    fetch_and_store_data()
    # analyze_data()
    # hours_bellow_7()
    # check_missing_data()
    # export_json(collection)