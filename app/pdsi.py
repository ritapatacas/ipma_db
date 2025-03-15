import pandas as pd
from io import StringIO
from connections import get_mongo_db, pdsi_db
from fetch import fetch_pdsi
from utils import logger

db = get_mongo_db()
collection = pdsi_db

def process_and_store_pdsi():
    data = fetch_pdsi()
    df = pd.read_csv(StringIO(data))
    print(df)
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
    process_and_store_pdsi()
