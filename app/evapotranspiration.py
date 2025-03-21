import pandas as pd
from io import StringIO
from connections import get_mongo_collection
from fetch import fetch_evapotranspiration
from utils import logger

collection = get_mongo_collection("evapotranspiration")

def process_and_store_evapotranspiration():
    data = fetch_evapotranspiration()
    df = pd.read_csv(StringIO(data))

    # ✅ Only keep expected columns
    df = df[["date", "minimum", "maximum", "mean", "range", "std"]]

    # ✅ Standardize to match stored schema
    records = []
    for _, row in df.iterrows():
        record = {
            "date": row["date"],
            "minimum": float(row["minimum"]),
            "mean": float(row["mean"]),
            "maximum": float(row["maximum"]),
            "range": float(row["range"]),
            "std": float(row["std"]),
        }
        records.append(record)

    for record in records:
        collection.update_one({"date": record["date"]}, {"$set": record}, upsert=True)

    logger.info(f"✅ {len(records)} records processed and stored in MongoDB.")


if __name__ == "__main__":
    process_and_store_evapotranspiration()
