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
      <td>(5-20) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>11.67</td>
      <td>22.78</td>
      <td>0.00</td>
      <td>0%</td>
      <td>80%</td>
    </tr>
    <tr>
      <td>(5-21) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.33</td>
      <td>23.89</td>
      <td>0.00</td>
      <td>0%</td>
      <td>80%</td>
    </tr>
    <tr>
      <td>(5-22) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>13.33</td>
      <td>23.89</td>
      <td>0.00</td>
      <td>0%</td>
      <td>75%</td>
    </tr>
    <tr>
      <td>(5-23) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>11.67</td>
      <td>22.22</td>
      <td>0.00</td>
      <td>0%</td>
      <td>65%</td>
    </tr>
    <tr>
      <td>(5-24) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>11.67</td>
      <td>23.89</td>
      <td>0.00</td>
      <td>0%</td>
      <td>65%</td>
    </tr>
    <tr>
      <td>(5-25) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>11.67</td>
      <td>21.67</td>
      <td>0.00</td>
      <td>0%</td>
      <td>70%</td>
    </tr>
    <tr>
      <td>(5-26) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>11.11</td>
      <td>21.11</td>
      <td>0.00</td>
      <td>0%</td>
      <td>65%</td>
    </tr>
    <tr>
      <td>(5-27) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.22</td>
      <td>22.22</td>
      <td>0.00</td>
      <td>5%</td>
      <td>55%</td>
    </tr>
    <tr>
      <td>(5-28) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.22</td>
      <td>23.89</td>
      <td>0.00</td>
      <td>5%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(5-29) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.33</td>
      <td>24.44</td>
      <td>0.00</td>
      <td>0%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(5-30) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.33</td>
      <td>25.56</td>
      <td>0.00</td>
      <td>10%</td>
      <td>45%</td>
    </tr>
    <tr>
      <td>(5-31) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.89</td>
      <td>24.44</td>
      <td>0.00</td>
      <td>20%</td>
      <td>35%</td>
    </tr>
    <tr>
      <td>(6-1) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.78</td>
      <td>21.67</td>
      <td>0.00</td>
      <td>25%</td>
      <td>30%</td>
    </tr>
    <tr>
      <td>(6-2) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.22</td>
      <td>21.67</td>
      <td>0.00</td>
      <td>25%</td>
      <td>25%</td>
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
      <td>20 (Tue)</td>
      <td>11.67</td>
      <td>22.78</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>21 (Wed)</td>
      <td>13.33</td>
      <td>23.89</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>22 (Thu)</td>
      <td>13.33</td>
      <td>23.89</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>23 (Fri)</td>
      <td>11.67</td>
      <td>22.22</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>24 (Sat)</td>
      <td>11.67</td>
      <td>23.89</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>25 (Sun)</td>
      <td>11.67</td>
      <td>21.67</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>26 (Mon)</td>
      <td>11.11</td>
      <td>21.11</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
  </tbody>
</table></div>
<iframe src="https://www.meteoblue.com/en/weather/maps/widget/troviscais-fundeiros_portugal_2262489?windAnimation=1&gust=1&satellite=1&cloudsAndPrecipitation=1&temperature=1&sunshine=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=10&autowidth=auto"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 80%; height: 550px"></iframe><div>
`;

window.evapotranspirationData = [{"max": 3.231699, "mean": 3.11061, "min": 2.949369, "period": "18 May", "range": 0.282328, "std": 0.069836}, {"max": 5.215159, "mean": 5.123149, "min": 5.041399, "period": "17 May", "range": 0.173766, "std": 0.04759}, {"max": 4.918819, "mean": 4.83612, "min": 4.699029, "period": "16 May", "range": 0.219791, "std": 0.055352}, {"max": 4.581369, "mean": 4.548669, "min": 4.498239, "period": "15 May", "range": 0.083127, "std": 0.020748}, {"max": 3.961899, "mean": 3.86946, "min": 3.76887, "period": "14 May", "range": 0.193027, "std": 0.043471}, {"max": 3.450629, "mean": 3.423449, "min": 3.367719, "period": "10 May", "range": 0.082906, "std": 0.016296}, {"max": 4.142849, "mean": 4.070099, "min": 4.02157, "period": "07 May", "range": 0.121284, "std": 0.033989}];



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
      <td>18 May</td>
      <td>3.231699</td>
      <td>3.110610</td>
      <td>2.949369</td>
      <td>0.282328</td>
      <td>0.069836</td>
    </tr>
    <tr>
      <td>17 May</td>
      <td>5.215159</td>
      <td>5.123149</td>
      <td>5.041399</td>
      <td>0.173766</td>
      <td>0.047590</td>
    </tr>
    <tr>
      <td>16 May</td>
      <td>4.918819</td>
      <td>4.836120</td>
      <td>4.699029</td>
      <td>0.219791</td>
      <td>0.055352</td>
    </tr>
    <tr>
      <td>15 May</td>
      <td>4.581369</td>
      <td>4.548669</td>
      <td>4.498239</td>
      <td>0.083127</td>
      <td>0.020748</td>
    </tr>
    <tr>
      <td>14 May</td>
      <td>3.961899</td>
      <td>3.869460</td>
      <td>3.768870</td>
      <td>0.193027</td>
      <td>0.043471</td>
    </tr>
    <tr>
      <td>10 May</td>
      <td>3.450629</td>
      <td>3.423449</td>
      <td>3.367719</td>
      <td>0.082906</td>
      <td>0.016296</td>
    </tr>
    <tr>
      <td>07 May</td>
      <td>4.142849</td>
      <td>4.070099</td>
      <td>4.021570</td>
      <td>0.121284</td>
      <td>0.033989</td>
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
      <td>18 May</td>
      <td>2.168307</td>
      <td>1.714951</td>
      <td>1.300472</td>
      <td>0.867834</td>
      <td>0.225792</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>17 May</td>
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
      <td>16 May</td>
      <td>0.008581</td>
      <td>0.006913</td>
      <td>0.004600</td>
      <td>0.003981</td>
      <td>0.000997</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>15 May</td>
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
      <td>14 May</td>
      <td>0.008581</td>
      <td>0.006913</td>
      <td>0.004600</td>
      <td>0.003981</td>
      <td>0.000997</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>13 May</td>
      <td>2.925165</td>
      <td>2.341880</td>
      <td>1.880679</td>
      <td>1.044487</td>
      <td>0.269202</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>12 May</td>
      <td>0.568794</td>
      <td>0.513331</td>
      <td>0.437261</td>
      <td>0.131533</td>
      <td>0.032754</td>
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
      <td>465</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>1897</td>
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
            <td><a href="#" onclick="openModal('modal-Nevoeiro-20-23-05', event)">20-23/05</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-high"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Quente-20-23-05', event)">20-23/05</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-low"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Frio-20-23-05', event)">20-23/05</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-cloud-rain"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Precipitação-20-23-05', event)">20-23/05</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-20-23-05', event)">20-23/05</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-bolt"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Trovoada-20-23-05', event)">20-23/05</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-wind"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Vento-20-23-05', event)">20-23/05</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        </tbody></table>
    <dialog id="modal-Nevoeiro-20-23-05" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Nevoeiro-20-23-05', event)"></a>
                <h3>Nevoeiro</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 20/05 06:04
        <br><strong>end:</strong> 23/05 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Nevoeiro-20-23-05', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Quente-20-23-05" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Quente-20-23-05', event)"></a>
                <h3>Tempo Quente</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 20/05 06:04
        <br><strong>end:</strong> 23/05 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Quente-20-23-05', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Frio-20-23-05" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Frio-20-23-05', event)"></a>
                <h3>Tempo Frio</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 20/05 06:04
        <br><strong>end:</strong> 23/05 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Frio-20-23-05', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Precipitação-20-23-05" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Precipitação-20-23-05', event)"></a>
                <h3>Precipitação</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 20/05 06:04
        <br><strong>end:</strong> 23/05 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Precipitação-20-23-05', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-20-23-05" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-20-23-05', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 20/05 06:04
        <br><strong>end:</strong> 23/05 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Neve-20-23-05', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Trovoada-20-23-05" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Trovoada-20-23-05', event)"></a>
                <h3>Trovoada</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 20/05 06:04
        <br><strong>end:</strong> 23/05 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Trovoada-20-23-05', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Vento-20-23-05" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Vento-20-23-05', event)"></a>
                <h3>Vento</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 20/05 06:04
        <br><strong>end:</strong> 23/05 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Vento-20-23-05', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
  </div>
</div>
</div>`;