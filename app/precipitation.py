import pandas as pd
from io import StringIO
from connections import get_mongo_db, precipitation_db
from fetch import fetch_daily_precipitation
from utils import logger

db = get_mongo_db()
collection = precipitation_db


def process_and_store_precipitation():
    data = fetch_daily_precipitation()
    df = pd.read_csv(StringIO(data))
    
    records = []
    for _, row in df.iterrows():
        record = {
            "date": row["date"],
            "minimum": float(row["minimum"]),
            "maximum": float(row["maximum"]),
            "range": float(row["range"]),
            "mean": float(row["mean"]),
            "std": float(row["std"])
        }
        records.append(record)
    

    for record in records:
        collection.update_one(
            {"date": record["date"]},
            {"$set": record},
            upsert=True
        )
    
    print(f"✅ {len(records)} records processed and stored in MongoDB.")

if __name__ == "__main__":
    process_and_store_precipitation()