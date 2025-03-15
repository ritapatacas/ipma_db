import pandas as pd
from io import StringIO
from connections import get_mongo_collection
from fetch import fetch_evapotranspiration
from utils import logger

collection = get_mongo_collection("evapotranspiration")

def process_and_store_evapotranspiration():
    data = fetch_evapotranspiration()
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

    logger.info(f"✅ {len(records)} records processed and stored in MongoDB.")

if __name__ == "__main__":
    process_and_store_evapotranspiration()

