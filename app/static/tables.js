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
      <td>(4-19) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/14_iday_simple.svg" title="Mostly cloudy with rain"/></td>
      <td>7.78</td>
      <td>11.11</td>
      <td>0.34</td>
      <td>100%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(4-20) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/14_iday_simple.svg" title="Mostly cloudy with rain"/></td>
      <td>8.89</td>
      <td>12.78</td>
      <td>0.40</td>
      <td>45%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(4-21) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/14_iday_simple.svg" title="Mostly cloudy with rain"/></td>
      <td>8.89</td>
      <td>14.44</td>
      <td>0.29</td>
      <td>95%</td>
      <td>55%</td>
    </tr>
    <tr>
      <td>(4-22) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/03_iday_simple.svg" title="Partly cloudy"/></td>
      <td>7.78</td>
      <td>16.11</td>
      <td>0.00</td>
      <td>10%</td>
      <td>75%</td>
    </tr>
    <tr>
      <td>(4-23) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>7.78</td>
      <td>20.00</td>
      <td>0.00</td>
      <td>10%</td>
      <td>65%</td>
    </tr>
    <tr>
      <td>(4-24) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/03_iday_simple.svg" title="Partly cloudy"/></td>
      <td>10.56</td>
      <td>22.22</td>
      <td>0.00</td>
      <td>5%</td>
      <td>65%</td>
    </tr>
    <tr>
      <td>(4-25) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/03_iday_simple.svg" title="Partly cloudy"/></td>
      <td>11.11</td>
      <td>20.56</td>
      <td>0.00</td>
      <td>15%</td>
      <td>45%</td>
    </tr>
    <tr>
      <td>(4-26) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>11.11</td>
      <td>21.11</td>
      <td>0.00</td>
      <td>10%</td>
      <td>45%</td>
    </tr>
    <tr>
      <td>(4-27) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>11.67</td>
      <td>20.56</td>
      <td>0.00</td>
      <td>5%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(4-28) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>11.11</td>
      <td>19.44</td>
      <td>0.00</td>
      <td>15%</td>
      <td>35%</td>
    </tr>
    <tr>
      <td>(4-29) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>11.11</td>
      <td>20.00</td>
      <td>0.00</td>
      <td>25%</td>
      <td>25%</td>
    </tr>
    <tr>
      <td>(4-30) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>12.22</td>
      <td>20.00</td>
      <td>0.00</td>
      <td>30%</td>
      <td>15%</td>
    </tr>
    <tr>
      <td>(5-1) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.78</td>
      <td>20.00</td>
      <td>0.00</td>
      <td>40%</td>
      <td>10%</td>
    </tr>
    <tr>
      <td>(5-2) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.78</td>
      <td>20.56</td>
      <td>0.00</td>
      <td>35%</td>
      <td>15%</td>
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
      <td>19 (Sat)</td>
      <td>7.78</td>
      <td>11.11</td>
      <td>0.3386</td>
      <td>100%</td>
      <td>Mostly cloudy with rain</td>
    </tr>
    <tr>
      <td>20 (Sun)</td>
      <td>8.89</td>
      <td>12.78</td>
      <td>0.3976</td>
      <td>45%</td>
      <td>Mostly cloudy with rain</td>
    </tr>
    <tr>
      <td>21 (Mon)</td>
      <td>8.89</td>
      <td>14.44</td>
      <td>0.2874</td>
      <td>95%</td>
      <td>Mostly cloudy with rain</td>
    </tr>
    <tr>
      <td>22 (Tue)</td>
      <td>7.78</td>
      <td>16.11</td>
      <td>0.0000</td>
      <td>10%</td>
      <td>Partly cloudy</td>
    </tr>
    <tr>
      <td>23 (Wed)</td>
      <td>7.78</td>
      <td>20.00</td>
      <td>0.0000</td>
      <td>10%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>24 (Thu)</td>
      <td>10.56</td>
      <td>22.22</td>
      <td>0.0000</td>
      <td>5%</td>
      <td>Partly cloudy</td>
    </tr>
    <tr>
      <td>25 (Fri)</td>
      <td>11.11</td>
      <td>20.56</td>
      <td>0.0000</td>
      <td>15%</td>
      <td>Partly cloudy</td>
    </tr>
  </tbody>
</table></div>
<iframe src="https://www.meteoblue.com/en/weather/maps/widget/troviscais-fundeiros_portugal_2262489?windAnimation=1&gust=1&satellite=1&cloudsAndPrecipitation=1&temperature=1&sunshine=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=10&autowidth=auto"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 80%; height: 550px"></iframe><div>
`;

window.evapotranspirationData = [{"max": 2.10186, "mean": 2.047889, "min": 1.94954, "period": "17 Apr", "range": 0.152322, "std": 0.036389}, {"max": 1.637429, "mean": 1.57911, "min": 1.479879, "period": "16 Apr", "range": 0.157552, "std": 0.038442}, {"max": 2.17628, "mean": 2.11802, "min": 2.018419, "period": "15 Apr", "range": 0.157856, "std": 0.038335}, {"max": 1.79828, "mean": 1.755869, "min": 1.69579, "period": "14 Apr", "range": 0.102498, "std": 0.02763}, {"max": 2.460099, "mean": 2.30779, "min": 2.079449, "period": "13 Apr", "range": 0.380647, "std": 0.095385}, {"max": 2.216769, "mean": 2.138849, "min": 2.0643, "period": "12 Apr", "range": 0.152471, "std": 0.044688}, {"max": 2.114079, "mean": 2.018539, "min": 1.931229, "period": "11 Apr", "range": 0.182842, "std": 0.050369}];



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
      <td>17 Apr</td>
      <td>2.101860</td>
      <td>2.047889</td>
      <td>1.949540</td>
      <td>0.152322</td>
      <td>0.036389</td>
    </tr>
    <tr>
      <td>16 Apr</td>
      <td>1.637429</td>
      <td>1.579110</td>
      <td>1.479879</td>
      <td>0.157552</td>
      <td>0.038442</td>
    </tr>
    <tr>
      <td>15 Apr</td>
      <td>2.176280</td>
      <td>2.118020</td>
      <td>2.018419</td>
      <td>0.157856</td>
      <td>0.038335</td>
    </tr>
    <tr>
      <td>14 Apr</td>
      <td>1.798280</td>
      <td>1.755869</td>
      <td>1.695790</td>
      <td>0.102498</td>
      <td>0.027630</td>
    </tr>
    <tr>
      <td>13 Apr</td>
      <td>2.460099</td>
      <td>2.307790</td>
      <td>2.079449</td>
      <td>0.380647</td>
      <td>0.095385</td>
    </tr>
    <tr>
      <td>12 Apr</td>
      <td>2.216769</td>
      <td>2.138849</td>
      <td>2.064300</td>
      <td>0.152471</td>
      <td>0.044688</td>
    </tr>
    <tr>
      <td>11 Apr</td>
      <td>2.114079</td>
      <td>2.018539</td>
      <td>1.931229</td>
      <td>0.182842</td>
      <td>0.050369</td>
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
      <td>18 Apr</td>
      <td>18.787863</td>
      <td>16.487217</td>
      <td>14.519002</td>
      <td>4.268861</td>
      <td>1.119444</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>17 Apr</td>
      <td>2.250273</td>
      <td>1.740387</td>
      <td>1.038630</td>
      <td>1.211644</td>
      <td>0.265695</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>16 Apr</td>
      <td>4.935672</td>
      <td>4.679776</td>
      <td>4.194377</td>
      <td>0.741294</td>
      <td>0.134774</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>15 Apr</td>
      <td>19.744740</td>
      <td>16.148104</td>
      <td>13.377464</td>
      <td>6.367275</td>
      <td>1.677370</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>14 Apr</td>
      <td>12.564165</td>
      <td>12.178727</td>
      <td>11.291154</td>
      <td>1.273011</td>
      <td>0.188424</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>13 Apr</td>
      <td>0.172885</td>
      <td>0.152429</td>
      <td>0.137815</td>
      <td>0.035070</td>
      <td>0.008775</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>12 Apr</td>
      <td>14.562306</td>
      <td>7.926843</td>
      <td>3.931671</td>
      <td>10.630636</td>
      <td>2.512123</td>
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
      <td>455</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>1167</td>
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
    
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-smog"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Nevoeiro-19-22-04', event)">19-22/04</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-high"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Quente-19-22-04', event)">19-22/04</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-low"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Frio-19-22-04', event)">19-22/04</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-cloud-rain"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Precipitação-19-22-04', event)">19-22/04</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-19-22-04', event)">19-22/04</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-bolt"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Trovoada-19-22-04', event)">19-22/04</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-wind"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Vento-19-22-04', event)">19-22/04</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="orange hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #f58d38;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-19-20-04', event)">19-20/04</a></td>
            <td><span data-tooltip="Castelo Branco (59km ESE)">CB</span></td>
        </tr>
        
        <tr class="yellow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-wind"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #FFD43B;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Vento-19-20-04', event)">19-20/04</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span></td>
        </tr>
        
        <tr class="yellow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-cloud-rain"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #FFD43B;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Precipitação-19-20-04', event)">19-20/04</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span></td>
        </tr>
        </tbody></table>
    <dialog id="modal-Nevoeiro-19-22-04" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Nevoeiro-19-22-04', event)"></a>
                <h3>Nevoeiro</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 19/04 09:00
        <br><strong>end:</strong> 22/04 08:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Nevoeiro-19-22-04', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Quente-19-22-04" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Quente-19-22-04', event)"></a>
                <h3>Tempo Quente</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 19/04 09:00
        <br><strong>end:</strong> 22/04 08:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Quente-19-22-04', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Frio-19-22-04" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Frio-19-22-04', event)"></a>
                <h3>Tempo Frio</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 19/04 09:00
        <br><strong>end:</strong> 22/04 08:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Frio-19-22-04', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Precipitação-19-22-04" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Precipitação-19-22-04', event)"></a>
                <h3>Precipitação</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 19/04 09:00
        <br><strong>end:</strong> 22/04 08:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Precipitação-19-22-04', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-19-22-04" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-19-22-04', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 19/04 09:00
        <br><strong>end:</strong> 22/04 08:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Neve-19-22-04', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Trovoada-19-22-04" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Trovoada-19-22-04', event)"></a>
                <h3>Trovoada</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 19/04 09:00
        <br><strong>end:</strong> 22/04 08:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Trovoada-19-22-04', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Vento-19-22-04" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Vento-19-22-04', event)"></a>
                <h3>Vento</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 19/04 09:00
        <br><strong>end:</strong> 22/04 08:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Vento-19-22-04', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-19-20-04" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-19-20-04', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> orange
        <br><strong>start:</strong> 19/04 09:00
        <br><strong>end:</strong> 20/04 06:00
        <hr>
    <p><strong>Castelo Branco (59km ESE)</strong><br>Queda de neve acima de 1000/1200 metros, com acumulação até 30 cm acima de 1600 metros e até 10 cm abaixo dos 1600 metros.Impactos Prováveis: Perturbação moderada causada por queda de neve com acumulação e possível formação de  gelo (p. ex., vias condicionadas ou interditas, danos em estruturas ou árvores, abastecimentos locais prejudicados).</p>
            <footer>
                <button onclick="closeModal('modal-Neve-19-20-04', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Vento-19-20-04" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Vento-19-20-04', event)"></a>
                <h3>Vento</h3>
            </header>
            
        <strong>alert level:</strong> yellow
        <br><strong>start:</strong> 19/04 15:00
        <br><strong>end:</strong> 20/04 00:00
        <hr>
    <p><strong>Coimbra (36km NW)</strong><br>Vento de noroeste com rajadas até 85 km/h.</p>
            <footer>
                <button onclick="closeModal('modal-Vento-19-20-04', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Precipitação-19-20-04" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Precipitação-19-20-04', event)"></a>
                <h3>Precipitação</h3>
            </header>
            
        <strong>alert level:</strong> yellow
        <br><strong>start:</strong> 19/04 18:00
        <br><strong>end:</strong> 20/04 00:00
        <hr>
    <p><strong>Castelo Branco (59km ESE)</strong><br>Períodos de chuva ou aguaceiros, por vezes fortes.</p><p><strong>Coimbra (36km NW)</strong><br>Períodos de chuva ou aguaceiros, por vezes fortes.</p>
            <footer>
                <button onclick="closeModal('modal-Precipitação-19-20-04', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
  </div>
</div>
</div>`;