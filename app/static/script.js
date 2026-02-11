const DATA_BASE = "data/";
const DATA_BASE_FALLBACK = "dist/data/";

const WARNING_ICONS = {
  Nevoeiro: "fa-smog",
  "Tempo Quente": "fa-temperature-high",
  "Tempo Frio": "fa-temperature-low",
  Precipitação: "fa-cloud-rain",
  Neve: "fa-snowflake",
  Trovoada: "fa-bolt",
  Vento: "fa-wind",
};
const WARNING_LEVEL_COLORS = {
  green: "#26ba81",
  yellow: "#FFD43B",
  orange: "#f58d38",
  red: "#ea3939",
};
function getWarningLevelIcon(level) {
  const color = WARNING_LEVEL_COLORS[level && level.toLowerCase()] || "";
  return color ? `<i class="fa-solid fa-circle" style="color: ${color};"></i>` : "";
}

function formatDateDM(s) {
  if (!s) return "";
  const d = new Date(s);
  if (isNaN(d.getTime())) return s;
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  return `${day}-${month}`;
}
function formatDateDMMM(s) {
  if (!s) return "";
  const d = new Date(s);
  if (isNaN(d.getTime())) return s;
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, "0");
  return `${day}/${month} ${h}:${m}`;
}

const FORECAST_WEEK_SIZE = 7;
const GOOGLE_WEATHER_ICON_BASE = "https://maps.gstatic.com/weather/v1/";
function getForecastDetailedDaysCount(dailyLength) {
  return Math.min(FORECAST_WEEK_SIZE, Math.max(0, dailyLength || 0));
}
function clampForecastDayIndex(index, dailyLength) {
  const maxIndex = getForecastDetailedDaysCount(dailyLength) - 1;
  if (maxIndex < 0) return 0;
  const parsed = Number(index);
  const safe = Number.isFinite(parsed) ? parsed : 0;
  return Math.min(Math.max(safe, 0), maxIndex);
}
function toNumber(val) {
  if (val == null || val === "") return null;
  const n = Number(String(val).replace(",", ".").replace("%", "").trim());
  return Number.isFinite(n) ? n : null;
}
function firstDefined(row, keys) {
  for (const k of keys) {
    if (row[k] != null && row[k] !== "") return row[k];
  }
  return null;
}
function formatMdFromIso(dateIso) {
  if (!dateIso) return null;
  const m = String(dateIso).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  return `${Number(m[2])}-${Number(m[3])}`;
}
function buildHourlyMaps(rows) {
  const byDate = {};
  const byDay = {};
  (rows || []).forEach((row) => {
    const key = formatMdFromIso(row.date);
    const day = Number(row.day);
    if (key) {
      if (!byDate[key]) byDate[key] = [];
      byDate[key].push(row);
    }
    if (Number.isFinite(day)) {
      if (!byDay[day]) byDay[day] = [];
      byDay[day].push(row);
    }
  });
  Object.values(byDate).forEach((arr) => arr.sort((a, b) => String(a.time || "").localeCompare(String(b.time || ""))));
  Object.values(byDay).forEach((arr) => arr.sort((a, b) => String(a.time || "").localeCompare(String(b.time || ""))));
  return { byDate, byDay };
}
function initForecastState(dailyForecast, hourlyForecast) {
  const daily = Array.isArray(dailyForecast) ? dailyForecast : [];
  const hourly = Array.isArray(hourlyForecast) ? hourlyForecast : [];
  window.forecastState = {
    daily,
    hourly,
    maps: buildHourlyMaps(hourly),
    activeDayIndex: 0,
    metric: "temperature",
  };
}
function getHourlyForDayIndex(index) {
  const state = window.forecastState || {};
  if (!Number.isFinite(index) || index < 0) return [];
  const day = (state.daily || [])[index] || {};
  const dateKey = day.date ? String(day.date) : null;
  if (dateKey && state.maps && state.maps.byDate && state.maps.byDate[dateKey]) return state.maps.byDate[dateKey];
  const dayId = index + 1;
  if (state.maps && state.maps.byDay && state.maps.byDay[dayId]) return state.maps.byDay[dayId];
  return [];
}
function averageWindForDay(index) {
  const rows = getHourlyForDayIndex(index);
  if (!rows.length) return null;
  const vals = rows.map((r) => toNumber(firstDefined(r, ["wind km/h", "wind_km_h", "wind"]))).filter((n) => n != null);
  if (!vals.length) return null;
  return vals.reduce((acc, n) => acc + n, 0) / vals.length;
}
function extractIconText(iconHtml) {
  if (!iconHtml) return "";
  const text = String(iconHtml);
  const match = text.match(/(?:alt|title)\s*=\s*"([^"]+)"/i);
  return match ? match[1] : "";
}
function mapConditionToGoogleIconSlug(conditionText) {
  const text = String(conditionText || "").toLowerCase();
  if (!text) return null;
  if (text.includes("thunder")) return "thunderstorms";
  if (text.includes("snow") || text.includes("flurr")) return "snow";
  if (text.includes("sleet") || text.includes("freez")) return "sleet";
  if (text.includes("drizzle")) return "drizzle";
  if (text.includes("shower")) return "showers";
  if (text.includes("rain")) return "rain";
  if (text.includes("fog") || text.includes("mist") || text.includes("haze")) return "fog";
  if (text.includes("wind")) return "windy";
  if (text.includes("mostly cloudy")) return "mostly_cloudy";
  if (text.includes("overcast") || text.includes("cloudy")) return "cloudy";
  if (text.includes("partly") || text.includes("mixed")) return "partly_cloudy";
  if (text.includes("mostly clear")) return "mostly_clear";
  if (text.includes("clear") || text.includes("sunny")) return "clear";
  return null;
}
function renderGoogleWeatherIcon(conditionText, fallbackIconHtml) {
  const slug = mapConditionToGoogleIconSlug(conditionText);
  if (!slug) return fallbackIconHtml || '<i class="fa-solid fa-cloud"></i>';
  const src = `${GOOGLE_WEATHER_ICON_BASE}${slug}.svg`;
  const alt = escapeHtml(conditionText || slug.replace(/_/g, " "));
  return `<img src="${src}" alt="${alt}" title="${alt}" loading="lazy">`;
}
function buildForecastCardView() {
  const state = window.forecastState || {};
  const daily = state.daily || [];
  if (!daily.length) return "<p>No forecast data</p>";
  const detailedDaysCount = getForecastDetailedDaysCount(daily.length);
  const active = clampForecastDayIndex(state.activeDayIndex, daily.length);
  state.activeDayIndex = active;
  const detailedDays = daily.slice(0, detailedDaysCount);
  const extendedDays = daily.slice(detailedDaysCount);
  const day = daily[active] || {};
  const hourly = getHourlyForDayIndex(active);
  const currentRow = hourly[0] || day;
  const tempNow = toNumber(firstDefined(currentRow, ["temp", "max", "min"]));
  const description = firstDefined(currentRow, ["obs", "pred"]) || "Forecast";
  const fallbackNowIcon = firstDefined(currentRow, ["icon"]) || day.icon || '<i class="fa-solid fa-cloud"></i>';
  const fallbackNowCondition = extractIconText(fallbackNowIcon) || "Forecast";
  const rawConditionNow = firstDefined(currentRow, ["obs", "pred"]) || firstDefined(day, ["obs", "pred"]) || fallbackNowCondition;
  const conditionNow = toNumber(rawConditionNow) != null ? fallbackNowCondition : rawConditionNow;
  const iconNow = renderGoogleWeatherIcon(conditionNow, fallbackNowIcon);
  const humidityNow = toNumber(firstDefined(currentRow, ["humidity %", "humidity"]));
  const windNow = toNumber(firstDefined(currentRow, ["wind km/h", "wind_km_h", "wind"]));
  const probNow = toNumber(firstDefined(currentRow, ["prob %", "probability", "prob"]));
  const nowTime = firstDefined(currentRow, ["time"]) || "--:--";
  const tempF = tempNow != null ? (tempNow * 9 / 5 + 32).toFixed(0) : "-";
  const cards = detailedDays.map((row, idx) => {
    const min = toNumber(firstDefined(row, ["min"]));
    const max = toNumber(firstDefined(row, ["max"]));
    const prec = toNumber(firstDefined(row, ["prec mm", "precipitation", "prec_mm"]));
    const prob = toNumber(firstDefined(row, ["prob %", "probability", "prob"]));
    const wind = averageWindForDay(idx);
    const fallbackCardIcon = row.icon || '<i class="fa-solid fa-cloud"></i>';
    const fallbackCardCondition = extractIconText(fallbackCardIcon) || "";
    const rawCardCondition = firstDefined(row, ["obs", "pred"]) || fallbackCardCondition;
    const cardCondition = toNumber(rawCardCondition) != null ? fallbackCardCondition : rawCardCondition;
    const cardIcon = renderGoogleWeatherIcon(cardCondition, fallbackCardIcon);
    return (
      `<button class="daily-card ${idx === active ? "active" : ""}" data-forecast-day-index="${idx}">` +
      `<p class="daily-card-date">${escapeHtml(String(row.weekday || "-"))} <span>${escapeHtml(String(row.date || "-"))}</span></p>` +
      `<div class="daily-card-icon">${cardIcon}</div>` +
      `<p class="daily-card-temp"><strong>${max != null ? max.toFixed(0) : "-"}°</strong> <span>${min != null ? min.toFixed(0) : "-"}°</span></p>` +
      `<p class="daily-card-meta">${prec != null ? prec.toFixed(1) : "-"} mm · ${prob != null ? prob.toFixed(0) : "-"}% · ${wind != null ? wind.toFixed(0) : "-"} km/h</p>` +
      `</button>`
    );
  }).join("");
  const extendedCards = extendedDays.map((row) => {
    const min = toNumber(firstDefined(row, ["min"]));
    const max = toNumber(firstDefined(row, ["max"]));
    const prec = toNumber(firstDefined(row, ["prec mm", "precipitation", "prec_mm"]));
    const prob = toNumber(firstDefined(row, ["prob %", "probability", "prob"]));
    const fallbackCardIcon = row.icon || '<i class="fa-solid fa-cloud"></i>';
    const fallbackCardCondition = extractIconText(fallbackCardIcon) || "";
    const rawCardCondition = firstDefined(row, ["obs", "pred"]) || fallbackCardCondition;
    const cardCondition = toNumber(rawCardCondition) != null ? fallbackCardCondition : rawCardCondition;
    const cardIcon = renderGoogleWeatherIcon(cardCondition, fallbackCardIcon);
    return (
      `<article class="extended-day-card">` +
      `<div class="extended-day-top">` +
      `<p class="extended-day-date">${escapeHtml(String(row.weekday || "-"))} <span>${escapeHtml(String(row.date || "-"))}</span></p>` +
      `<div class="extended-day-icon">${cardIcon}</div>` +
      `</div>` +
      `<p class="extended-day-temp"><strong>${max != null ? max.toFixed(0) : "-"}°</strong> / ${min != null ? min.toFixed(0) : "-"}°</p>` +
      `<p class="extended-day-meta">${prec != null ? prec.toFixed(1) : "-"} mm · ${prob != null ? prob.toFixed(0) : "-"}%</p>` +
      `<p class="extended-day-desc">${escapeHtml(String(cardCondition || "Forecast"))}</p>` +
      `</article>`
    );
  }).join("");
  return (
    `<section class="forecast-v2">` +
    `<header class="view-header forecast-header"><h2>Forecast</h2><p>Detalhe horário disponível nos primeiros 7 dias e resumo diário para o restante período.</p></header>` +
    `<section class="forecast-block forecast-block-hourly">` +
    `<header class="forecast-block-heading"><h3>Próximos ${detailedDaysCount} dias (hora a hora)</h3><p>Seleciona um dia para explorar o gráfico por hora.</p></header>` +
    `<header class="forecast-hero">` +
    `<div class="forecast-hero-left">` +
    `<div class="forecast-current-icon">${iconNow}</div>` +
    `<div>` +
    `<h2>${tempNow != null ? tempNow.toFixed(0) : "-"}<small>C | ${tempF}F</small></h2>` +
    `<p class="forecast-current-stats">Precipitation: ${probNow != null ? probNow.toFixed(0) : "-"}%</p>` +
    `<p class="forecast-current-stats">Humidity: ${humidityNow != null ? humidityNow.toFixed(0) : "-"}%</p>` +
    `<p class="forecast-current-stats">Wind: ${windNow != null ? windNow.toFixed(0) : "-"} km/h</p>` +
    `</div>` +
    `</div>` +
    `<div class="forecast-hero-right"><h3>Weather</h3><p>${escapeHtml(String(day.weekday || ""))} ${escapeHtml(String(day.date || ""))} ${escapeHtml(String(nowTime))}</p><p>${escapeHtml(String(description))}</p></div>` +
    `</header>` +
    `<div class="forecast-tabs">` +
    `<button class="forecast-tab ${state.metric === "temperature" ? "active" : ""}" data-forecast-metric="temperature">Temperature</button>` +
    `<button class="forecast-tab ${state.metric === "precipitation" ? "active" : ""}" data-forecast-metric="precipitation">Precipitation</button>` +
    `<button class="forecast-tab ${state.metric === "wind" ? "active" : ""}" data-forecast-metric="wind">Wind</button>` +
    `</div>` +
    `<section class="forecast-chart-panel"><canvas id="forecastHourlyChart" height="140"></canvas></section>` +
    `<div class="daily-cards-row">${cards}</div>` +
    `</section>` +
    (extendedDays.length
      ? (`<section class="forecast-block forecast-block-extended">` +
        `<header class="forecast-block-heading"><h3>Dias ${detailedDaysCount + 1} a ${daily.length} (resumo diário)</h3><p>Sem detalhe por hora, apenas tendência geral.</p></header>` +
        `<div class="extended-cards-row">${extendedCards}</div>` +
        `</section>`)
      : "") +
    `</section>`
  );
}
function renderForecastChart() {
  const state = window.forecastState || {};
  const canvas = document.getElementById("forecastHourlyChart");
  if (!canvas || !(window.Chart && state.daily && state.daily.length)) return;
  const cssVars = getComputedStyle(document.documentElement);
  const tickColor = (cssVars.getPropertyValue("--forecast-chart-tick") || "#8f949b").trim();
  const gridColor = (cssVars.getPropertyValue("--forecast-chart-grid") || "rgba(30, 41, 59, 0.08)").trim();
  const rows = getHourlyForDayIndex(state.activeDayIndex || 0);
  const labels = rows.map((r) => String(r.time || ""));
  let data = [];
  let color = "#e0ad00";
  let fillColor = "rgba(224, 173, 0, 0.08)";
  let title = "Temperature (C)";
  if (state.metric === "precipitation") {
    data = rows.map((r) => toNumber(firstDefined(r, ["prec mm", "precipitation", "prec_mm"])));
    color = "#4a88d9";
    fillColor = "rgba(74, 136, 217, 0.08)";
    title = "Precipitation (mm)";
  } else if (state.metric === "wind") {
    data = rows.map((r) => toNumber(firstDefined(r, ["wind km/h", "wind_km_h", "wind"])));
    color = "#8c8c8c";
    fillColor = "rgba(140, 140, 140, 0.08)";
    title = "Wind (km/h)";
  } else {
    data = rows.map((r) => toNumber(firstDefined(r, ["temp", "temperature"])));
  }
  if (!labels.length) {
    labels.push("No hourly data");
    data.push(null);
  }
  if (window.forecastHourlyChart instanceof Chart) window.forecastHourlyChart.destroy();
  window.forecastHourlyChart = new Chart(canvas.getContext("2d"), {
    type: "line",
    data: {
      labels,
      datasets: [{ label: title, data, borderColor: color, backgroundColor: fillColor, fill: true, pointRadius: 0, borderWidth: 1.5, tension: 0.34 }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false, drawBorder: false }, ticks: { autoSkip: true, maxTicksLimit: 8, color: tickColor, maxRotation: 0 } },
        y: { beginAtZero: state.metric !== "temperature", grid: { color: gridColor, drawBorder: false }, ticks: { color: tickColor, maxTicksLimit: 5 } },
      },
    },
  });
}
function renderForecastView(showcaseDiv) {
  if (!showcaseDiv) return;
  showcaseDiv.innerHTML = buildForecastCardView();
  renderForecastChart();
}

function escapeHtml(s) {
  if (s == null) return "";
  const t = String(s);
  return t
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildObservationsTable(observations) {
  if (!observations || observations.length === 0) {
    return '<div class="table-wrapper"><table class="custom-table"><tbody><tr><td>No observations</td></tr></tbody></table></div>';
  }
  const cols = ["date", "time", "temp", "wind dir", "wind km", "prec", "rad"];
  const thead = `<thead><tr><th colspan="${cols.length}"><h3 class="table-title">Observations</h3></th></tr><tr>${cols.map((c) => `<th>${c}</th>`).join("")}</tr></thead>`;
  const groups = [];
  let currentDate = null;
  let currentRows = [];
  observations.forEach((row) => {
    const date = row.date != null ? String(row.date) : "";
    if (date !== currentDate) {
      if (currentRows.length) groups.push({ date: currentDate, rows: currentRows });
      currentDate = date;
      currentRows = [];
    }
    currentRows.push(row);
  });
  if (currentRows.length) groups.push({ date: currentDate, rows: currentRows });

  const trs = [];
  groups.forEach((g) => {
    const dateCell = '<td rowspan="' + g.rows.length + '">' + escapeHtml(g.date) + "</td>";
    g.rows.forEach((row, i) => {
      const rest = ["time", "temp", "wind dir", "wind km", "prec", "rad"].map((c) => escapeHtml(row[c] != null ? String(row[c]) : ""));
      const tds = (i === 0 ? dateCell : "") + rest.map((v) => "<td>" + v + "</td>").join("");
      trs.push("<tr>" + tds + "</tr>");
    });
  });
  return `<div class="table-wrapper"><table class="custom-table">${thead}<tbody>${trs.join("")}</tbody></table></div>`;
}

function buildSimpleTable(rows, columns, title) {
  if (!rows || rows.length === 0) {
    return `<div class="table-wrapper"><table class="custom-table"><thead><tr><th colspan="${columns.length}"><h3 class="table-title">${escapeHtml(title)}</h3></th></tr></thead><tbody><tr><td>No data</td></tr></tbody></table></div>`;
  }
  const thead = `<thead><tr><th colspan="${columns.length}"><h3 class="table-title">${escapeHtml(title)}</h3></th></tr><tr>${columns.map((c) => `<th>${c}</th>`).join("")}</tr></thead>`;
  const tbody = rows
    .map((row) => "<tr>" + columns.map((col) => "<td>" + escapeHtml(row[col] != null ? String(row[col]) : "") + "</td>").join("") + "</tr>")
    .join("");
  return `<div class="table-wrapper"><table class="custom-table">${thead}<tbody>${tbody}</tbody></table></div>`;
}

function organizeWarnings(warnings, regions) {
  const areaMap = {};
  const areaInfoMap = {};
  const areaOrder = {};
  (regions || []).sort((a, b) => (a.acronym || "").localeCompare(b.acronym || "")).forEach((r, i) => {
    areaMap[r.idAreaAviso] = r.acronym || r.idAreaAviso;
    areaInfoMap[r.acronym || r.idAreaAviso] = (r.local || r.acronym) + " (" + (r.distance || "") + ")";
    areaOrder[r.acronym || r.idAreaAviso] = i + 1;
  });
  const grouped = {};
  (warnings || []).forEach((w) => {
    const startTime = w.startTime;
    const endTime = w.endTime;
    const startDay = startTime ? formatDateDM(startTime).split("-")[0] : "";
    const endDay = endTime ? formatDateDM(endTime) : "";
    const dateRange = startDay + "-" + endDay;
    const key = (w.awarenessTypeName || "") + "|" + dateRange;
    if (!grouped[key]) {
      grouped[key] = {
        warning_type: w.awarenessTypeName,
        date_range: dateRange,
        color: w.awarenessLevelID || "",
        icon: WARNING_ICONS[w.awarenessTypeName] || "fa-triangle-exclamation",
        level: w.awarenessLevelID,
        start_time: formatDateDMMM(startTime),
        end_time: formatDateDMMM(endTime),
        areas: {},
        details: {},
      };
    }
    (w.idsAreaAviso || []).forEach((areaId) => {
      const acr = areaMap[areaId] || areaId;
      const full = areaInfoMap[acr] || acr;
      grouped[key].areas[acr] = full;
      if (!grouped[key].details[full]) grouped[key].details[full] = [];
      grouped[key].details[full].push((w.text || "").trim());
    });
  });
  const sorted = Object.values(grouped).sort((a, b) => (a.date_range || "").localeCompare(b.date_range || ""));
  return { grouped: sorted, areaOrder };
}

function buildWarningsTable(warningsData, regions) {
  const warnings = (warningsData && warningsData.warnings) || [];
  if (warnings.length === 0) {
    return '<div class="warning-timeline"><p>No active warnings</p></div>';
  }
  const { grouped, areaOrder } = organizeWarnings(warnings, regions);
  let tableHtml =
    '<table class="custom-table"><thead><tr class="hover:bg-gray-200 dark:hover:bg-gray-700 transition"><th colspan="4"><h3 class="table-title">Warnings</h3></th></tr></thead><tbody>';
  let modalHtml = "";
  grouped.forEach((g) => {
    const safeType = (g.warning_type || "").replace(/ /g, "-").replace(/\//g, "-");
    const safeRange = (g.date_range || "").replace(/\//g, "-");
    const modalId = "modal-" + safeType + "-" + safeRange;
    modalHtml +=
      `<dialog id="${modalId}" class="modal"><article><header><a href="#" class="close" aria-label="Close" onclick="closeModal('${modalId}', event)"></a><h3>${escapeHtml(g.warning_type || "")}</h3></header>` +
      `<p><strong>alert level:</strong> ${escapeHtml(g.level || "")}<br><strong>start:</strong> ${escapeHtml(g.start_time || "")}<br><strong>end:</strong> ${escapeHtml(g.end_time || "")}</p><hr>` +
      Object.entries(g.details || {})
        .map(([area, texts]) => "<p><strong>" + escapeHtml(area) + "</strong><br>" + (texts.filter(Boolean).join("<br>") || "") + "</p>")
        .join("") +
      `<footer><button onclick="closeModal('${modalId}', event)">Close</button></footer></article></dialog>`;
    const sortedAreas = Object.keys(g.areas || {}).sort((a, b) => (areaOrder[a] || 99) - (areaOrder[b] || 99));
    const areasDisplay = sortedAreas.map((acr) => '<span data-tooltip="' + escapeHtml(g.areas[acr] || acr) + '">' + escapeHtml(acr) + "</span>").join(", ");
    const levelIcon = getWarningLevelIcon(g.level);
    tableHtml +=
      `<tr class="${g.color} hover:bg-gray-200 dark:hover:bg-gray-700 transition">` +
      `<td><i class="fa-solid ${g.icon}"></i></td><td class="level">${levelIcon}</td>` +
      `<td><a href="#" onclick="openModal('${modalId}', event)">${escapeHtml(g.date_range)}</a></td><td>${areasDisplay}</td></tr>`;
  });
  tableHtml += "</tbody></table>" + modalHtml;
  return '<div class="warning-timeline">' + tableHtml + "</div>";
}

function buildObservationsPage(observations, evapotranspiration, precipitation) {
  const obsTable = buildObservationsTable(observations);
  const evapoTable = buildSimpleTable(evapotranspiration, ["period", "min", "max", "mean", "range", "std"], "Evaporatranspiration");
  const precipCols = precipitation && precipitation[0] ? Object.keys(precipitation[0]).filter((k) => k !== "_id") : ["period"];
  const precipTable = buildSimpleTable(precipitation, precipCols, "Precipitation");
  const lastObs = observations && observations.length ? observations[observations.length - 1] : null;
  const lastObsText = lastObs ? `${escapeHtml(lastObs.date || "-")} ${escapeHtml(lastObs.time || "")}` : "n/a";
  return (
    `<section class="obs-layout">` +
    `<header class="view-header"><h2>Observacoes</h2><p>Escolha um conjunto de dados</p></header>` +
    `<div class="obs-tabs" role="tablist" aria-label="Observation data tabs">` +
    `<button class="obs-tab active" data-tab="observations" role="tab" aria-selected="true" aria-controls="data-table-observations">Observations</button>` +
    `<button class="obs-tab" data-tab="evapotranspiration" role="tab" aria-selected="false" aria-controls="data-table-evapotranspiration">Evapotranspiration</button>` +
    `<button class="obs-tab" data-tab="precipitation" role="tab" aria-selected="false" aria-controls="data-table-precipitation">Precipitation</button>` +
    `</div>` +
    `<section id="data-table-observations" class="data-table obs-panel is-active" role="tabpanel">` +
    `<p class="obs-summary">Ultima atualizacao: <strong>${lastObsText}</strong> | Registos: <strong>${observations.length}</strong></p>` +
    `${obsTable}` +
    `</section>` +
    `<section id="data-table-evapotranspiration" class="data-table obs-panel" role="tabpanel" hidden>` +
    `<article class="chart-card"><h3>Evapotranspiration</h3><div id="evapoChartContainer"><canvas id="evapoChart" width="800" height="400"></canvas></div></article>` +
    `${evapoTable}` +
    `</section>` +
    `<section id="data-table-precipitation" class="data-table obs-panel" role="tabpanel" hidden>${precipTable}</section>` +
    `</section>`
  );
}

function buildDashboardPage(coldHours, missingEntries, warningsData, regions) {
  const coldTable = buildSimpleTable(coldHours, ["period", "cold"], "Cold Hours");
  const missingTable = buildSimpleTable(missingEntries, ["period", "missing"], "Missing Entries");
  const warnSection = buildWarningsTable(warningsData, regions);
  return (
    `<section class="dashboard-layout">` +
    `<header class="view-header"><h2>Dashboard</h2><p>Resumo rapido de indicadores e avisos</p></header>` +
    `<div class="dashboard-grid">` +
    `<article class="dashboard-card">${coldTable}</article>` +
    `<article class="dashboard-card">${missingTable}</article>` +
    `<article class="dashboard-card dashboard-card-wide">${warnSection}</article>` +
    `</div>` +
    `</section>`
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const showcaseDiv = document.getElementById("showcase");
  if (!showcaseDiv) return;

  const dataNames = [
    "observations",
    "evapotranspiration",
    "precipitation",
    "cold_hours",
    "missing_entries",
    "warnings",
    "regions",
    "forecast",
    "forecast_hourly",
  ];

  function fetchDataFile(name) {
    const urls = [DATA_BASE + name + ".json", DATA_BASE_FALLBACK + name + ".json"];
    return (async function () {
      for (const url of urls) {
        try {
          const r = await fetch(url, { cache: "no-store" });
          if (r.ok) return await r.json();
        } catch (_) {}
      }
      return null;
    })();
  }

  Promise.all(
    dataNames.map((name) => fetchDataFile(name))
  ).then(([observations, evapotranspiration, precipitation, cold_hours, missing_entries, warnings, regions, forecast, forecast_hourly]) => {
    const loadedCount = [observations, evapotranspiration, precipitation, cold_hours, missing_entries, warnings, regions, forecast, forecast_hourly]
      .filter((x) => x != null).length;
    if (loadedCount === 0) {
      showcaseDiv.innerHTML =
        '<article class="dashboard-card"><h3>Data load failed</h3><p>No JSON data could be loaded. Serve <code>dist/</code> as the web root, or verify <code>data/*.json</code> paths.</p></article>';
      return;
    }
    initForecastState(forecast || [], forecast_hourly || []);
    window.evapotranspirationData = Array.isArray(evapotranspiration) ? evapotranspiration : [];
    window.observationsTable = buildObservationsPage(observations || [], evapotranspiration || [], precipitation || []);
    window.dashboardTable = buildDashboardPage(cold_hours || [], missing_entries || [], warnings || {}, regions || []);

    setupThemeToggle();
    setupModalHandlers();
    setupNavigation();
    setupObservationsTabHandlers(showcaseDiv);
    setupForecastHandlers(showcaseDiv);

    updateNavbarText();
    updateShowcase(window.location.hash.replace("#", "") || "forecast");
  });
});

function setupNavigation() {
  const showcaseDiv = document.getElementById("showcase");
  const pages = ["forecast", "observations", "dashboard"];

  pages.forEach((page) => {
    const btn = document.getElementById("btn-" + page);
    if (btn) btn.addEventListener("click", () => updateShowcase(page));
  });

  window.addEventListener("hashchange", () => {
    const page = window.location.hash.replace("#", "") || "forecast";
    updateShowcase(page);
  });

  window.addEventListener("resize", () => {
    if (window.location.hash.includes("forecast")) updateShowcase("forecast");
    updateNavbarText();
  });
}

function updateShowcase(page) {
  const showcaseDiv = document.getElementById("showcase");
  if (!showcaseDiv) return;
  showcaseDiv.classList.remove("showcase-forecast", "showcase-observations", "showcase-dashboard");
  showcaseDiv.classList.add("showcase-" + page);
  const tableMap = {
    observations: window.observationsTable,
    dashboard: window.dashboardTable,
  };
  if (page === "forecast") {
    renderForecastView(showcaseDiv);
  } else {
    showcaseDiv.innerHTML = tableMap[page] || "<p>Page not found</p>";
  }
  window.location.hash = page;
  updateButtonStyles(page);
  attachModalCloseListeners();
}

function updateButtonStyles(page) {
  document.querySelectorAll("nav a[data-page]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.page === page);
  });
}

function updateNavbarText() {
  const iconMap = {
    forecast: '<i class="fa-solid fa-cloud-sun-rain"></i>',
    observations: '<i class="fa-solid fa-eye"></i>',
    dashboard: '<i class="fa-solid fa-chart-line"></i>',
  };
  ["forecast", "observations", "dashboard"].forEach((key) => {
    const btn = document.getElementById("btn-" + key);
    if (btn) btn.innerHTML = window.innerWidth <= 1025 ? iconMap[key] : key;
  });
}

function setupThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

function setupModalHandlers() {
  window.openModal = function (modalId, event) {
    if (event) event.preventDefault();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
      document.body.classList.add("modal-open");
    }
  };
  window.closeModal = function (modalId, event) {
    if (event) event.preventDefault();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.close();
      document.body.classList.remove("modal-open");
    }
  };
  const observer = new MutationObserver(() => attachModalCloseListeners());
  observer.observe(document.body, { childList: true, subtree: true });
}

function attachModalCloseListeners() {
  document.querySelectorAll("dialog").forEach((modal) => {
    modal.removeEventListener("click", handleModalClick);
    modal.addEventListener("click", handleModalClick);
  });
}

function handleModalClick(event) {
  if (event.target === event.currentTarget) {
    event.currentTarget.close();
    document.body.classList.remove("modal-open");
  }
}

function loadEvapotranspirationChart() {
  if (!window.evapotranspirationData || window.evapotranspirationData.length === 0) return;
  const canvas = document.getElementById("evapoChart");
  if (!canvas) return;
  createEvapoChart(window.evapotranspirationData);
}

function setupObservationsTabHandlers(showcaseDiv) {
  if (!showcaseDiv) return;
  showcaseDiv.addEventListener("click", function (e) {
    const tab = e.target.closest("button[data-tab]");
    if (!tab) return;
    e.preventDefault();
    const tableId = tab.getAttribute("data-tab");
    const tabs = showcaseDiv.querySelectorAll(".obs-tab");
    const panels = showcaseDiv.querySelectorAll(".obs-panel");
    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    panels.forEach((panel) => {
      panel.classList.remove("is-active");
      panel.setAttribute("hidden", "");
    });
    const target = showcaseDiv.querySelector("#data-table-" + tableId);
    if (target) {
      target.classList.add("is-active");
      target.removeAttribute("hidden");
    }
    if (tableId === "evapotranspiration") loadEvapotranspirationChart();
  });
}

function setupForecastHandlers(showcaseDiv) {
  if (!showcaseDiv) return;
  showcaseDiv.addEventListener("click", function (e) {
    const dayBtn = e.target.closest("button[data-forecast-day-index]");
    if (dayBtn) {
      const state = window.forecastState;
      if (!state) return;
      const idx = Number(dayBtn.getAttribute("data-forecast-day-index"));
      if (!Number.isFinite(idx)) return;
      const maxDetailedIndex = getForecastDetailedDaysCount((state.daily || []).length) - 1;
      if (idx < 0 || idx > maxDetailedIndex) return;
      state.activeDayIndex = idx;
      renderForecastView(showcaseDiv);
      return;
    }

    const metricBtn = e.target.closest("button[data-forecast-metric]");
    if (metricBtn) {
      const state = window.forecastState;
      if (!state) return;
      state.metric = metricBtn.getAttribute("data-forecast-metric") || "temperature";
      renderForecastView(showcaseDiv);
    }
  });
}

function createEvapoChart(data) {
  if (!Array.isArray(data) || data.length === 0) return;
  const canvas = document.getElementById("evapoChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (window.evapoChart instanceof Chart) window.evapoChart.destroy();

  const filtered = data.filter((row) => row.max !== 0 && row.min !== 0);
  const labels = filtered.map((row) => row.period);
  const maxData = filtered.map((row) => row.max);
  const minData = filtered.map((row) => row.min);
  const meanData = filtered.map((row) => row.mean);

  window.evapoChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        { label: "Mean", data: meanData, borderColor: "blue", pointBackgroundColor: "blue", borderWidth: 1, pointRadius: 2, fill: false },
        { label: "Max", data: maxData, borderColor: "red", pointBackgroundColor: "red", borderWidth: 1, pointRadius: 2, fill: false },
        { label: "Min", data: minData, borderColor: "green", pointBackgroundColor: "green", borderWidth: 1, pointRadius: 2, fill: false },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: true, text: "Day" },
          ticks: { maxRotation: 0, minRotation: 0, font: { size: 12 } },
          grid: { color: "rgba(200, 200, 200, 0.3)" },
        },
        y: {
          title: { display: true, text: "Evapotranspiration (mm)" },
          beginAtZero: true,
          suggestedMin: minData.length ? Math.min(...minData) - 0.5 : 0,
          suggestedMax: maxData.length ? Math.max(...maxData) + 0.5 : 5,
          ticks: { stepSize: 0.5, font: { size: 12 } },
          grid: { color: "rgba(150, 150, 150, 0.3)" },
        },
      },
      plugins: {
        legend: { position: "top", labels: { font: { size: 12 } } },
        tooltip: {
          callbacks: { label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(2)} mm` },
        },
      },
    },
  });
}
