from datetime import datetime
import pandas as pd
import os
import json
import logging
from connections import load_config


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
    "month": "%b %y",
}

WARNING_ICONS = {
    "Nevoeiro": "fa-smog",
    "Tempo Quente": "fa-temperature-high",
    "Tempo Frio": "fa-temperature-low",
    "Precipitação": "fa-cloud-rain",
    "Neve": "fa-snowflake",
    "Trovoada": "fa-bolt",
    "Vento": "fa-wind",
}

WARNING_LEVEL_COLORS = {
    "green": '#26ba81',
    "yellow": '#FFD43B',
    "orange": '#f58d38',
    "red": '#ea3939',
}

def get_warning_level_icon(level: str) -> str:
    """Returns an HTML icon for the warning level."""
    color = WARNING_LEVEL_COLORS.get(level.lower(), "")  # Ensures lowercase match
    return f'<i class="fa-solid fa-circle" style="color: {color};"></i>' if color else ""


logging.basicConfig(
    level=logging.INFO, format="\n> %(levelname)s:%(name)s: %(message)s"
)
logger = logging.getLogger(__name__)

def get_closest_regions():
    config = load_config()
    return config["ipma"]["closest_regions"]


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
    df[column_name] = pd.to_datetime(
        df[column_name], format="%Y-%m-%dT%H:%M", errors="coerce"
    )
    df[column_name] = df[column_name].dt.strftime(DATE_FORMAT["date_time"])
    return df


def clean_no_data(df):
    df = df.replace(-99.0, "-")
    df = df.loc[:, (df != "-").any(axis=0)]
    return df


precipitation_validator = {
    "$jsonSchema": {
        "bsonType": "object",
        "required": ["date", "minimum", "maximum", "range", "mean", "std"],
        "properties": {
            "date": {"bsonType": "string"},
            "minimum": {"bsonType": "double"},
            "maximum": {"bsonType": "double"},
            "range": {"bsonType": "double"},
            "mean": {"bsonType": "double"},
            "std": {"bsonType": "double"},
        },
    }
}

evapotranspiration_validator = {
    "$jsonSchema": {
        "bsonType": "object",
        "required": ["date", "minimum", "maximum", "range", "mean", "std"],
        "properties": {
            "date": {"bsonType": "string"},
            "minimum": {"bsonType": "double"},
            "maximum": {"bsonType": "double"},
            "range": {"bsonType": "double"},
            "mean": {"bsonType": "double"},
            "std": {"bsonType": "double"},
        },
    }
}

pdsi_validator = {
    "$jsonSchema": {
        "bsonType": "object",
        "required": ["date", "minimum", "maximum", "range", "mean", "std"],
        "properties": {
            "date": {
                "bsonType": "string",
                "description": "Reference month in YYYY-MM-01 format (monthly PDSI)",
            },
            "minimum": {
                "bsonType": "double",
                "description": "Minimum monthly PDSI value",
            },
            "maximum": {
                "bsonType": "double",
                "description": "Maximum monthly PDSI value",
            },
            "range": {
                "bsonType": "double",
                "description": "Range of monthly PDSI values",
            },
            "mean": {"bsonType": "double", "description": "Mean monthly PDSI value"},
            "std": {
                "bsonType": "double",
                "description": "Standard deviation of monthly PDSI values",
            },
        },
    }
}


def apply_schema_validation(collection, schema):
    """Apply schema validator to an existing MongoDB collection."""
    db = collection.database
    logger.info(f"Applying schema validation to collection '{collection.name}'.")
    db.command(
        {"collMod": collection.name, "validator": schema, "validationLevel": "moderate"}
    )
    logger.info(f"✅ Schema validation applied to '{collection.name}'.")


def create_unique_date_index(collection):
    """Create unique index on 'date' field to avoid duplicates."""
    logger.info(
        f"Creating unique index on 'date' field for collection '{collection.name}'."
    )
    collection.create_index([("date", 1)], unique=True)
    logger.info(f"✅ Unique index on 'date' created.")


def setup_collection(collection, schema):
    """Setup collection with schema validation and unique index."""
    apply_schema_validation(collection, schema)
    create_unique_date_index(collection)
    logger.info(
        f"✅ Collection '{collection.name}' is fully set up with schema and index."
    )


def export_json(collection):
    """Export collection to JSON file."""
    all_data = list(collection.find())
    for doc in all_data:
        doc["_id"] = str(doc.get("_id", ""))
        if "data_hora" in doc and isinstance(
            doc["data_hora"], (datetime, pd.Timestamp)
        ):
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
