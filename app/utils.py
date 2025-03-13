from datetime import datetime
import pandas as pd
import os
import json
import logging

WIND_DIR = {
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

OBSERVATIONS_COLUMN_MAPPING = {
    "data": "date",
    "hora": "time", 
    "temperatura": "temp",
    "precAcumulada": "prec",
    "radiacao": "rad",
    "idDireccVento": "wind dir",
    "intensidadeVentoKM": "wind km",
    "intensidadeVento": "wind",
}


DATE_FORMAT = {
    "date_time": "%Y-%m-%d %H:%M",
    "date": "%d %b",
    "week": "%d %b",
    "month": "%b %y"
}
    
logging.basicConfig(
    level=logging.INFO, format="\n> %(levelname)s:%(name)s: %(message)s"
)
logger = logging.getLogger(__name__)

def parse_datetime(date_str, formats=["%Y-%m-%dT%H:%M:%S", "%Y-%m-%dT%H:%M"]):
    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue
    logger.warning(f"Could not parse date: {date_str}")
    return None

def convert_date_column(df, column_name):
    df = df.copy()
    df[column_name] = pd.to_datetime(df[column_name], format="%Y-%m-%dT%H:%M", errors='coerce')
    df[column_name] = df[column_name].dt.strftime(DATE_FORMAT["date_time"])
    return df


def clean_no_data(df):
    df = df.replace(-99.0, "-")
    df = df.loc[:, (df != "-").any(axis=0)]
    return df



def export_json(collection):
    all_data = list(collection.find())
    for doc in all_data:
        doc["_id"] = str(doc.get("_id", ""))
        if "data_hora" in doc and isinstance(doc["data_hora"], (datetime, pd.Timestamp)):
            doc["data_hora"] = doc["data_hora"].strftime("%Y-%m-%dT%H:%M:%S")
    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
    exports_dir = os.path.join(parent_dir, "exports")
    os.makedirs(exports_dir, exist_ok=True)
    output_file = os.path.join(
        exports_dir, f"export_{datetime.now().strftime('%Y%m%d-%H%M')}.json"
    )
    with open(output_file, "w") as file:
        json.dump(all_data, file, indent=4)
    logger.info(f"{len(all_data)} docs exported to {output_file}.")

