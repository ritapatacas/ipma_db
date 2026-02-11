"""
Build static site: read from MongoDB (and live APIs), write dist/data/*.json
and copy static assets into dist/. Run in CI with MONGO_URI; never commit dist/ to main.
"""
import json
import os
import shutil

import pandas as pd

from app.data.evapotranspiration import fetch_and_group_evapotranspiration_data
from app.data.fetch import warnings_by_region
from app.data.precipitation import fetch_and_group_precipitation_data
from app.utils import get_closest_regions
from app.views.analyze import (
    observations,
    summarize_cold_hours,
    summarize_missing_entries,
)
from app.views.forecast_view import load_forecast_dataframe

# Output layout: dist/ at repo root
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
APP_DIR = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))
PROJECT_ROOT = os.path.abspath(os.path.join(APP_DIR, ".."))
DIST_DIR = os.path.join(PROJECT_ROOT, "dist")
DATA_DIR = os.path.join(DIST_DIR, "data")

# Observations window: last N hours (larger = more history for client-side date filter)
OBSERVATIONS_LAST_N = 48 * 30  # ~30 days of hourly data


def _df_to_records(df: pd.DataFrame) -> list[dict]:
    """Convert DataFrame to JSON-serializable list of dicts (NaT/NaN -> null)."""
    if df.empty:
        return []
    return json.loads(df.to_json(orient="records", date_format="iso"))


def _write_json(path: str, data: object) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def build_data() -> None:
    """Load all data from MongoDB and APIs, write dist/data/*.json."""
    os.makedirs(DATA_DIR, exist_ok=True)

    # Observations (extended window for date search)
    df_obs = pd.DataFrame(observations(last_n=OBSERVATIONS_LAST_N))
    _write_json(os.path.join(DATA_DIR, "observations.json"), _df_to_records(df_obs))

    # Evapotranspiration & precipitation
    df_evapo = fetch_and_group_evapotranspiration_data("day")
    df_evapo["period"] = df_evapo["period"].astype(str)
    _write_json(os.path.join(DATA_DIR, "evapotranspiration.json"), _df_to_records(df_evapo))

    df_precip = fetch_and_group_precipitation_data("day")
    df_precip["period"] = df_precip["period"].astype(str)
    _write_json(os.path.join(DATA_DIR, "precipitation.json"), _df_to_records(df_precip))

    # Cold hours & missing entries (month)
    df_cold = pd.DataFrame(summarize_cold_hours("month"))
    _write_json(os.path.join(DATA_DIR, "cold_hours.json"), _df_to_records(df_cold))

    df_missing = pd.DataFrame(summarize_missing_entries("month"))
    _write_json(os.path.join(DATA_DIR, "missing_entries.json"), _df_to_records(df_missing))

    # Warnings
    warnings_data = warnings_by_region()
    if warnings_data is None:
        warnings_data = {"warnings": []}
    _write_json(os.path.join(DATA_DIR, "warnings.json"), warnings_data)

    # Regions (for warnings table: area id -> acronym, local, distance)
    regions = get_closest_regions()
    _write_json(os.path.join(DATA_DIR, "regions.json"), regions)

    # Forecast (Meteoblue)
    df_forecast = load_forecast_dataframe()
    _write_json(os.path.join(DATA_DIR, "forecast.json"), _df_to_records(df_forecast))

    print(f"Wrote JSON files to {DATA_DIR}")


def copy_static_assets() -> None:
    """Copy index.html, script.js, style.css into dist/ preserving layout."""
    # index.html at repo root -> dist/index.html
    index_src = os.path.join(PROJECT_ROOT, "index.html")
    if os.path.isfile(index_src):
        shutil.copy2(index_src, os.path.join(DIST_DIR, "index.html"))
        print(f"Copied index.html -> dist/")

    # app/static/script.js -> dist/app/static/script.js
    # app/static/css/style.css -> dist/app/static/css/style.css
    static_src = os.path.join(APP_DIR, "static")
    static_dst = os.path.join(DIST_DIR, "app", "static")
    if os.path.isdir(static_src):
        if os.path.isdir(static_dst):
            shutil.rmtree(static_dst)
        def ignore_tables_js(d: str, names: list[str]) -> list[str]:
            return [n for n in names if n == "tables.js"]
        shutil.copytree(static_src, static_dst, ignore=ignore_tables_js)
        print(f"Copied app/static -> dist/app/static (excluding tables.js)")


def main() -> None:
    build_data()
    copy_static_assets()
    print(f"Build complete: {DIST_DIR}")


if __name__ == "__main__":
    main()
