// ✅ Declare global variables first
window.forecastTable = `<div class="table-wrapper desktop-view">
  <table class="dataframe custom-table desktop-view">
  <thead>
    <tr style="text-align: right;">
      <th>date</th>
      <th>weekday</th>
      <th>min</th>
      <th>max</th>
      <th>pred</th>
      <th>prec mm</th>
      <th>prob %</th>
      <th>obs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3-21</td>
      <td>Fri</td>
      <td>7.22</td>
      <td>12.22</td>
      <td>60%</td>
      <td>0.99</td>
      <td>100%</td>
      <td>Mostly cloudy with rain</td>
    </tr>
    <tr>
      <td>3-22</td>
      <td>Sat</td>
      <td>6.11</td>
      <td>10.56</td>
      <td>50%</td>
      <td>1.78</td>
      <td>100%</td>
      <td>Mostly cloudy with rain</td>
    </tr>
    <tr>
      <td>3-23</td>
      <td>Sun</td>
      <td>5.00</td>
      <td>10.56</td>
      <td>45%</td>
      <td>0.21</td>
      <td>55%</td>
      <td>Mixed with showers</td>
    </tr>
    <tr>
      <td>3-24</td>
      <td>Mon</td>
      <td>4.44</td>
      <td>12.78</td>
      <td>65%</td>
      <td>0.00</td>
      <td>15%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>3-25</td>
      <td>Tue</td>
      <td>5.00</td>
      <td>15.56</td>
      <td>70%</td>
      <td>0.00</td>
      <td>0%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>3-26</td>
      <td>Wed</td>
      <td>5.56</td>
      <td>16.11</td>
      <td>70%</td>
      <td>0.00</td>
      <td>5%</td>
      <td>Partly cloudy</td>
    </tr>
    <tr>
      <td>3-27</td>
      <td>Thu</td>
      <td>7.78</td>
      <td>16.67</td>
      <td>40%</td>
      <td>0.00</td>
      <td>15%</td>
      <td>Clear and few clouds</td>
    </tr>
    <tr>
      <td>3-28</td>
      <td>Fri</td>
      <td>7.78</td>
      <td>17.22</td>
      <td>35%</td>
      <td>0.00</td>
      <td>20%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>3-29</td>
      <td>Sat</td>
      <td>7.22</td>
      <td>16.67</td>
      <td>35%</td>
      <td>0.00</td>
      <td>20%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>3-30</td>
      <td>Sun</td>
      <td>6.11</td>
      <td>17.22</td>
      <td>45%</td>
      <td>0.00</td>
      <td>15%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>3-31</td>
      <td>Mon</td>
      <td>7.22</td>
      <td>17.22</td>
      <td>35%</td>
      <td>0.00</td>
      <td>20%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>4-1</td>
      <td>Tue</td>
      <td>7.22</td>
      <td>17.78</td>
      <td>35%</td>
      <td>0.00</td>
      <td>20%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>4-2</td>
      <td>Wed</td>
      <td>7.22</td>
      <td>16.11</td>
      <td>15%</td>
      <td>0.00</td>
      <td>35%</td>
      <td>Clear, cloudless sky</td>
    </tr>
    <tr>
      <td>4-3</td>
      <td>Thu</td>
      <td>7.22</td>
      <td>16.67</td>
      <td>10%</td>
      <td>0.00</td>
      <td>40%</td>
      <td>Clear, cloudless sky</td>
    </tr>
  </tbody>
</table></div>`;

window.forecastTableMobile = `<div class="table-wrapper mobile-view">
  <table class="dataframe custom-table mobile-view">
  <thead>
    <tr style="text-align: right;">
      <th>day</th>
      <th>min</th>
      <th>max</th>
      <th>prec mm</th>
      <th>prob %</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fri (21)</td>
      <td>7.22</td>
      <td>12.22</td>
      <td>0.99</td>
      <td>100%</td>
    </tr>
    <tr>
      <td>Sat (22)</td>
      <td>6.11</td>
      <td>10.56</td>
      <td>1.78</td>
      <td>100%</td>
    </tr>
    <tr>
      <td>Sun (23)</td>
      <td>5.00</td>
      <td>10.56</td>
      <td>0.21</td>
      <td>55%</td>
    </tr>
    <tr>
      <td>Mon (24)</td>
      <td>4.44</td>
      <td>12.78</td>
      <td>0.00</td>
      <td>15%</td>
    </tr>
    <tr>
      <td>Tue (25)</td>
      <td>5.00</td>
      <td>15.56</td>
      <td>0.00</td>
      <td>0%</td>
    </tr>
    <tr>
      <td>Wed (26)</td>
      <td>5.56</td>
      <td>16.11</td>
      <td>0.00</td>
      <td>5%</td>
    </tr>
    <tr>
      <td>Thu (27)</td>
      <td>7.78</td>
      <td>16.67</td>
      <td>0.00</td>
      <td>15%</td>
    </tr>
  </tbody>
</table></div>`;

window.evapotranspirationData = [{"max": 2.689049, "mean": 2.52899, "min": 2.397779, "period": "20 Mar", "range": 0.291271, "std": 0.066176}, {"max": 2.72545, "mean": 2.58501, "min": 2.51425, "period": "19 Mar", "range": 0.211192, "std": 0.041785}, {"max": 1.970399, "mean": 1.95676, "min": 1.940369, "period": "18 Mar", "range": 0.030033, "std": 0.006987}, {"max": 1.628299, "mean": 1.52915, "min": 1.457389, "period": "17 Mar", "range": 0.170909, "std": 0.033697}, {"max": 2.205319, "mean": 2.163209, "min": 2.11467, "period": "16 Mar", "range": 0.090649, "std": 0.022819}, {"max": 1.96596, "mean": 1.95621, "min": 1.932729, "period": "15 Mar", "range": 0.033223, "std": 0.007206}, {"max": 2.594079, "mean": 2.546809, "min": 2.49825, "period": "14 Mar", "range": 0.095828, "std": 0.0221}];
window.observationsTable = `<div class="table-wrapper"><table class="dataframe custom-table">
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

<details class="dropdown">
  <summary>Dropdown</summary>
  <ul>
    <li><a href="#">Ansião</a></li>
    <li><a href="#">Evapotranspiration</a></li>
  </ul>
</details>

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
      <td>20 Mar</td>
      <td>2.689049</td>
      <td>2.528990</td>
      <td>2.397779</td>
      <td>0.291271</td>
      <td>0.066176</td>
    </tr>
    <tr>
      <td>19 Mar</td>
      <td>2.725450</td>
      <td>2.585010</td>
      <td>2.514250</td>
      <td>0.211192</td>
      <td>0.041785</td>
    </tr>
    <tr>
      <td>18 Mar</td>
      <td>1.970399</td>
      <td>1.956760</td>
      <td>1.940369</td>
      <td>0.030033</td>
      <td>0.006987</td>
    </tr>
    <tr>
      <td>17 Mar</td>
      <td>1.628299</td>
      <td>1.529150</td>
      <td>1.457389</td>
      <td>0.170909</td>
      <td>0.033697</td>
    </tr>
    <tr>
      <td>16 Mar</td>
      <td>2.205319</td>
      <td>2.163209</td>
      <td>2.114670</td>
      <td>0.090649</td>
      <td>0.022819</td>
    </tr>
    <tr>
      <td>15 Mar</td>
      <td>1.965960</td>
      <td>1.956210</td>
      <td>1.932729</td>
      <td>0.033223</td>
      <td>0.007206</td>
    </tr>
    <tr>
      <td>14 Mar</td>
      <td>2.594079</td>
      <td>2.546809</td>
      <td>2.498250</td>
      <td>0.095828</td>
      <td>0.022100</td>
    </tr>
  </tbody>
</table>

<!-- ✅ Ensure the Chart Canvas Exists -->
<div id="evapoChartContainer">
  <canvas id="evapoChart" width="800" height="400"></canvas>
</div>`;


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
      <td>127</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>467</td>
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
            <td><a href="#" onclick="openModal('modal-Nevoeiro-21-24-03', event)">21-24/03</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-high"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Quente-21-24-03', event)">21-24/03</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-temperature-low"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Tempo-Frio-21-24-03', event)">21-24/03</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-cloud-rain"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Precipitação-21-24-03', event)">21-24/03</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-21-24-03', event)">21-24/03</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-bolt"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Trovoada-21-24-03', event)">21-24/03</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="green hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-wind"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #26ba81;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Vento-21-24-03', event)">21-24/03</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Castelo Branco (59km ESE)">CB</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="yellow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #FFD43B;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-21-21-03', event)">21-21/03</a></td>
            <td><span data-tooltip="Castelo Branco (59km ESE)">CB</span></td>
        </tr>
        
        <tr class="yellow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-cloud-rain"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #FFD43B;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Precipitação-21-22-03', event)">21-22/03</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span></td>
        </tr>
        
        <tr class="yellow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-wind"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #FFD43B;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Vento-21-22-03', event)">21-22/03</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span>, <span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="yellow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-cloud-rain"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #FFD43B;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Precipitação-21-21-03', event)">21-21/03</a></td>
            <td><span data-tooltip="Leiria (58km WSW)">L</span></td>
        </tr>
        
        <tr class="orange hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #f58d38;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-21-23-03', event)">21-23/03</a></td>
            <td><span data-tooltip="Castelo Branco (59km ESE)">CB</span></td>
        </tr>
        
        <tr class="yellow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #FFD43B;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-22-23-03', event)">22-23/03</a></td>
            <td><span data-tooltip="Coimbra (36km NW)">C</span></td>
        </tr>
        
        <tr class="yellow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid fa-snowflake"></i></td>
            <td class="level"><i class="fa-solid fa-circle" style="color: #FFD43B;"></i></td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('modal-Neve-23-23-03', event)">23-23/03</a></td>
            <td><span data-tooltip="Castelo Branco (59km ESE)">CB</span></td>
        </tr>
        </tbody></table>
    <dialog id="modal-Nevoeiro-21-24-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Nevoeiro-21-24-03', event)"></a>
                <h3>Nevoeiro</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 21/03 11:02
        <br><strong>end:</strong> 24/03 11:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Nevoeiro-21-24-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Quente-21-24-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Quente-21-24-03', event)"></a>
                <h3>Tempo Quente</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 21/03 11:02
        <br><strong>end:</strong> 24/03 11:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Quente-21-24-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Tempo-Frio-21-24-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Tempo-Frio-21-24-03', event)"></a>
                <h3>Tempo Frio</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 21/03 11:02
        <br><strong>end:</strong> 24/03 11:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Tempo-Frio-21-24-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Precipitação-21-24-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Precipitação-21-24-03', event)"></a>
                <h3>Precipitação</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 21/03 11:02
        <br><strong>end:</strong> 24/03 11:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Precipitação-21-24-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-21-24-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-21-24-03', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 21/03 11:02
        <br><strong>end:</strong> 24/03 11:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Neve-21-24-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Trovoada-21-24-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Trovoada-21-24-03', event)"></a>
                <h3>Trovoada</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 21/03 11:02
        <br><strong>end:</strong> 24/03 11:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Trovoada-21-24-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Vento-21-24-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Vento-21-24-03', event)"></a>
                <h3>Vento</h3>
            </header>
            
        <strong>alert level:</strong> green
        <br><strong>start:</strong> 21/03 11:02
        <br><strong>end:</strong> 24/03 11:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br></p><p><strong>Castelo Branco (59km ESE)</strong><br></p><p><strong>Coimbra (36km NW)</strong><br></p>
            <footer>
                <button onclick="closeModal('modal-Vento-21-24-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-21-21-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-21-21-03', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> yellow
        <br><strong>start:</strong> 21/03 11:02
        <br><strong>end:</strong> 21/03 18:00
        <hr>
    <p><strong>Castelo Branco (59km ESE)</strong><br>Queda de neve de 1200/1400 metros de altitude. Acumulação até 4 cm acima de 1200 metros e até 20 cm acima de 1600 metros.Impactos Prováveis: Perturbação causada por queda de neve com acumulação e possível formação de gelo (p. ex., vias condicionadas ou interditas, danos em estruturas ou árvores, abastecimentos locais prejudicados).</p>
            <footer>
                <button onclick="closeModal('modal-Neve-21-21-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Precipitação-21-22-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Precipitação-21-22-03', event)"></a>
                <h3>Precipitação</h3>
            </header>
            
        <strong>alert level:</strong> yellow
        <br><strong>start:</strong> 21/03 11:02
        <br><strong>end:</strong> 22/03 06:00
        <hr>
    <p><strong>Coimbra (36km NW)</strong><br>Aguaceiros por vezes fortes, que poderão ser ocasionalmente sob a forma de granizo e acompanhados de trovoadas.</p>
            <footer>
                <button onclick="closeModal('modal-Precipitação-21-22-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Vento-21-22-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Vento-21-22-03', event)"></a>
                <h3>Vento</h3>
            </header>
            
        <strong>alert level:</strong> yellow
        <br><strong>start:</strong> 21/03 11:02
        <br><strong>end:</strong> 22/03 12:00
        <hr>
    <p><strong>Coimbra (36km NW)</strong><br>Vento sudoeste com rajadas até 80 km/h, rodando para noroeste a partir da madrugada.</p><p><strong>Leiria (58km WSW)</strong><br>Vento sudoeste com rajadas até 80 km/h, rodando para noroeste a partir da madrugada.</p>
            <footer>
                <button onclick="closeModal('modal-Vento-21-22-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Precipitação-21-21-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Precipitação-21-21-03', event)"></a>
                <h3>Precipitação</h3>
            </header>
            
        <strong>alert level:</strong> yellow
        <br><strong>start:</strong> 21/03 12:00
        <br><strong>end:</strong> 21/03 18:00
        <hr>
    <p><strong>Leiria (58km WSW)</strong><br>Aguaceiros  por vezes fortes, que poderão ser ocasionalmente sob a forma de granizo e acompanhados de trovoadas.</p>
            <footer>
                <button onclick="closeModal('modal-Precipitação-21-21-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-21-23-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-21-23-03', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> orange
        <br><strong>start:</strong> 21/03 18:00
        <br><strong>end:</strong> 23/03 00:00
        <hr>
    <p><strong>Castelo Branco (59km ESE)</strong><br>Queda de neve acima de 1200 a 1400 metros de altitude, diminuindo  a cota para 1000/1200 metros de altitude a partir da manhã de dia 22. Acumulação até 15 cm acima de 1200 metros e até 50 cm acima de 1600 metros.Impactos Prováveis: Perturbação moderada causada por queda de neve com acumulação e possível formação de  gelo (p. ex., vias condicionadas ou interditas, danos em estruturas ou árvores, abastecimentos locais prejudicados).</p>
            <footer>
                <button onclick="closeModal('modal-Neve-21-23-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-22-23-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-22-23-03', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> yellow
        <br><strong>start:</strong> 22/03 09:00
        <br><strong>end:</strong> 23/03 00:00
        <hr>
    <p><strong>Coimbra (36km NW)</strong><br>Queda de neve acima de 1000/1200 m de altitude, com acumulação que poderá ser da ordem de 5 cm.Impactos Prováveis: Perturbação causada por queda de neve com acumulação e possível formação de gelo (p. ex., vias condicionadas ou interditas, danos em estruturas ou árvores, abastecimentos locais prejudicados).</p>
            <footer>
                <button onclick="closeModal('modal-Neve-22-23-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
    <dialog id="modal-Neve-23-23-03" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('modal-Neve-23-23-03', event)"></a>
                <h3>Neve</h3>
            </header>
            
        <strong>alert level:</strong> yellow
        <br><strong>start:</strong> 23/03 00:00
        <br><strong>end:</strong> 23/03 18:00
        <hr>
    <p><strong>Castelo Branco (59km ESE)</strong><br>Queda de neve acima da cota de 1000 a 1200 metros de altitude. Acumulação até 5 cm acima de 1200 metros.Impactos Prováveis: Perturbação causada por queda de neve com acumulação e possível formação de gelo (p. ex., vias condicionadas ou interditas, danos em estruturas ou árvores, abastecimentos locais prejudicados).</p>
            <footer>
                <button onclick="closeModal('modal-Neve-23-23-03', event)">Close</button>
            </footer>
        </article>
    </dialog>
    
  </div>
</div>
</div>`;