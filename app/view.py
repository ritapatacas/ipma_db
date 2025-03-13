import os
from jinja2 import Environment, FileSystemLoader
import pandas as pd
from meteoblue import parse_soup_forecast
from analyze import analyze_data, summarize_cold_hours, summarize_missing_entries

df_forecast = pd.DataFrame(parse_soup_forecast())
df_observations = pd.DataFrame(analyze_data())
df_show_missing_entries = pd.DataFrame(summarize_missing_entries())
df_cold_hours = pd.DataFrame(summarize_cold_hours())


table_html_forecast = df_forecast.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')
table_html_observations = df_observations.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')
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
    output_path = os.path.abspath("index.html")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"✅ index.html saved at: {output_path}")

save_html(html)