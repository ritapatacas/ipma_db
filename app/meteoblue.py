import requests
from bs4 import BeautifulSoup

FORECAST_URL = "https://www.meteoblue.com/en/weather/14-days/troviscais-fundeiros_portugal_2262489"

def fetch_and_soup_forecast():
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }
    response = requests.get(FORECAST_URL, headers=headers)
    response.raise_for_status()
    return BeautifulSoup(response.content, "html.parser")

def fahrenheit_to_celsius(temp_f):
    return round((temp_f - 32) * 5.0 / 9.0, 2)

def parse_soup_forecast():
    soup = fetch_and_soup_forecast()
    table = soup.find("table", class_="forecast-table")
    rows = table.find_all("tr")

    row_mapping = {
        1: 'weekday',
        2: 'date',
        3: 'obs',
        4: 'max',
        5: 'min',
        8: 'predictability',
        13: 'precipitation',
        14: 'probability'
    }

    clean_rows = {}

    for idx, row in enumerate(rows, start=1):
        row_name = row_mapping.get(idx)
        if row_name:
            clean_rows[row_name] = [cell.get_text(strip=True) for cell in row.find_all(["td", "th"])]

    def convert_temperatures(temp_list):
        return [fahrenheit_to_celsius(float(temp.replace("°", "").strip())) if temp.replace("°", "").strip().isdigit() else None for temp in temp_list]

    forecast = {
        "date": clean_rows.get("date", []),
        "weekday": clean_rows.get("weekday", []),
        "min": convert_temperatures(clean_rows.get("min", [])),
        "max": convert_temperatures(clean_rows.get("max", [])),
        "pred": clean_rows.get("predictability", []),
        "prec mm": clean_rows.get("precipitation", []),
        "prob %": clean_rows.get("probability", []),
        "obs": clean_rows.get("obs", []),
    }

    return forecast

def show_forecast():
    forecast = parse_soup_forecast()
    headers = list(forecast.keys())
    num_days = len(forecast["date"])

    print("\nWeather Forecast:")
    print("\t".join(headers))
    for i in range(num_days):
        print("\t".join(str(forecast[key][i]) if i < len(forecast[key]) else "" for key in headers))

if __name__ == "__main__":
    show_forecast()
