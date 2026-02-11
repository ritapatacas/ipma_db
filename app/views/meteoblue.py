import requests
from bs4 import BeautifulSoup
import ast
import json
import re
import pandas as pd
from app.data.data_utils import ICON_MAP
try:
    from prettytable import PrettyTable
except Exception:
    PrettyTable = None

FORECAST_URL = "https://www.meteoblue.com/en/weather/14-days/troviscais-fundeiros_portugal_2262489"
WEEK_URL = "https://www.meteoblue.com/en/weather/week/troviscais-fundeiros_portugal_2262489"
WEEK_ONEDAY_URL = "https://www.meteoblue.com/en/weather/week/oneday/troviscais-fundeiros_portugal_2262489"

def fetch_and_soup_forecast():
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }
    response = requests.get(FORECAST_URL, headers=headers, timeout=20)
    response.raise_for_status()
    return BeautifulSoup(response.content, "html.parser")


def _has_hourly_payload(soup: BeautifulSoup) -> bool:
    desktop = soup.select_one("#hourly_forecast table.hourlywind, table.hourlywind")
    mobile = soup.select_one(".no-desktop table.hourly-view, .no-desktop table.picto, table.hourly-view")
    if desktop and desktop.select_one("tr.times td"):
        return True
    if mobile and mobile.select_one("tr.times td"):
        return True
    return False


def fetch_and_soup_hourly(day: int):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": FORECAST_URL,
    }
    candidates = [
        f"{WEEK_URL}?day={day}",
        f"{WEEK_ONEDAY_URL}?day={day}",
        f"{WEEK_ONEDAY_URL}?day={day}&hourly=1",
        f"{WEEK_ONEDAY_URL}?day={day}&resolution=1h",
        f"{WEEK_URL}?day={day}&hourly=1",
    ]
    session = requests.Session()
    last_error = None
    for url in candidates:
        try:
            response = session.get(
                url,
                headers=headers,
                cookies={"hourly": "1", "view": "1h", "resolution": "1h"},
                timeout=20,
            )
            response.raise_for_status()
            soup = BeautifulSoup(response.content, "html.parser")
            if _has_hourly_payload(soup):
                return soup
            last_error = ValueError(f"No hourly payload in response from {url}")
        except Exception as e:
            last_error = e
    raise RuntimeError(f"Hourly page unavailable for day={day}: {last_error}")

def parse_canvas_data(data):
    if not data:
        return []
    # Try Python literal first (legacy format).
    try:
        parsed = ast.literal_eval(data)
        return parsed if isinstance(parsed, list) else []
    except Exception:
        pass

    # Meteoblue frequently returns JSON-like arrays with null/NaN.
    txt = str(data).strip()
    txt = txt.replace("'", '"')
    txt = re.sub(r"\bNaN\b", "null", txt)
    try:
        parsed = json.loads(txt)
        return parsed if isinstance(parsed, list) else []
    except Exception:
        pass

    # Last-resort numeric extraction from arbitrary string.
    nums = re.findall(r"-?\d+(?:\.\d+)?", txt)
    return [float(n) for n in nums] if nums else []

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
    clean_rows = {}
    canvas_data = {}

    def _text_cells(row, tag):
        return [cell.get_text(" ", strip=True) for cell in row.find_all(tag)]

    def _clean_temp(value):
        txt = str(value).replace("°", "").replace(",", ".").strip()
        return float(txt) if re.match(r"^-?\d+(\.\d+)?$", txt) else None

    # 1) Weekday and date rows
    if len(rows) >= 2:
        clean_rows["weekday"] = _text_cells(rows[0], "th")
        clean_rows["date"] = _text_cells(rows[1], "td")

    # 2) Weather pictograms row
    picto_row = table.find("tr", class_="picto-row")
    if picto_row:
        imgs = picto_row.find_all("img")
        clean_rows["obs"] = [img.get("title", "").strip() for img in imgs]
        clean_rows["icon"] = [str(img) for img in imgs]

    # 3) Temperature rows (first max, second min)
    temp_rows = [r for r in rows if r.find("div", class_="temperature")]
    if len(temp_rows) >= 2:
        raw_max = [_clean_temp(v) for v in _text_cells(temp_rows[0], "td")]
        raw_min = [_clean_temp(v) for v in _text_cells(temp_rows[1], "td")]
        clean_rows["max"] = raw_max
        clean_rows["min"] = raw_min

    # 4) Predictability row (% per day) -> pred
    pred_anchor = table.find("td", class_="middletext-predictability")
    if pred_anchor and pred_anchor.find_parent("tr"):
        pred_row = pred_anchor.find_parent("tr").find_next_sibling("tr")
        if pred_row:
            pred_vals = []
            for td in pred_row.find_all("td"):
                txt = td.get_text(" ", strip=True)
                m = re.search(r"(\d+)\s*%", txt)
                pred_vals.append(m.group(1) if m else None)
            clean_rows["predictability"] = pred_vals

    def _parse_precip_text(txt: str):
        raw = str(txt).replace(",", ".").strip().lower()
        if not raw or raw == "-":
            return None
        if raw.startswith(">"):
            nums = re.findall(r"-?\d+(?:\.\d+)?", raw)
            return float(nums[0]) if nums else None
        nums = re.findall(r"-?\d+(?:\.\d+)?", raw)
        if not nums:
            return None
        if len(nums) == 1:
            return float(nums[0])
        return (float(nums[0]) + float(nums[1])) / 2.0

    # 5) Precipitation and probability from labeled rows / canvas / tabs fallbacks
    for row in rows:
        label = row.find(["th", "td"])
        label_txt = label.get_text(" ", strip=True).lower() if label else ""

        if "precipitation amount" in label_txt and not canvas_data.get("precipitation"):
            vals = []
            cells = row.find_all("td")[1:] if len(row.find_all("td")) > 1 else row.find_all("td")
            for c in cells:
                txt = c.get_text(" ", strip=True).replace(",", ".")
                nums = re.findall(r"-?\d+(?:\.\d+)?", txt)
                if not nums:
                    vals.append(None)
                elif len(nums) == 1:
                    vals.append(float(nums[0]))
                else:
                    vals.append((float(nums[0]) + float(nums[1])) / 2.0)
            canvas_data["precipitation"] = vals

        if ("precipitation probability" in label_txt or "probability" in label_txt) and not clean_rows.get("probability"):
            vals = []
            cells = row.find_all("td")[1:] if len(row.find_all("td")) > 1 else row.find_all("td")
            for c in cells:
                txt = c.get_text(" ", strip=True)
                m = re.search(r"(\d+)\s*%", txt)
                vals.append(m.group(1) if m else None)
            clean_rows["probability"] = vals

        canvas = row.find("canvas")
        if canvas:
            canvas_id = canvas.get("id", "")
            if "precip" in canvas_id and not canvas_data.get("precipitation"):
                canvas_data["precipitation"] = parse_canvas_data(canvas.get("data-precipitation"))
            if "temper" in canvas_id:
                if not clean_rows.get("max"):
                    clean_rows["max"] = parse_canvas_data(canvas.get("data-temperatures-max"))
                if not clean_rows.get("min"):
                    clean_rows["min"] = parse_canvas_data(canvas.get("data-temperatures-min"))

    # 6) Canonical source for precipitation/probability: forecast-table-canvas
    canvas_table = soup.find("table", class_="forecast-table-canvas")
    if canvas_table:
        precip_canvas = canvas_table.find("canvas", id=re.compile(r"canvas_14_days_forecast_precipitations"))
        if precip_canvas:
            precip_vals = parse_canvas_data(precip_canvas.get("data-precipitation"))
            if precip_vals:
                canvas_data["precipitation"] = precip_vals

            # Next row after precip canvas holds probabilities (%) in td cells.
            prob_row = precip_canvas.find_parent("tr")
            if prob_row:
                prob_row = prob_row.find_next_sibling("tr")
            if prob_row:
                prob_vals = []
                for td in prob_row.find_all("td"):
                    txt = td.get_text(" ", strip=True)
                    m = re.search(r"(\d+)\s*%", txt)
                    prob_vals.append(m.group(1) if m else None)
                if any(v is not None for v in prob_vals):
                    clean_rows["probability"] = prob_vals

        # Temperature canvas is also a reliable fallback for min/max.
        temp_canvas = canvas_table.find("canvas", id=re.compile(r"canvas_14_days_forecast_tempereture"))
        if temp_canvas:
            if not clean_rows.get("max"):
                clean_rows["max"] = parse_canvas_data(temp_canvas.get("data-temperatures-max"))
            if not clean_rows.get("min"):
                clean_rows["min"] = parse_canvas_data(temp_canvas.get("data-temperatures-min"))

    # Fallback: extract precipitation from tab cards (the source currently used in Meteoblue UI).
    if not canvas_data.get("precipitation"):
        tab_prec = []
        for node in soup.select(".tab-wrapper .tab .tab-precip"):
            tab_prec.append(_parse_precip_text(node.get_text(" ", strip=True)))
        if tab_prec:
            canvas_data["precipitation"] = tab_prec

    # If precipitation probability is not available, reuse predictability % as fallback.
    # This keeps the column populated and avoids empty UI cells.
    if not clean_rows.get("probability") and clean_rows.get("predictability"):
        clean_rows["probability"] = clean_rows.get("predictability", [])

    def _convert(values):
        return [fahrenheit_to_celsius(v) if v is not None else None for v in values] if is_fahrenheit else values

    forecast = {
        "date": clean_rows.get("date", []),
        "weekday": clean_rows.get("weekday", []),
        "min": _convert(clean_rows.get("min", [])),
        "max": _convert(clean_rows.get("max", [])),
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


def _parse_numeric_text(value: str):
    txt = str(value).replace(",", ".").strip().lower()
    if not txt or txt == "-":
        return None
    if txt.startswith("<"):
        nums = re.findall(r"-?\d+(?:\.\d+)?", txt)
        return float(nums[0]) if nums else None
    nums = re.findall(r"-?\d+(?:\.\d+)?", txt)
    if not nums:
        return None
    return float(nums[0])


def _extract_row_cells(table, selector: str):
    row = table.select_one(selector)
    if not row:
        return []
    return row.find_all("td")


def _extract_date_from_hourly_page(soup):
    time_el = soup.select_one(".no-desktop table.picto.hourly-view tr.times time[datetime]")
    if time_el:
        dt = time_el.get("datetime", "")
        m = re.match(r"^(\d{4}-\d{2}-\d{2})", dt)
        if m:
            return m.group(1)
    title_el = soup.select_one(".no-desktop table.picto.hourly-view tr.times")
    if title_el and title_el.get("title"):
        m = re.search(r"(\d{4}-\d{2}-\d{2})", title_el.get("title"))
        if m:
            return m.group(1)
    return None


def parse_soup_hourly_forecast(days: int = 7):
    records = []
    failures = []
    for day in range(1, days + 1):
        try:
            soup = fetch_and_soup_hourly(day)
        except Exception as e:
            failures.append((day, str(e)))
            continue

        table = soup.select_one("#hourly_forecast table.hourlywind, table.hourlywind")
        mobile_table = soup.select_one(".no-desktop table.hourly-view, .no-desktop table.picto, table.hourly-view")
        if table is None and mobile_table is None:
            failures.append((day, "hourly tables not found after fetch"))
            continue

        date_value = _extract_date_from_hourly_page(soup)
        weekday_el = soup.select_one(".table-heading time")
        weekday_value = weekday_el.get_text(strip=True) if weekday_el else None

        times = []
        temp_vals = []
        precip_vals = []
        precip_prob_vals = []
        humidity_vals = []
        wind_dir_vals = []
        wind_speed_vals = []
        wind_gust_vals = []
        icon_vals = []
        obs_vals = []

        if table is not None:
            for td in _extract_row_cells(table, "tr.times"):
                txt = td.get_text(" ", strip=True)
                m = re.search(r"(\d{1,2})\s*0*([0-9]{2})", txt)
                if m:
                    hh = int(m.group(1))
                    mm = int(m.group(2))
                    times.append(f"{hh:02d}:{mm:02d}")
                else:
                    times.append(None)

            for td in _extract_row_cells(table, "tr.temps"):
                temp_vals.append(_parse_numeric_text(td.get_text(" ", strip=True)))

            for td in _extract_row_cells(table, "tr.precip"):
                span = td.find("span")
                precip_vals.append(_parse_numeric_text(span.get_text(" ", strip=True) if span else td.get_text(" ", strip=True)))

            for td in _extract_row_cells(table, "tr.precip-prop"):
                precip_prob_vals.append(_parse_numeric_text(td.get_text(" ", strip=True)))

            for td in _extract_row_cells(table, "tr.humidity"):
                humidity_vals.append(_parse_numeric_text(td.get_text(" ", strip=True)))

            for td in _extract_row_cells(table, "tr.wind-direction"):
                wind_dir_vals.append((td.get("title") or td.get_text(" ", strip=True) or None))

            for td in _extract_row_cells(table, "tr.windspeed"):
                wind_speed_vals.append(_parse_numeric_text(td.get_text(" ", strip=True)))

            for td in _extract_row_cells(table, "tr.windgust"):
                wind_gust_vals.append(_parse_numeric_text(td.get_text(" ", strip=True)))

            for td in _extract_row_cells(table, "tr.pictos-1h"):
                img = td.find("img")
                if img:
                    icon_vals.append(str(img))
                    obs_vals.append(img.get("title", "").strip() or None)
                else:
                    icon_vals.append(None)
                    obs_vals.append(None)
        else:
            # Fallback: mobile hourly table
            for td in _extract_row_cells(mobile_table, "tr.times"):
                t = td.find("time")
                dt = t.get("datetime", "") if t else ""
                m = re.search(r"T(\d{2}):(\d{2})", dt)
                if m:
                    times.append(f"{int(m.group(1)):02d}:{int(m.group(2)):02d}")
                else:
                    times.append(None)

            for td in _extract_row_cells(mobile_table, "tr.temperatures"):
                temp_vals.append(_parse_numeric_text(td.get_text(" ", strip=True)))

            for td in _extract_row_cells(mobile_table, "tr.precips"):
                p = td.select_one(".precip span")
                prob = td.select_one(".precip-prob")
                precip_vals.append(_parse_numeric_text(p.get_text(" ", strip=True) if p else td.get_text(" ", strip=True)))
                precip_prob_vals.append(_parse_numeric_text(prob.get_text(" ", strip=True) if prob else None))

            for td in _extract_row_cells(mobile_table, "tr.windspeeds"):
                dir_el = td.select_one(".glyph.winddir")
                wind_dir_vals.append(dir_el.get_text(" ", strip=True) if dir_el else None)
                txt = td.get_text(" ", strip=True)
                m = re.search(r"(\d+)\s*-\s*(\d+)", txt)
                wind_speed_vals.append(float(m.group(1)) if m else None)
                wind_gust_vals.append(float(m.group(2)) if m else None)

            for td in _extract_row_cells(mobile_table, "tr.icons"):
                img = td.find("img")
                if img:
                    icon_vals.append(str(img))
                    obs_vals.append(img.get("title", "").strip() or None)
                else:
                    icon_vals.append(None)
                    obs_vals.append(None)

            # Additional fallback for times if the row class changes.
            if not any(times):
                for t in mobile_table.select("time[datetime]"):
                    dt = t.get("datetime", "")
                    m = re.search(r"T(\d{2}):(\d{2})", dt)
                    times.append(f"{int(m.group(1)):02d}:{int(m.group(2)):02d}" if m else None)

        max_len = max(
            len(times),
            len(temp_vals),
            len(precip_vals),
            len(precip_prob_vals),
            len(humidity_vals),
            len(wind_dir_vals),
            len(wind_speed_vals),
            len(wind_gust_vals),
            len(icon_vals),
            len(obs_vals),
        )

        def pick(arr, idx):
            return arr[idx] if idx < len(arr) else None

        for i in range(max_len):
            hour = pick(times, i)
            if hour is None:
                continue
            records.append(
                {
                    "day": day,
                    "date": date_value,
                    "weekday": weekday_value,
                    "time": hour,
                    "temp": pick(temp_vals, i),
                    "prec mm": pick(precip_vals, i),
                    "prob %": pick(precip_prob_vals, i),
                    "humidity %": pick(humidity_vals, i),
                    "wind dir": pick(wind_dir_vals, i),
                    "wind km/h": pick(wind_speed_vals, i),
                    "gust km/h": pick(wind_gust_vals, i),
                    "obs": pick(obs_vals, i),
                    "icon": pick(icon_vals, i),
                }
            )

    if failures:
        print(f"⚠️ Hourly forecast fetch issues ({len(failures)} days): {failures}")
    if not records:
        raise RuntimeError("No hourly records parsed from Meteoblue pages")
    return records

def is_forecast_in_fahrenheit(soup):
    current_temp_div = soup.find("div", class_="h1 current-temp")
    if current_temp_div:
        text = current_temp_div.get_text(strip=True)
        return "°F" in text
    return False


def show_forecast():
    if PrettyTable is None:
        print("prettytable not installed")
        return
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
