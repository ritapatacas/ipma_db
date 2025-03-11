import os
import pandas as pd
from meteoblue import parse_soup_forecast
from analyze import analyze_data, show_cold_hours, hours_below_7, show_missing_entries

df_forecast = pd.DataFrame(parse_soup_forecast())
df_observations = pd.DataFrame(analyze_data())
#df_cold_hours = pd.DataFrame(show_cold_hours(hours_below_7(), "month"))
#df_show_missing_entries = show_missing_entries(analyze_data(), "date")

table_html_forecast = df_forecast.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')
table_html_observations = df_observations.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')


#table_html_missing_entries = df_show_missing_entries.to_html(index=False, border=0, classes="custom-table")

#table_html_cold_hours = df_cold_hours.to_html(index=False, border=0, classes="custom-table")


html_page = f"""
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
    <link rel="stylesheet" href="static/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
    <title>14 Days Weather Forecast</title>
  </head>
  <body>
    <main class="container">
    <nav>
        <ul>
            <li><h1><strong>The Owls Are Not What They Berrie</strong></h1></li>
        </ul>
        <ul>
            <li><button id="btn-forecast" class="secondary">forecast</button></li>
            <li><button id="btn-observations" class="secondary">observations</button></li>
            <li><button class="secondary">dashboard</button></li>
            <li><button id="theme-toggle" class="contrast">🌗</button></li>
        </ul>
    </nav>
    <div id="showcase" class="showcase">
      {df_forecast.to_html(index=False, border=0, classes="custom-table")}
    </div>
    </main>

    <script>
      window.forecastTable = `{table_html_forecast}`;
      window.observationsTable = `{table_html_observations}`;
    </script>
    <script src="static/script.js"></script>

  </body>
</html>
"""


output_path = os.path.abspath("index.html")

with open(output_path, "w", encoding="utf-8") as f:
    f.write(html_page)

print(f"index.html created successfully at: {output_path}")

if os.path.isfile(output_path):
    print("index.html exists")
else:
    print("index.html not found")
