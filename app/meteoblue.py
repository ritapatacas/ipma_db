import requests
from bs4 import BeautifulSoup
import ast
from prettytable import PrettyTable

FORECAST_URL = "https://www.meteoblue.com/en/weather/14-days/troviscais-fundeiros_portugal_2262489"

def fetch_and_soup_forecast():

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }

    response = requests.get(FORECAST_URL, headers=headers)
    response.raise_for_status()
    return BeautifulSoup(response.content, "html.parser")


def parse_canvas_data(data):
    try:
        return ast.literal_eval(data) if data else []
    except Exception:
        return []


def parse_soup_forecast():
    soup = fetch_and_soup_forecast()
    table = soup.find("table", class_="forecast-table")

    if not table:
        print("\n❌ ERROR: Forecast table not found! The webpage structure might have changed.")
        return {}

    rows = table.find_all("tr")

    row_mapping = {
        1: 'weekday',
        2: 'date',
        3: 'obs',
        4: 'max',
        5: 'min',
        8: 'predictability',
        10: 'temperature-canva',
        13: 'precipitation-canva',
        14: 'probability'
    }

    clean_rows = {}
    canvas_data = {}

    for idx, row in enumerate(rows, start=1):
        row_name = row_mapping.get(idx)

        if row_name == "obs":
            titles = [img.get("title", "").strip() for img in row.find_all("img")]
            clean_rows[row_name] = titles

        elif row_name in ["temperature-canva", "precipitation-canva"]:
            canvas = row.find("canvas")
            if canvas:
                if canvas.get("id") == "canvas_14_days_forecast_tempereture":
                    canvas_data["temperature_max"] = parse_canvas_data(canvas.get("data-temperatures-max"))
                    canvas_data["temperature_min"] = parse_canvas_data(canvas.get("data-temperatures-min"))
                    canvas_data["temperature_spread"] = parse_canvas_data(canvas.get("data-temperature-spread"))
                elif canvas.get("id") == "canvas_14_days_forecast_precipitations":
                    canvas_data["precipitation"] = parse_canvas_data(canvas.get("data-precipitation"))
                    canvas_data["precipitation_spread"] = parse_canvas_data(canvas.get("data-precipitation-spread"))

        elif row_name:
            clean_rows[row_name] = [cell.get_text(strip=True) for cell in row.find_all(["td", "th"])]

    # 🔍 Debug: Print raw extracted data before conversion
    print("\n🔍 RAW EXTRACTED DATA FROM WEB SCRAPING 🔍")
    print("clean_rows:", clean_rows)
    print("canvas_data:", canvas_data)

    # ✅ Ensure numeric conversion of extracted data
    def to_float_list(lst):
        return [float(x) if isinstance(x, (int, float)) or (isinstance(x, str) and x.replace('.', '', 1).isdigit()) else None for x in lst]

    forecast = {
        "date": clean_rows.get("date", []),
        "weekday": clean_rows.get("weekday", []),
        "min": to_float_list(canvas_data.get("temperature_min", [])),  # Convert to float
        "max": to_float_list(canvas_data.get("temperature_max", [])),  # Convert to float
        "pred": clean_rows.get("predictability", []),
        "prec mm": to_float_list(canvas_data.get("precipitation", [])),  # Convert to float
        "prob %": clean_rows.get("probability", []),
        "obs": clean_rows.get("obs", []),
    }

    # 🔍 Debug: Print converted data
    print("\n✅ DATA AFTER CONVERSION TO FLOATS ✅")
    print(forecast)

    return forecast


def show_forecast():
    forecast = parse_soup_forecast()
    headers = list(forecast.keys())
    num_days = len(next(iter(forecast.values()), [])) 
    
    table = PrettyTable()
    table.field_names = headers

    for i in range(num_days):
        row = [forecast[key][i] if i < len(forecast[key]) else "" for key in headers]
        table.add_row(row)

    print(table)


if __name__ == "__main__":
    show_forecast()