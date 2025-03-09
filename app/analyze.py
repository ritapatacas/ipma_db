import logging
import pandas as pd
from prettytable import PrettyTable
from fetch import fetch_and_store_data
from utils import clean_no_data

logging.basicConfig(
    level=logging.INFO, format="\n> %(levelname)s:%(name)s: %(message)s"
)
logger = logging.getLogger(__name__)

from fetch import get_collection
collection = get_collection()


def analyze_data():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)

    selected_columns = {
        "data": "date",
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
            .sort_values(by="date", ascending=True)
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

        last_entries = df.tail(48)
        table = PrettyTable()
        table.field_names = df.columns.tolist()
        for _, row in last_entries.iterrows():
            table.add_row(row.tolist())
        print(table)
    else:
        logger.error("No data in the collection")
def hours_below_7():
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


if __name__ == "__main__":
    fetch_and_store_data()
    analyze_data()
    # hours_below_7()
    # check_missing_data(collection)
    # export_json(collection)
