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
      <td>(9-12) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>15.56</td>
      <td>26.11</td>
      <td>0.00</td>
      <td>0%</td>
      <td>80%</td>
    </tr>
    <tr>
      <td>(9-13) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>13.33</td>
      <td>24.44</td>
      <td>0.00</td>
      <td>0%</td>
      <td>90%</td>
    </tr>
    <tr>
      <td>(9-14) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.33</td>
      <td>28.89</td>
      <td>0.00</td>
      <td>0%</td>
      <td>85%</td>
    </tr>
    <tr>
      <td>(9-15) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.89</td>
      <td>27.78</td>
      <td>0.00</td>
      <td>0%</td>
      <td>85%</td>
    </tr>
    <tr>
      <td>(9-16) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>12.78</td>
      <td>29.44</td>
      <td>0.00</td>
      <td>0%</td>
      <td>75%</td>
    </tr>
    <tr>
      <td>(9-17) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.78</td>
      <td>29.44</td>
      <td>0.00</td>
      <td>0%</td>
      <td>60%</td>
    </tr>
    <tr>
      <td>(9-18) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>13.33</td>
      <td>28.33</td>
      <td>0.00</td>
      <td>0%</td>
      <td>55%</td>
    </tr>
    <tr>
      <td>(9-19) Fri</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>15.56</td>
      <td>28.89</td>
      <td>0.00</td>
      <td>5%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(9-20) Sat</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>15.56</td>
      <td>26.11</td>
      <td>0.00</td>
      <td>10%</td>
      <td>35%</td>
    </tr>
    <tr>
      <td>(9-21) Sun</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.78</td>
      <td>23.33</td>
      <td>0.00</td>
      <td>5%</td>
      <td>45%</td>
    </tr>
    <tr>
      <td>(9-22) Mon</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>11.11</td>
      <td>23.33</td>
      <td>0.00</td>
      <td>5%</td>
      <td>45%</td>
    </tr>
    <tr>
      <td>(9-23) Tue</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>11.67</td>
      <td>25.00</td>
      <td>0.00</td>
      <td>5%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(9-24) Wed</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/01_iday_simple.svg" title="Clear, cloudless sky"/></td>
      <td>12.78</td>
      <td>26.67</td>
      <td>0.00</td>
      <td>0%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>(9-25) Thu</td>
      <td><img class="fdw-pictogram" src="https://static.meteoblue.com/assets/images/picto/02_iday_simple.svg" title="Clear and few clouds"/></td>
      <td>13.89</td>
      <td>26.11</td>
      <td>0.00</td>
      <td>10%</td>
      <td>40%</td>
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
      <td>12 (Fri)</td>
      <td>15.56</td>
      <td>26.11</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>13 (Sat)</td>
      <td>13.33</td>
      <td>24.44</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>14 (Sun)</td>
      <td>13.33</td>
      <td>28.89</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>15 (Mon)</td>
      <td>13.89</td>
      <td>27.78</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>16 (Tue)</td>
      <td>12.78</td>
      <td>29.44</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>17 (Wed)</td>
      <td>12.78</td>
      <td>29.44</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>18 (Thu)</td>
      <td>13.33</td>
      <td>28.33</td>
      <td>0</td>
      <td>0%</td>
      <td>Clear, cloudless sky</td>
    </tr>
  </tbody>
</table></div>
<iframe src="https://www.meteoblue.com/en/weather/maps/widget/troviscais-fundeiros_portugal_2262489?windAnimation=1&gust=1&satellite=1&cloudsAndPrecipitation=1&temperature=1&sunshine=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=10&autowidth=auto"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 80%; height: 550px"></iframe><div>
`;

window.evapotranspirationData = [{"max": 4.196889, "mean": 4.10551, "min": 4.017859, "period": "09 Sep", "range": 0.17903, "std": 0.043811}, {"max": 4.460249, "mean": 4.36838, "min": 4.259699, "period": "08 Sep", "range": 0.200547, "std": 0.04405}, {"max": 2.28411, "mean": 2.275419, "min": 2.26408, "period": "07 Sep", "range": 0.020033, "std": 0.003761}, {"max": 5.009469, "mean": 4.880849, "min": 4.669789, "period": "06 Sep", "range": 0.339675, "std": 0.070725}, {"max": 4.79992, "mean": 4.757199, "min": 4.68271, "period": "05 Sep", "range": 0.117211, "std": 0.023915}, {"max": 4.474349, "mean": 4.41434, "min": 4.310959, "period": "04 Sep", "range": 0.163388, "std": 0.033948}, {"max": 4.268809, "mean": 4.10745, "min": 3.953389, "period": "03 Sep", "range": 0.315418, "std": 0.07463}];



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
      <td>09 Sep</td>
      <td>4.196889</td>
      <td>4.105510</td>
      <td>4.017859</td>
      <td>0.179030</td>
      <td>0.043811</td>
    </tr>
    <tr>
      <td>08 Sep</td>
      <td>4.460249</td>
      <td>4.368380</td>
      <td>4.259699</td>
      <td>0.200547</td>
      <td>0.044050</td>
    </tr>
    <tr>
      <td>07 Sep</td>
      <td>2.284110</td>
      <td>2.275419</td>
      <td>2.264080</td>
      <td>0.020033</td>
      <td>0.003761</td>
    </tr>
    <tr>
      <td>06 Sep</td>
      <td>5.009469</td>
      <td>4.880849</td>
      <td>4.669789</td>
      <td>0.339675</td>
      <td>0.070725</td>
    </tr>
    <tr>
      <td>05 Sep</td>
      <td>4.799920</td>
      <td>4.757199</td>
      <td>4.682710</td>
      <td>0.117211</td>
      <td>0.023915</td>
    </tr>
    <tr>
      <td>04 Sep</td>
      <td>4.474349</td>
      <td>4.414340</td>
      <td>4.310959</td>
      <td>0.163388</td>
      <td>0.033948</td>
    </tr>
    <tr>
      <td>03 Sep</td>
      <td>4.268809</td>
      <td>4.107450</td>
      <td>3.953389</td>
      <td>0.315418</td>
      <td>0.074630</td>
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
      <td>10 Sep</td>
      <td>4.973722</td>
      <td>3.295567</td>
      <td>1.883086</td>
      <td>3.090636</td>
      <td>0.745182</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>09 Sep</td>
      <td>0.614163</td>
      <td>0.397807</td>
      <td>0.225004</td>
      <td>0.389159</td>
      <td>0.111943</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>08 Sep</td>
      <td>0.034577</td>
      <td>0.027287</td>
      <td>0.021204</td>
      <td>0.013373</td>
      <td>0.002531</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>07 Sep</td>
      <td>4.986946</td>
      <td>4.057761</td>
      <td>2.489344</td>
      <td>2.497602</td>
      <td>0.575954</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>06 Sep</td>
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
      <td>05 Sep</td>
      <td>0.017163</td>
      <td>0.013825</td>
      <td>0.009200</td>
      <td>0.007962</td>
      <td>0.001995</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>04 Sep</td>
      <td>0.036074</td>
      <td>0.024075</td>
      <td>0.013339</td>
      <td>0.022735</td>
      <td>0.005941</td>
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
      <td>273</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>4657</td>
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
            <td><a href="#" onclick="openModal('modal-Nevoeiro-12-15-09', event)">12-15/09</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-high"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Quente-12-15-09', event)">12-15/09</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-low"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Frio-12-15-09', event)">12-15/09</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-cloud-rain"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Precipitação-12-15-09', event)">12-15/09</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-12-15-09', event)">12-15/09</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-bolt"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Trovoada-12-15-09', event)">12-15/09</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-wind"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Vento-12-15-09', event)">12-15/09</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        </tbody></table>
    <dialog id="modal-Nevoeiro-12-15-09" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Nevoeiro-12-15-09', event)"></a>
                <h3>Nevoeiro</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 12/09 06:02
        <br><strong>end:</strong> 15/09 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Nevoeiro-12-15-09', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Quente-12-15-09" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Quente-12-15-09', event)"></a>
                <h3>Tempo Quente</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 12/09 06:02
        <br><strong>end:</strong> 15/09 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Quente-12-15-09', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Frio-12-15-09" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Frio-12-15-09', event)"></a>
                <h3>Tempo Frio</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 12/09 06:02
        <br><strong>end:</strong> 15/09 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Frio-12-15-09', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Precipitação-12-15-09" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Precipitação-12-15-09', event)"></a>
                <h3>Precipitação</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 12/09 06:02
        <br><strong>end:</strong> 15/09 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Precipitação-12-15-09', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-12-15-09" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-12-15-09', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 12/09 06:02
        <br><strong>end:</strong> 15/09 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Neve-12-15-09', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Trovoada-12-15-09" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Trovoada-12-15-09', event)"></a>
                <h3>Trovoada</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 12/09 06:02
        <br><strong>end:</strong> 15/09 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Trovoada-12-15-09', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Vento-12-15-09" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Vento-12-15-09', event)"></a>
                <h3>Vento</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 12/09 06:02
        <br><strong>end:</strong> 15/09 06:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Vento-12-15-09', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
  </div>
</div>
</div>`;