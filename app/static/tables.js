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
      <td>(2-17) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/16_iday.svg" title="Mostly cloudy with occasional rain"/></td>
      <td>48.00</td>
      <td>58.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-18) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/14_iday.svg" title="Mostly cloudy with rain"/></td>
      <td>47.00</td>
      <td>52.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-19) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/16_iday.svg" title="Mostly cloudy with occasional rain"/></td>
      <td>41.00</td>
      <td>52.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-20) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/05_iday.svg" title="Fog"/></td>
      <td>39.00</td>
      <td>60.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-21) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday.svg" title="Clear and few clouds"/></td>
      <td>43.00</td>
      <td>66.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-22) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday.svg" title="Clear and few clouds"/></td>
      <td>46.00</td>
      <td>68.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-23) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/05_iday.svg" title="Fog"/></td>
      <td>49.00</td>
      <td>65.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-24) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/07_iday.svg" title="Mixed with showers"/></td>
      <td>48.00</td>
      <td>64.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-25) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/14_iday.svg" title="Mostly cloudy with rain"/></td>
      <td>50.00</td>
      <td>58.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-26) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/07_iday.svg" title="Mixed with showers"/></td>
      <td>47.00</td>
      <td>57.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-27) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/14_iday.svg" title="Mostly cloudy with rain"/></td>
      <td>47.00</td>
      <td>58.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(2-28) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/14_iday.svg" title="Mostly cloudy with rain"/></td>
      <td>46.00</td>
      <td>55.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(3-1) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/07_iday.svg" title="Mixed with showers"/></td>
      <td>43.00</td>
      <td>54.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
    </tr>
    <tr>
      <td>(3-2) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday.svg" title="Clear and few clouds"/></td>
      <td>44.00</td>
      <td>55.00</td>
      <td>-</td>
      <td>None</td>
      <td>None</td>
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
      <td>17 (Tue)</td>
      <td>48.0</td>
      <td>58.0</td>
      <td>NaN</td>
      <td>None</td>
      <td>Mostly cloudy with occasional rain</td>
    </tr>
    <tr>
      <td>18 (Wed)</td>
      <td>47.0</td>
      <td>52.0</td>
      <td>NaN</td>
      <td>None</td>
      <td>Mostly cloudy with rain</td>
    </tr>
    <tr>
      <td>19 (Thu)</td>
      <td>41.0</td>
      <td>52.0</td>
      <td>NaN</td>
      <td>None</td>
      <td>Mostly cloudy with occasional rain</td>
    </tr>
    <tr>
      <td>20 (Fri)</td>
      <td>39.0</td>
      <td>60.0</td>
      <td>NaN</td>
      <td>None</td>
      <td>Fog</td>
    </tr>
    <tr>
      <td>21 (Sat)</td>
      <td>43.0</td>
      <td>66.0</td>
      <td>NaN</td>
      <td>None</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>22 (Sun)</td>
      <td>46.0</td>
      <td>68.0</td>
      <td>NaN</td>
      <td>None</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>23 (Mon)</td>
      <td>49.0</td>
      <td>65.0</td>
      <td>NaN</td>
      <td>None</td>
      <td>Fog</td>
    </tr>
  </tbody>
</table></div>
<iframe src="https://www.meteoblue.com/en/weather/maps/widget/troviscais-fundeiros_portugal_2262489?windAnimation=1&gust=1&satellite=1&cloudsAndPrecipitation=1&temperature=1&sunshine=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=10&autowidth=auto"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 80%; height: 550px"></iframe><div>
`;

window.evapotranspirationData = [{"max": 3.284569, "mean": 3.15438, "min": 3.02967, "period": "20 Sep", "range": 0.254898, "std": 0.060056}, {"max": 3.69242, "mean": 3.63994, "min": 3.59412, "period": "19 Sep", "range": 0.098297, "std": 0.021349}, {"max": 3.873239, "mean": 3.76778, "min": 3.53707, "period": "18 Sep", "range": 0.336176, "std": 0.073077}, {"max": 4.42042, "mean": 4.282539, "min": 4.09735, "period": "17 Sep", "range": 0.323074, "std": 0.071516}, {"max": 4.701139, "mean": 4.590079, "min": 4.43832, "period": "16 Sep", "range": 0.262827, "std": 0.054419}, {"max": 4.525169, "mean": 4.394199, "min": 4.25143, "period": "15 Sep", "range": 0.273739, "std": 0.057114}, {"max": 4.355549, "mean": 4.272099, "min": 4.138939, "period": "14 Sep", "range": 0.216601, "std": 0.045861}];



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
<td rowspan="14">17 Feb</td>
<td>13h</td>
<td>13.6</td>
<td>W</td>
<td>6.5</td>
<td>NaN</td>
<td>1081.5</td>
</tr>
<tr>

<td>12h</td>
<td>12.5</td>
<td>W</td>
<td>7.6</td>
<td>NaN</td>
<td>888.3</td>
</tr>
<tr>

<td>11h</td>
<td>11.6</td>
<td>SW</td>
<td>6.5</td>
<td>NaN</td>
<td>740.6</td>
</tr>
<tr>

<td>10h</td>
<td>10.8</td>
<td>W</td>
<td>1.1</td>
<td>NaN</td>
<td>526.7</td>
</tr>
<tr>

<td>09h</td>
<td>10.4</td>
<td>W</td>
<td>3.6</td>
<td>NaN</td>
<td>113.4</td>
</tr>
<tr>

<td>08h</td>
<td>10.1</td>
<td>NW</td>
<td>5.0</td>
<td>NaN</td>
<td>18.1</td>
</tr>
<tr>

<td>07h</td>
<td>10.4</td>
<td>NW</td>
<td>5.8</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>06h</td>
<td>10.7</td>
<td>W</td>
<td>9.4</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>05h</td>
<td>10.9</td>
<td>W</td>
<td>10.1</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>04h</td>
<td>11.0</td>
<td>W</td>
<td>9.0</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>03h</td>
<td>11.1</td>
<td>W</td>
<td>9.7</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>02h</td>
<td>11.2</td>
<td>W</td>
<td>9.4</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>01h</td>
<td>11.2</td>
<td>W</td>
<td>8.3</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>00h</td>
<td>11.3</td>
<td>W</td>
<td>10.1</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>
<td rowspan="24">16 Feb</td>
<td>23h</td>
<td>11.3</td>
<td>W</td>
<td>11.9</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>22h</td>
<td>11.4</td>
<td>W</td>
<td>12.6</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>21h</td>
<td>11.5</td>
<td>W</td>
<td>11.5</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>20h</td>
<td>11.4</td>
<td>W</td>
<td>13.0</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>19h</td>
<td>11.4</td>
<td>W</td>
<td>16.2</td>
<td>NaN</td>
<td>3.7</td>
</tr>
<tr>

<td>18h</td>
<td>11.5</td>
<td>W</td>
<td>17.3</td>
<td>NaN</td>
<td>45.6</td>
</tr>
<tr>

<td>17h</td>
<td>11.6</td>
<td>W</td>
<td>18.4</td>
<td>NaN</td>
<td>118.1</td>
</tr>
<tr>

<td>16h</td>
<td>11.7</td>
<td>W</td>
<td>20.5</td>
<td>NaN</td>
<td>212.5</td>
</tr>
<tr>

<td>15h</td>
<td>11.8</td>
<td>W</td>
<td>21.2</td>
<td>NaN</td>
<td>391.9</td>
</tr>
<tr>

<td>14h</td>
<td>11.8</td>
<td>W</td>
<td>21.2</td>
<td>NaN</td>
<td>392.9</td>
</tr>
<tr>

<td>13h</td>
<td>11.7</td>
<td>W</td>
<td>19.4</td>
<td>NaN</td>
<td>382.6</td>
</tr>
<tr>

<td>12h</td>
<td>11.4</td>
<td>W</td>
<td>19.8</td>
<td>NaN</td>
<td>255.0</td>
</tr>
<tr>

<td>11h</td>
<td>11.3</td>
<td>W</td>
<td>21.2</td>
<td>NaN</td>
<td>212.0</td>
</tr>
<tr>

<td>10h</td>
<td>11.1</td>
<td>W</td>
<td>21.2</td>
<td>NaN</td>
<td>228.8</td>
</tr>
<tr>

<td>09h</td>
<td>10.8</td>
<td>W</td>
<td>22.0</td>
<td>NaN</td>
<td>123.1</td>
</tr>
<tr>

<td>08h</td>
<td>10.5</td>
<td>W</td>
<td>21.2</td>
<td>NaN</td>
<td>11.3</td>
</tr>
<tr>

<td>07h</td>
<td>10.2</td>
<td>W</td>
<td>18.0</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>06h</td>
<td>9.8</td>
<td>W</td>
<td>18.0</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>05h</td>
<td>9.7</td>
<td>SW</td>
<td>14.0</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>04h</td>
<td>10.2</td>
<td>W</td>
<td>18.0</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>03h</td>
<td>10.2</td>
<td>W</td>
<td>15.5</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>02h</td>
<td>10.2</td>
<td>W</td>
<td>16.9</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>01h</td>
<td>10.3</td>
<td>W</td>
<td>15.8</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>00h</td>
<td>10.1</td>
<td>W</td>
<td>17.6</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>
<td rowspan="10">15 Feb</td>
<td>23h</td>
<td>9.8</td>
<td>W</td>
<td>13.0</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>22h</td>
<td>9.8</td>
<td>W</td>
<td>15.1</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>21h</td>
<td>9.7</td>
<td>W</td>
<td>11.2</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>20h</td>
<td>10.0</td>
<td>W</td>
<td>11.9</td>
<td>NaN</td>
<td>0.0</td>
</tr>
<tr>

<td>19h</td>
<td>10.2</td>
<td>W</td>
<td>15.1</td>
<td>NaN</td>
<td>1.6</td>
</tr>
<tr>

<td>18h</td>
<td>10.6</td>
<td>W</td>
<td>14.0</td>
<td>NaN</td>
<td>124.9</td>
</tr>
<tr>

<td>17h</td>
<td>10.8</td>
<td>W</td>
<td>15.5</td>
<td>NaN</td>
<td>390.1</td>
</tr>
<tr>

<td>16h</td>
<td>11.2</td>
<td>W</td>
<td>18.7</td>
<td>NaN</td>
<td>303.9</td>
</tr>
<tr>

<td>15h</td>
<td>11.3</td>
<td>W</td>
<td>15.5</td>
<td>NaN</td>
<td>1048.2</td>
</tr>
<tr>

<td>14h</td>
<td>11.1</td>
<td>W</td>
<td>21.6</td>
<td>NaN</td>
<td>684.7</td>
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
      <td>20 Sep</td>
      <td>3.284569</td>
      <td>3.154380</td>
      <td>3.029670</td>
      <td>0.254898</td>
      <td>0.060056</td>
    </tr>
    <tr>
      <td>19 Sep</td>
      <td>3.692420</td>
      <td>3.639940</td>
      <td>3.594120</td>
      <td>0.098297</td>
      <td>0.021349</td>
    </tr>
    <tr>
      <td>18 Sep</td>
      <td>3.873239</td>
      <td>3.767780</td>
      <td>3.537070</td>
      <td>0.336176</td>
      <td>0.073077</td>
    </tr>
    <tr>
      <td>17 Sep</td>
      <td>4.420420</td>
      <td>4.282539</td>
      <td>4.097350</td>
      <td>0.323074</td>
      <td>0.071516</td>
    </tr>
    <tr>
      <td>16 Sep</td>
      <td>4.701139</td>
      <td>4.590079</td>
      <td>4.438320</td>
      <td>0.262827</td>
      <td>0.054419</td>
    </tr>
    <tr>
      <td>15 Sep</td>
      <td>4.525169</td>
      <td>4.394199</td>
      <td>4.251430</td>
      <td>0.273739</td>
      <td>0.057114</td>
    </tr>
    <tr>
      <td>14 Sep</td>
      <td>4.355549</td>
      <td>4.272099</td>
      <td>4.138939</td>
      <td>0.216601</td>
      <td>0.045861</td>
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
      <td>11 Nov</td>
      <td>0.037819</td>
      <td>0.017794</td>
      <td>0.006811</td>
      <td>0.031008</td>
      <td>0.006818</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>10 Nov</td>
      <td>2.713782</td>
      <td>2.074893</td>
      <td>0.948845</td>
      <td>1.764937</td>
      <td>0.419939</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>09 Nov</td>
      <td>0.091557</td>
      <td>0.049302</td>
      <td>0.023653</td>
      <td>0.067905</td>
      <td>0.017091</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>08 Nov</td>
      <td>0.201596</td>
      <td>0.194001</td>
      <td>0.181771</td>
      <td>0.019825</td>
      <td>0.004757</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>06 Nov</td>
      <td>5.621387</td>
      <td>4.938694</td>
      <td>4.205142</td>
      <td>1.416246</td>
      <td>0.289705</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>05 Nov</td>
      <td>44.815571</td>
      <td>44.187172</td>
      <td>42.651684</td>
      <td>2.163887</td>
      <td>0.465781</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>04 Nov</td>
      <td>0.001594</td>
      <td>0.000108</td>
      <td>0.000000</td>
      <td>0.001594</td>
      <td>0.000390</td>
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
      <td>111</td>
    </tr>
    <tr>
      <td>Apr 25</td>
      <td>31</td>
    </tr>
    <tr>
      <td>Jul 25</td>
      <td>6</td>
    </tr>
    <tr>
      <td>Nov 25</td>
      <td>78</td>
    </tr>
    <tr>
      <td>Dec 25</td>
      <td>168</td>
    </tr>
    <tr>
      <td>Jan 26</td>
      <td>250</td>
    </tr>
    <tr>
      <td>Feb 26</td>
      <td>83</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>1116</td>
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
      <td>84</td>
    </tr>
    <tr>
      <td>Apr 25</td>
      <td>5</td>
    </tr>
    <tr>
      <td>May 25</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Jun 25</td>
      <td>582</td>
    </tr>
    <tr>
      <td>Jul 25</td>
      <td>128</td>
    </tr>
    <tr>
      <td>Aug 25</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Sep 25</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Oct 25</td>
      <td>9</td>
    </tr>
    <tr>
      <td>Nov 25</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Dec 25</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Jan 26</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Feb 26</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>1154</td>
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
            <td><a href="#" onclick="openModal('modal-Nevoeiro-17-20-02', event)">17-20/02</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-high"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Quente-17-20-02', event)">17-20/02</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-low"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Frio-17-20-02', event)">17-20/02</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-cloud-rain"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Precipitação-17-20-02', event)">17-20/02</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-17-20-02', event)">17-20/02</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-bolt"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Trovoada-17-20-02', event)">17-20/02</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-wind"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Vento-17-20-02', event)">17-20/02</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        </tbody></table>
    <dialog id="modal-Nevoeiro-17-20-02" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Nevoeiro-17-20-02', event)"></a>
                <h3>Nevoeiro</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 17/02 12:40
        <br><strong>end:</strong> 20/02 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Nevoeiro-17-20-02', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Quente-17-20-02" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Quente-17-20-02', event)"></a>
                <h3>Tempo Quente</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 17/02 12:40
        <br><strong>end:</strong> 20/02 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Quente-17-20-02', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Frio-17-20-02" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Frio-17-20-02', event)"></a>
                <h3>Tempo Frio</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 17/02 12:40
        <br><strong>end:</strong> 20/02 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Frio-17-20-02', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Precipitação-17-20-02" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Precipitação-17-20-02', event)"></a>
                <h3>Precipitação</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 17/02 12:40
        <br><strong>end:</strong> 20/02 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Precipitação-17-20-02', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-17-20-02" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-17-20-02', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 17/02 12:40
        <br><strong>end:</strong> 20/02 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Neve-17-20-02', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Trovoada-17-20-02" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Trovoada-17-20-02', event)"></a>
                <h3>Trovoada</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 17/02 12:40
        <br><strong>end:</strong> 20/02 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Trovoada-17-20-02', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Vento-17-20-02" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Vento-17-20-02', event)"></a>
                <h3>Vento</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 17/02 12:40
        <br><strong>end:</strong> 20/02 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Vento-17-20-02', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
  </div>
</div>
</div>`;