// ✅ Declare global variables first
window.forecastTable = `<div class="table-wrapper desktop-view">
  <table class="dataframe custom-table desktop-view">
  <thead>
    <tr style="text-align: right;">
      <th>day</th>
      <th>icon</th>
      <th>min</th>
      <th>max</th>
      <th>prec mm</th>
      <th>prob %</th>
      <th>pred</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>(8-13) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>21.11</td>
      <td>37.22</td>
      <td>0.00</td>
      <td>0%</td>
      <td>85%</td>
    </tr>
    <tr>
      <td>(8-14) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>19.44</td>
      <td>37.22</td>
      <td>0.00</td>
      <td>0%</td>
      <td>90%</td>
    </tr>
    <tr>
      <td>(8-15) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>18.89</td>
      <td>35.56</td>
      <td>0.00</td>
      <td>0%</td>
      <td>80%</td>
    </tr>
    <tr>
      <td>(8-16) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>17.22</td>
      <td>34.44</td>
      <td>0.00</td>
      <td>0%</td>
      <td>75%</td>
    </tr>
    <tr>
      <td>(8-17) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>16.11</td>
      <td>31.11</td>
      <td>0.00</td>
      <td>0%</td>
      <td>65%</td>
    </tr>
    <tr>
      <td>(8-18) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>13.89</td>
      <td>27.78</td>
      <td>0.00</td>
      <td>0%</td>
      <td>70%</td>
    </tr>
    <tr>
      <td>(8-19) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>13.89</td>
      <td>27.78</td>
      <td>0.00</td>
      <td>0%</td>
      <td>70%</td>
    </tr>
    <tr>
      <td>(8-20) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>14.44</td>
      <td>30.00</td>
      <td>0.00</td>
      <td>0%</td>
      <td>65%</td>
    </tr>
    <tr>
      <td>(8-21) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>15.00</td>
      <td>28.33</td>
      <td>0.00</td>
      <td>5%</td>
      <td>60%</td>
    </tr>
    <tr>
      <td>(8-22) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.89</td>
      <td>27.22</td>
      <td>0.00</td>
      <td>10%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(8-23) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.89</td>
      <td>26.67</td>
      <td>0.00</td>
      <td>15%</td>
      <td>40%</td>
    </tr>
    <tr>
      <td>(8-24) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.89</td>
      <td>28.33</td>
      <td>0.00</td>
      <td>10%</td>
      <td>45%</td>
    </tr>
    <tr>
      <td>(8-25) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>15.00</td>
      <td>29.44</td>
      <td>0.00</td>
      <td>10%</td>
      <td>45%</td>
    </tr>
    <tr>
      <td>(8-26) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>15.00</td>
      <td>28.89</td>
      <td>0.00</td>
      <td>10%</td>
      <td>45%</td>
    </tr>
  </tbody>
</table></div>
  <iframe src="https://www.meteoblue.com/en/weather/maps/widget/troviscais-fundeiros_portugal_2262489?windAnimation=1&gust=1&satellite=1&cloudsAndPrecipitation=1&temperature=1&sunshine=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=10&autowidth=auto"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 550px; height: 350px"></iframe><div></div>`;

window.forecastTableMobile = `<div class="table-wrapper mobile-view">  <table class="dataframe custom-table mobile-view">
  <thead>
    <tr style="text-align: right;">
      <th>day</th>
      <th>min</th>
      <th>max</th>
      <th>prec mm</th>
      <th>prob %</th>
      <th>obs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>13 (Wed)</td>
      <td>21.11</td>
      <td>37.22</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>14 (Thu)</td>
      <td>19.44</td>
      <td>37.22</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>15 (Fri)</td>
      <td>18.89</td>
      <td>35.56</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>16 (Sat)</td>
      <td>17.22</td>
      <td>34.44</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>17 (Sun)</td>
      <td>16.11</td>
      <td>31.11</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>18 (Mon)</td>
      <td>13.89</td>
      <td>27.78</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>19 (Tue)</td>
      <td>13.89</td>
      <td>27.78</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
  </tbody>
</table></div>
<iframe src="https://www.meteoblue.com/en/weather/maps/widget/troviscais-fundeiros_portugal_2262489?windAnimation=1&gust=1&satellite=1&cloudsAndPrecipitation=1&temperature=1&sunshine=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=10&autowidth=auto"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 80%; height: 550px"></iframe><div>
`;

window.evapotranspirationData = [{"max": 6.50187, "mean": 6.416389, "min": 6.258709, "period": "11 Aug", "range": 0.243163, "std": 0.049416}, {"max": 6.738359, "mean": 6.66655, "min": 6.516789, "period": "10 Aug", "range": 0.221564, "std": 0.045792}, {"max": 6.26202, "mean": 6.18166, "min": 6.024099, "period": "09 Aug", "range": 0.237917, "std": 0.050981}, {"max": 5.731659, "mean": 5.664989, "min": 5.556879, "period": "08 Aug", "range": 0.174785, "std": 0.033775}, {"max": 5.72684, "mean": 5.63139, "min": 5.4242, "period": "07 Aug", "range": 0.302632, "std": 0.064033}, {"max": 6.102079, "mean": 6.009089, "min": 5.91967, "period": "06 Aug", "range": 0.182414, "std": 0.039938}, {"max": 6.42429, "mean": 6.36953, "min": 6.248839, "period": "05 Aug", "range": 0.175448, "std": 0.036157}];



window.observationsTable = `
<details class="dropdown custom-dropdown" id="observations-dropdown">
  <summary id="dropdown-label">Select</summary>
  <ul>
    <li><a href="#" data-table="observations">Observations</a></li>
    <li><a href="#" data-table="evapotranspiration">Evapotranspiration</a></li>
    <li><a href="#" data-table="precipitation">Precipitation</a></li>
  </ul>
</details>



</details>

<div id="data-table-observations" class="data-table">
  <div class="table-wrapper"><table class="dataframe custom-table">
<thead>
<tr style="text-align: right;">
<th>date</th>
<th>time</th>
<th>temp</th>
<th>wind dir</th>
<th>wind km</th>
<th>prec</th>
<th>rad</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="24">19 Mar</td>
<td>23h</td>
<td>15.0</td>
<td>SE</td>
<td>18.4</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>22h</td>
<td>14.7</td>
<td>SE</td>
<td>22.0</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>21h</td>
<td>15.0</td>
<td>SE</td>
<td>17.3</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>20h</td>
<td>15.0</td>
<td>SE</td>
<td>19.1</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>19h</td>
<td>15.1</td>
<td>SE</td>
<td>16.9</td>
<td>0.0</td>
<td>26.1</td>
</tr>
<tr>

<td>18h</td>
<td>15.3</td>
<td>SE</td>
<td>19.4</td>
<td>0.0</td>
<td>152.3</td>
</tr>
<tr>

<td>17h</td>
<td>15.3</td>
<td>SE</td>
<td>17.6</td>
<td>0.0</td>
<td>188.8</td>
</tr>
<tr>

<td>16h</td>
<td>15.9</td>
<td>SE</td>
<td>16.6</td>
<td>0.0</td>
<td>603.8</td>
</tr>
<tr>

<td>15h</td>
<td>16.1</td>
<td>SE</td>
<td>18.4</td>
<td>0.0</td>
<td>861.0</td>
</tr>
<tr>

<td>14h</td>
<td>16.2</td>
<td>SE</td>
<td>15.1</td>
<td>0.0</td>
<td>1320.4</td>
</tr>
<tr>

<td>13h</td>
<td>16.0</td>
<td>SE</td>
<td>18.0</td>
<td>0.0</td>
<td>1763.3</td>
</tr>
<tr>

<td>12h</td>
<td>14.4</td>
<td>SE</td>
<td>20.2</td>
<td>0.0</td>
<td>1325.8</td>
</tr>
<tr>

<td>11h</td>
<td>13.2</td>
<td>SE</td>
<td>16.2</td>
<td>0.0</td>
<td>808.1</td>
</tr>
<tr>

<td>10h</td>
<td>12.5</td>
<td>SE</td>
<td>18.0</td>
<td>0.0</td>
<td>693.5</td>
</tr>
<tr>

<td>09h</td>
<td>11.7</td>
<td>SE</td>
<td>17.6</td>
<td>0.0</td>
<td>363.8</td>
</tr>
<tr>

<td>08h</td>
<td>11.2</td>
<td>SE</td>
<td>19.1</td>
<td>0.0</td>
<td>122.8</td>
</tr>
<tr>

<td>07h</td>
<td>11.0</td>
<td>SE</td>
<td>13.7</td>
<td>0.0</td>
<td>7.2</td>
</tr>
<tr>

<td>06h</td>
<td>10.7</td>
<td>SE</td>
<td>14.0</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>05h</td>
<td>10.7</td>
<td>SE</td>
<td>17.3</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>04h</td>
<td>10.4</td>
<td>SE</td>
<td>14.4</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>03h</td>
<td>10.3</td>
<td>SE</td>
<td>11.2</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>02h</td>
<td>10.3</td>
<td>SE</td>
<td>10.8</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>01h</td>
<td>10.2</td>
<td>SE</td>
<td>8.3</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>00h</td>
<td>10.3</td>
<td>SE</td>
<td>9.0</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>
<td rowspan="24">18 Mar</td>
<td>23h</td>
<td>10.6</td>
<td>S</td>
<td>9.7</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>22h</td>
<td>10.9</td>
<td>S</td>
<td>11.2</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>21h</td>
<td>11.2</td>
<td>S</td>
<td>13.7</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>20h</td>
<td>11.8</td>
<td>S</td>
<td>10.1</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>19h</td>
<td>12.2</td>
<td>S</td>
<td>9.7</td>
<td>0.0</td>
<td>89.9</td>
</tr>
<tr>

<td>18h</td>
<td>13.2</td>
<td>S</td>
<td>9.0</td>
<td>0.0</td>
<td>231.1</td>
</tr>
<tr>

<td>17h</td>
<td>14.1</td>
<td>S</td>
<td>6.8</td>
<td>0.0</td>
<td>740.9</td>
</tr>
<tr>

<td>16h</td>
<td>12.6</td>
<td>S</td>
<td>9.0</td>
<td>0.1</td>
<td>750.1</td>
</tr>
<tr>

<td>15h</td>
<td>12.9</td>
<td>S</td>
<td>8.6</td>
<td>0.8</td>
<td>593.4</td>
</tr>
<tr>

<td>14h</td>
<td>15.1</td>
<td>S</td>
<td>10.4</td>
<td>0.0</td>
<td>881.3</td>
</tr>
<tr>

<td>13h</td>
<td>16.0</td>
<td>S</td>
<td>8.6</td>
<td>0.0</td>
<td>1977.8</td>
</tr>
<tr>

<td>12h</td>
<td>14.8</td>
<td>SW</td>
<td>9.7</td>
<td>0.0</td>
<td>2205.3</td>
</tr>
<tr>

<td>11h</td>
<td>12.5</td>
<td>SW</td>
<td>7.9</td>
<td>0.0</td>
<td>1799.3</td>
</tr>
<tr>

<td>10h</td>
<td>11.0</td>
<td>S</td>
<td>3.6</td>
<td>0.0</td>
<td>657.8</td>
</tr>
<tr>

<td>09h</td>
<td>10.2</td>
<td>SE</td>
<td>2.5</td>
<td>0.0</td>
<td>329.6</td>
</tr>
<tr>

<td>08h</td>
<td>9.6</td>
<td>SE</td>
<td>8.3</td>
<td>0.1</td>
<td>93.5</td>
</tr>
<tr>

<td>07h</td>
<td>9.4</td>
<td>SE</td>
<td>4.0</td>
<td>1.3</td>
<td>4.6</td>
</tr>
<tr>

<td>06h</td>
<td>9.4</td>
<td>SE</td>
<td>4.3</td>
<td>0.3</td>
<td>0.0</td>
</tr>
<tr>

<td>05h</td>
<td>9.6</td>
<td>NE</td>
<td>0.7</td>
<td>0.3</td>
<td>0.0</td>
</tr>
<tr>

<td>04h</td>
<td>9.9</td>
<td>-</td>
<td>0.0</td>
<td>0.4</td>
<td>0.0</td>
</tr>
<tr>

<td>03h</td>
<td>10.4</td>
<td>SE</td>
<td>5.0</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>02h</td>
<td>10.3</td>
<td>SE</td>
<td>7.6</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>01h</td>
<td>10.1</td>
<td>E</td>
<td>6.5</td>
<td>0.0</td>
<td>0.0</td>
</tr>
<tr>

<td>00h</td>
<td>10.1</td>
<td>SE</td>
<td>6.5</td>
<td>0.0</td>
<td>0.0</td>
</tr>
</tbody>
</table></div>
</div>

<div id="data-table-evapotranspiration" class="data-table" style="display:none;">
  <div class="table-wrapper mobile-view">
    <table class="dataframe custom-table">
  <thead>
    <tr><th colspan='6'><h3 class='table-title'>Evaporatranspiration</h3></th></tr>

    <tr style="text-align: right;">
      <th>period</th>
      <th>max</th>
      <th>mean</th>
      <th>min</th>
      <th>range</th>
      <th>std</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>11 Aug</td>
      <td>6.501870</td>
      <td>6.416389</td>
      <td>6.258709</td>
      <td>0.243163</td>
      <td>0.049416</td>
    </tr>
    <tr>
      <td>10 Aug</td>
      <td>6.738359</td>
      <td>6.666550</td>
      <td>6.516789</td>
      <td>0.221564</td>
      <td>0.045792</td>
    </tr>
    <tr>
      <td>09 Aug</td>
      <td>6.262020</td>
      <td>6.181660</td>
      <td>6.024099</td>
      <td>0.237917</td>
      <td>0.050981</td>
    </tr>
    <tr>
      <td>08 Aug</td>
      <td>5.731659</td>
      <td>5.664989</td>
      <td>5.556879</td>
      <td>0.174785</td>
      <td>0.033775</td>
    </tr>
    <tr>
      <td>07 Aug</td>
      <td>5.726840</td>
      <td>5.631390</td>
      <td>5.424200</td>
      <td>0.302632</td>
      <td>0.064033</td>
    </tr>
    <tr>
      <td>06 Aug</td>
      <td>6.102079</td>
      <td>6.009089</td>
      <td>5.919670</td>
      <td>0.182414</td>
      <td>0.039938</td>
    </tr>
    <tr>
      <td>05 Aug</td>
      <td>6.424290</td>
      <td>6.369530</td>
      <td>6.248839</td>
      <td>0.175448</td>
      <td>0.036157</td>
    </tr>
  </tbody>
</table>
  </div>
  <div id="evapoChartContainer">
    <canvas id="evapoChart" width="800" height="400"></canvas>
  </div>
</div>

<div id="data-table-precipitation" class="data-table" style="display:none;">
  <div class="table-wrapper mobile-view">
    <table class="dataframe custom-table">
  <thead>
    <tr><th colspan='10'><h3 class='table-title'>Precipitation</h3></th></tr>

    <tr style="text-align: right;">
      <th>period</th>
      <th>maximum</th>
      <th>mean</th>
      <th>minimum</th>
      <th>range</th>
      <th>std</th>
      <th>max</th>
      <th>min</th>
      <th>std</th>
      <th>total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>12 Aug</td>
      <td>0.072419</td>
      <td>0.040342</td>
      <td>0.010607</td>
      <td>0.061812</td>
      <td>0.015586</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>11 Aug</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>10 Aug</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>09 Aug</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>08 Aug</td>
      <td>0.081827</td>
      <td>0.054167</td>
      <td>0.024354</td>
      <td>0.057473</td>
      <td>0.014145</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>07 Aug</td>
      <td>0.024900</td>
      <td>0.018964</td>
      <td>0.012447</td>
      <td>0.012453</td>
      <td>0.002946</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>06 Aug</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
  </div>
</div>
`;


window.dashboardTable = `<div class="table-container">
  <div class="table-wrapper">
    <table class="dataframe custom-table">
  <thead>
    <tr><th colspan='2'><h3 class='table-title'>Cold Hours</h3></th></tr>

    <tr style="text-align: right;">
      <th>period</th>
      <th>cold</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nov 24</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Dec 24</td>
      <td>180</td>
    </tr>
    <tr>
      <td>Jan 25</td>
      <td>159</td>
    </tr>
    <tr>
      <td>Feb 25</td>
      <td>47</td>
    </tr>
    <tr>
      <td>Mar 25</td>
      <td>65</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>454</td>
    </tr>
  </tbody>
</table>
  </div>
  <div class="table-wrapper">
    <table class="dataframe custom-table">
  <thead>
    <tr><th colspan='2'><h3 class='table-title'>Missing Entries</h3></th></tr>

    <tr style="text-align: right;">
      <th>period</th>
      <th>missing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Oct 24</td>
      <td>69</td>
    </tr>
    <tr>
      <td>Nov 24</td>
      <td>228</td>
    </tr>
    <tr>
      <td>Dec 24</td>
      <td>28</td>
    </tr>
    <tr>
      <td>Jan 25</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Feb 25</td>
      <td>15</td>
    </tr>
    <tr>
      <td>Mar 25</td>
      <td>372</td>
    </tr>
    <tr>
      <td>Apr 25</td>
      <td>720</td>
    </tr>
    <tr>
      <td>May 25</td>
      <td>744</td>
    </tr>
    <tr>
      <td>Jun 25</td>
      <td>720</td>
    </tr>
    <tr>
      <td>Jul 25</td>
      <td>744</td>
    </tr>
    <tr>
      <td>Aug 25</td>
      <td>311</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>3951</td>
    </tr>
  </tbody>
</table>
  </div>

  <div class="warning-timeline">
    
    <table class="custom-table">
        <thead>
            <tr class="{data['color']} hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <th colspan='4'><h3 class="table-title">Warnings</h3></th>
            </tr>
        </thead>
        <tbody>
    
        <tr class="yellow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-high"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #FFD43B;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Quente-13-15-08', event)">13-15/08</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-smog"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Nevoeiro-13-16-08', event)">13-16/08</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-high"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Quente-13-16-08', event)">13-16/08</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-low"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Frio-13-16-08', event)">13-16/08</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-cloud-rain"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Precipitação-13-16-08', event)">13-16/08</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-13-16-08', event)">13-16/08</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-bolt"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Trovoada-13-16-08', event)">13-16/08</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-wind"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Vento-13-16-08', event)">13-16/08</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        </tbody></table>
    <dialog id="modal-Tempo-Quente-13-15-08" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Quente-13-15-08', event)"></a>
                <h3>Tempo Quente</h3>
            </header>
            
        <strong>alert level:</strong> yellow
        <br><strong>start:</strong> 13/08 18:09
        <br><strong>end:</strong> 15/08 18:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br>Persistência de valores elevados da temperatura máxima no interior do distrito.</p><p><strong>Coimbra (36km NW)</strong><br>Persistência de valores elevados da temperatura máxima no interior do distrito.</p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Quente-13-15-08', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Nevoeiro-13-16-08" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Nevoeiro-13-16-08', event)"></a>
                <h3>Nevoeiro</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 13/08 18:09
        <br><strong>end:</strong> 16/08 18:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Nevoeiro-13-16-08', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Quente-13-16-08" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Quente-13-16-08', event)"></a>
                <h3>Tempo Quente</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 13/08 18:09
        <br><strong>end:</strong> 16/08 18:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br><br>Persistência de valores muito elevados da temperatura máxima.</p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Quente-13-16-08', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Frio-13-16-08" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Frio-13-16-08', event)"></a>
                <h3>Tempo Frio</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 13/08 18:09
        <br><strong>end:</strong> 16/08 18:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Frio-13-16-08', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Precipitação-13-16-08" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Precipitação-13-16-08', event)"></a>
                <h3>Precipitação</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 13/08 18:09
        <br><strong>end:</strong> 16/08 18:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Precipitação-13-16-08', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-13-16-08" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-13-16-08', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 13/08 18:09
        <br><strong>end:</strong> 16/08 18:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Neve-13-16-08', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Trovoada-13-16-08" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Trovoada-13-16-08', event)"></a>
                <h3>Trovoada</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 13/08 18:09
        <br><strong>end:</strong> 16/08 18:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Trovoada-13-16-08', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Vento-13-16-08" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Vento-13-16-08', event)"></a>
                <h3>Vento</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 13/08 18:09
        <br><strong>end:</strong> 16/08 18:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Vento-13-16-08', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
  </div>
</div>
</div>`;