import requests
from bs4 import BeautifulSoup
import ast
from prettytable import PrettyTable
import pandas as pd
from data_utils import ICON_MAP

FORECAST_URL = "https://www.meteoblue.com/en/weather/14-days/troviscais-fundeiros_portugal_2262489"

def fetch_and_soup_forecast():
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }
    response = requests.get(FORECAST_URL, headers=headers, timeout=20)
    response.raise_for_status()
    return BeautifulSoup(response.content, "html.parser")

def parse_canvas_data(data):
    try:
        return ast.literal_eval(data) if data else []
    except Exception:
        return []

def fahrenheit_to_celsius(temp_f):
    return round((temp_f - 32) * 5.0 / 9.0, 2)


def _align_forecast_lengths(forecast: dict) -> dict:
    """Pad/truncate all forecast arrays so DataFrame creation is safe."""
    date_len = len(forecast.get("date", []))
    if date_len == 0:
        date_len = max((len(v) for v in forecast.values() if isinstance(v, list)), default=0)

    aligned = {}
    for key, values in forecast.items():
        values = values if isinstance(values, list) else [values]
        if len(values) < date_len:
            values = values + [None] * (date_len - len(values))
        else:
            values = values[:date_len]
        aligned[key] = values
    return aligned


def parse_soup_forecast():
    soup = fetch_and_soup_forecast()
    is_fahrenheit = is_forecast_in_fahrenheit(soup)

    table = soup.find("table", class_="forecast-table")
    if table is None:
        raise ValueError("Forecast table not found in Meteoblue response")
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
            imgs = row.find_all("img")
            titles = [img.get("title", "").strip() for img in imgs]
            icons = [str(img) for img in imgs]
            clean_rows[row_name] = titles
            clean_rows["icon"] = icons

        elif row_name in ["temperature-canva", "precipitation-canva"]:
            canvas = row.find("canvas")
            if canvas:
                if canvas.get("id") == "canvas_14_days_forecast_tempereture":
                    canvas_data["temperature_max"] = parse_canvas_data(canvas.get("data-temperatures-max"))
                    canvas_data["temperature_min"] = parse_canvas_data(canvas.get("data-temperatures-min"))
                elif canvas.get("id") == "canvas_14_days_forecast_precipitations":
                    canvas_data["precipitation"] = parse_canvas_data(canvas.get("data-precipitation"))

        elif row_name:
            clean_rows[row_name] = [cell.get_text(strip=True) for cell in row.find_all(["td", "th"])]

    def clean_temperature_values(temp_list):
        cleaned = []
        for temp in temp_list:
            temp = temp.replace("°", "").strip()
            if temp.replace('.', '', 1).isdigit():
                cleaned.append(float(temp))
            else:
                cleaned.append(None)
        return cleaned

    def convert_temperatures(temp_list):
        return [fahrenheit_to_celsius(temp) if temp is not None else None for temp in temp_list]

    raw_min = clean_temperature_values(clean_rows.get("min", []))
    raw_max = clean_temperature_values(clean_rows.get("max", []))

    forecast = {
        "date": clean_rows.get("date", []),
        "weekday": clean_rows.get("weekday", []),
        "min": convert_temperatures(raw_min) if is_fahrenheit else raw_min,
        "max": convert_temperatures(raw_max) if is_fahrenheit else raw_max,
        "pred": clean_rows.get("predictability", []),
        "prec mm": canvas_data.get("precipitation", []),
        "prob %": clean_rows.get("probability", []),
        "obs": clean_rows.get("obs", []),
        "icon": clean_rows.get("icon", []),
    }

    print("\n✅ CLEANED TEMPERATURES (°C) ✅")
    print("Converted min:", forecast["min"])
    print("Converted max:", forecast["max"])

    return _align_forecast_lengths(forecast)

def is_forecast_in_fahrenheit(soup):
    current_temp_div = soup.find("div", class_="h1 current-temp")
    if current_temp_div:
        text = current_temp_div.get_text(strip=True)
        return "°F" in text
    return False


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

def obs_to_icon_html(obs_text):
    icon_class = ICON_MAP.get(obs_text, "fa-question")
    return f'<i class="fas {icon_class}" data-tooltip="{obs_text}"></i>'

def generate_html_forecast():
    forecast = parse_soup_forecast()
    headers = list(forecast.keys())
    num_days = len(next(iter(forecast.values()), []))

    html = '<table class="table">\n<thead>\n<tr>'
    for header in headers:
        html += f"<th>{header}</th>"
    html += "</tr>\n</thead>\n<tbody>\n"

    for i in range(num_days):
        html += "<tr>"
        for key in headers:
            value = forecast[key][i] if i < len(forecast[key]) else ""
            if key == "obs":
                value = obs_to_icon_html(value)
            html += f"<td>{value}</td>"
        html += "</tr>\n"

    html += "</tbody>\n</table>"
    return html


if __name__ == "__main__":
    show_forecast()
