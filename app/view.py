import pandas as pd
from meteoblue import parse_soup_forecast


df = pd.DataFrame(parse_soup_forecast())

table_html = df.to_html(index=False, classes='display', border=0)


html_page = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>14 Days Weather Forecast</title>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
    <style>
        body {{ font-family: Arial, sans-serif; margin: 20px; }}
        table {{ width: 100%; }}
    </style>
</head>
<body>
    <h1>14 Days Weather Forecast</h1>
    {table_html}
    <script>
        $(document).ready(function() {{
            $('table').DataTable();
        }});
    </script>
</body>
</html>
"""

with open("../index.html", "w", encoding="utf-8") as f:
    f.write(html_page)
