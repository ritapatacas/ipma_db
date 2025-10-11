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
      <td>(10-11) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>16.11</td>
      <td>25.56</td>
      <td>0.00</td>
      <td>0%</td>
      <td>95%</td>
    </tr>
    <tr>
      <td>(10-12) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>15.56</td>
      <td>25.00</td>
      <td>0.00</td>
      <td>0%</td>
      <td>80%</td>
    </tr>
    <tr>
      <td>(10-13) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>15.00</td>
      <td>26.11</td>
      <td>0.00</td>
      <td>5%</td>
      <td>85%</td>
    </tr>
    <tr>
      <td>(10-14) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/03_iday_simple.svg" title="Partly cloudy"/></td>
      <td>14.44</td>
      <td>27.22</td>
      <td>0.00</td>
      <td>0%</td>
      <td>80%</td>
    </tr>
    <tr>
      <td>(10-15) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/03_iday_simple.svg" title="Partly cloudy"/></td>
      <td>15.00</td>
      <td>27.22</td>
      <td>0.00</td>
      <td>10%</td>
      <td>70%</td>
    </tr>
    <tr>
      <td>(10-16) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/08_iday_simple.svg" title="Showers, thunderstorms likely"/></td>
      <td>16.11</td>
      <td>23.89</td>
      <td>0.11</td>
      <td>20%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(10-17) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>14.44</td>
      <td>23.89</td>
      <td>0.00</td>
      <td>20%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(10-18) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>15.00</td>
      <td>22.78</td>
      <td>0.00</td>
      <td>15%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(10-19) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.89</td>
      <td>21.11</td>
      <td>0.00</td>
      <td>15%</td>
      <td>45%</td>
    </tr>
    <tr>
      <td>(10-20) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>13.33</td>
      <td>20.56</td>
      <td>0.00</td>
      <td>25%</td>
      <td>40%</td>
    </tr>
    <tr>
      <td>(10-21) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>13.33</td>
      <td>20.00</td>
      <td>0.00</td>
      <td>25%</td>
      <td>30%</td>
    </tr>
    <tr>
      <td>(10-22) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.78</td>
      <td>20.00</td>
      <td>0.00</td>
      <td>30%</td>
      <td>30%</td>
    </tr>
    <tr>
      <td>(10-23) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.22</td>
      <td>18.89</td>
      <td>0.00</td>
      <td>35%</td>
      <td>10%</td>
    </tr>
    <tr>
      <td>(10-24) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>11.11</td>
      <td>18.33</td>
      <td>0.00</td>
      <td>40%</td>
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
      <td>11 (Sat)</td>
      <td>16.11</td>
      <td>25.56</td>
      <td>0.0000</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>12 (Sun)</td>
      <td>15.56</td>
      <td>25.00</td>
      <td>0.0000</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>13 (Mon)</td>
      <td>15.00</td>
      <td>26.11</td>
      <td>0.0000</td>
      <td>5%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>14 (Tue)</td>
      <td>14.44</td>
      <td>27.22</td>
      <td>0.0000</td>
      <td>0%</td>
      <td>Partly cloudy</td>
    </tr>
    <tr>
      <td>15 (Wed)</td>
      <td>15.00</td>
      <td>27.22</td>
      <td>0.0000</td>
      <td>10%</td>
      <td>Partly cloudy</td>
    </tr>
    <tr>
      <td>16 (Thu)</td>
      <td>16.11</td>
      <td>23.89</td>
      <td>0.1067</td>
      <td>20%</td>
      <td>Showers, thunderstorms likely</td>
    </tr>
    <tr>
      <td>17 (Fri)</td>
      <td>14.44</td>
      <td>23.89</td>
      <td>0.0000</td>
      <td>20%</td>
      <td>Clear and few clouds</td>
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
      <td>10 Oct</td>
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
      <td>09 Oct</td>
      <td>0.021744</td>
      <td>0.010067</td>
      <td>0.002898</td>
      <td>0.018847</td>
      <td>0.004660</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>08 Oct</td>
      <td>0.024900</td>
      <td>0.019255</td>
      <td>0.012447</td>
      <td>0.012453</td>
      <td>0.002933</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>07 Oct</td>
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
      <td>06 Oct</td>
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
      <td>05 Oct</td>
      <td>0.357650</td>
      <td>0.308111</td>
      <td>0.253547</td>
      <td>0.104103</td>
      <td>0.024721</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>04 Oct</td>
      <td>0.170611</td>
      <td>0.114547</td>
      <td>0.056728</td>
      <td>0.113883</td>
      <td>0.028349</td>
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
      <td>744</td>
    </tr>
    <tr>
      <td>Sep 25</td>
      <td>720</td>
    </tr>
    <tr>
      <td>Oct 25</td>
      <td>257</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>5361</td>
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
            <td><a href="#" onclick="openModal('modal-Nevoeiro-11-14-10', event)">11-14/10</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-high"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Quente-11-14-10', event)">11-14/10</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-low"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Frio-11-14-10', event)">11-14/10</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-cloud-rain"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Precipitação-11-14-10', event)">11-14/10</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-11-14-10', event)">11-14/10</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-bolt"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Trovoada-11-14-10', event)">11-14/10</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-wind"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Vento-11-14-10', event)">11-14/10</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        </tbody></table>
    <dialog id="modal-Nevoeiro-11-14-10" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Nevoeiro-11-14-10', event)"></a>
                <h3>Nevoeiro</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 11/10 12:09
        <br><strong>end:</strong> 14/10 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Nevoeiro-11-14-10', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Quente-11-14-10" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Quente-11-14-10', event)"></a>
                <h3>Tempo Quente</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 11/10 12:09
        <br><strong>end:</strong> 14/10 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Quente-11-14-10', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Frio-11-14-10" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Frio-11-14-10', event)"></a>
                <h3>Tempo Frio</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 11/10 12:09
        <br><strong>end:</strong> 14/10 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Frio-11-14-10', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Precipitação-11-14-10" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Precipitação-11-14-10', event)"></a>
                <h3>Precipitação</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 11/10 12:09
        <br><strong>end:</strong> 14/10 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Precipitação-11-14-10', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-11-14-10" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-11-14-10', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 11/10 12:09
        <br><strong>end:</strong> 14/10 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Neve-11-14-10', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Trovoada-11-14-10" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Trovoada-11-14-10', event)"></a>
                <h3>Trovoada</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 11/10 12:09
        <br><strong>end:</strong> 14/10 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Trovoada-11-14-10', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Vento-11-14-10" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Vento-11-14-10', event)"></a>
                <h3>Vento</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 11/10 12:09
        <br><strong>end:</strong> 14/10 12:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Vento-11-14-10', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
  </div>
</div>
</div>`;