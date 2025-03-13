import os
from jinja2 import Environment, FileSystemLoader
import pandas as pd
from bs4 import BeautifulSoup
from meteoblue import parse_soup_forecast
from analyze import observations, summarize_cold_hours, summarize_missing_entries

df_forecast = pd.DataFrame(parse_soup_forecast())
df_observations = pd.DataFrame(observations())
df_show_missing_entries = pd.DataFrame(summarize_missing_entries("month"))
df_cold_hours = pd.DataFrame(summarize_cold_hours("month"))

print('\n == forecast\n', df_forecast.head(10))
print('\n\n == observations\n', df_observations.head(10))
print('\n\n == missing entries\n', df_show_missing_entries.head(10))
print('\n\n == cold hours\n', df_cold_hours.head(10))

def apply_row_span_for_date_column(html_table):
    soup = BeautifulSoup(html_table, 'html.parser')
    rows = soup.find_all('tr')
    
    if not rows or len(rows) < 2:
        return str(soup)

    previous_date = None
    rowspan = 1
    to_remove = []
    
    for i in range(1, len(rows)):
        cols = rows[i].find_all('td')
        if not cols:
            continue

        current_date = cols[0].text.strip()
        
        if current_date == previous_date:
            rowspan += 1
            to_remove.append(i)
        else:
            if rowspan > 1:
                rows[i - rowspan].find_all('td')[0]['rowspan'] = str(rowspan)
            rowspan = 1
            previous_date = current_date

    if rowspan > 1:
        rows[len(rows) - rowspan].find_all('td')[0]['rowspan'] = str(rowspan)

    for i in reversed(to_remove):
        rows[i].find_all('td')[0].extract()

    return str(soup)


table_html_forecast = df_forecast.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')
table_html_observations_raw = df_observations.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')
table_html_observations = apply_row_span_for_date_column(table_html_observations_raw)
table_html_missing = df_show_missing_entries.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')
table_html_cold_hours = df_cold_hours.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATES_DIR = os.path.join(BASE_DIR, "templates")

env = Environment(loader=FileSystemLoader(TEMPLATES_DIR))
template = env.get_template("index.html")

html = template.render(
    title="The Owls Are Not What They Berrie",
    forecast_table=df_forecast.to_html(index=False, border=0, classes="custom-table"),
    table_html_forecast=table_html_forecast,
    table_html_observations=table_html_observations,
    table_html_missing=table_html_missing,
    table_html_cold_hours=table_html_cold_hours
)


def save_html(html):
    filenames = [
        os.path.abspath("index.html"),        # Current directory
        os.path.abspath(os.path.join("..", "index.html"))  # Parent directory
    ]
    
    for path in filenames:
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"✅ index.html saved at: {path}")

save_html(html)