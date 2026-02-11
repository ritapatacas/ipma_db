const DATA_BASE = "data/";

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

function buildForecastTable(forecast, mobile) {
  if (!forecast || forecast.length === 0) {
    return '<div class="table-wrapper"><table class="custom-table"><tbody><tr><td>No forecast data</td></tr></tbody></table></div>';
  }
  const viewClass = mobile ? "mobile-view" : "desktop-view";
  const num = num => (num != null && !isNaN(num) ? Number(num).toFixed(2) : "-");
  const rows = forecast.slice(0, mobile ? 7 : forecast.length).map((row) => {
    const date = row.date != null ? String(row.date) : "-";
    const weekday = row.weekday != null ? String(row.weekday) : "-";
    const day = mobile
      ? (date.match(/-(\d+)$/) ? date.match(/-(\d+)$/)[1] : date) + " (" + weekday + ")"
      : "(" + date + ") " + weekday;
    const min = num(row.min);
    const max = num(row.max);
    const prec = row["prec mm"] != null ? num(row["prec mm"]) : "-";
    const prob = row["prob %"] != null ? String(row["prob %"]) : "-";
    const pred = row.pred != null ? String(row.pred) : "-";
    const obs = row.obs != null ? String(row.obs) : "-";
    const icon = row.icon != null ? String(row.icon) : "";
    if (mobile) {
      return `<tr><td>${escapeHtml(day)}</td><td>${min}</td><td>${max}</td><td>${prec}</td><td>${prob}</td><td>${obs}</td></tr>`;
    }
    return `<tr><td>${escapeHtml(day)}</td><td class="forecast-icon">${icon}</td><td>${min}</td><td>${max}</td><td>${prec}</td><td>${prob}</td><td>${escapeHtml(pred)}</td></tr>`;
  });
  const headers = mobile
    ? "<tr><th>day</th><th>min</th><th>max</th><th>prec mm</th><th>prob %</th><th>obs</th></tr>"
    : "<tr><th>day</th><th>icon</th><th>min</th><th>max</th><th>prec mm</th><th>prob %</th><th>pred</th></tr>";
  const table = `<table class="custom-table ${viewClass}"><thead>${headers}</thead><tbody>${rows.join("")}</tbody></table>`;
  const iframe =
    '<iframe src="https://www.meteoblue.com/en/weather/maps/widget/troviscais-fundeiros_portugal_2262489?windAnimation=1&gust=1&satellite=1&cloudsAndPrecipitation=1&temperature=1&sunshine=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=10&autowidth=auto" frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 550px; height: 350px"></iframe>';
  const iframeMobile =
    '<iframe src="https://www.meteoblue.com/en/weather/maps/widget/troviscais-fundeiros_portugal_2262489?windAnimation=1&gust=1&satellite=1&cloudsAndPrecipitation=1&temperature=1&sunshine=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=10&autowidth=auto" frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 80%; height: 550px"></iframe>';
  return `<div class="table-wrapper ${viewClass}">${table}</div>${iframe}<div></div>`;
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
  return `<div class="table-wrapper mobile-view"><table class="custom-table">${thead}<tbody>${tbody}</tbody></table></div>`;
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
  return (
    `<details class="dropdown custom-dropdown" id="observations-dropdown"><summary id="dropdown-label">Select</summary><ul>` +
    `<li><a href="#" data-table="observations">Observations</a></li>` +
    `<li><a href="#" data-table="evapotranspiration">Evapotranspiration</a></li>` +
    `<li><a href="#" data-table="precipitation">Precipitation</a></li>` +
    `</ul></details>` +
    `<div id="data-table-observations" class="data-table"><div class="table-wrapper">${obsTable}</div></div>` +
    `<div id="data-table-evapotranspiration" class="data-table" style="display:none;">${evapoTable}<div id="evapoChartContainer"><canvas id="evapoChart" width="800" height="400"></canvas></div></div>` +
    `<div id="data-table-precipitation" class="data-table" style="display:none;">${precipTable}</div>`
  );
}

function buildDashboardPage(coldHours, missingEntries, warningsData, regions) {
  const coldTable = buildSimpleTable(coldHours, ["period", "cold"], "Cold Hours");
  const missingTable = buildSimpleTable(missingEntries, ["period", "missing"], "Missing Entries");
  const warnSection = buildWarningsTable(warningsData, regions);
  return (
    `<div class="table-container"><div class="table-wrapper">${coldTable}</div>` +
    `<div class="table-wrapper">${missingTable}</div>${warnSection}</div>`
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const showcaseDiv = document.getElementById("showcase");
  if (!showcaseDiv) return;

  const dataUrls = [
    "observations",
    "evapotranspiration",
    "precipitation",
    "cold_hours",
    "missing_entries",
    "warnings",
    "regions",
    "forecast",
  ].map((name) => DATA_BASE + name + ".json");

  Promise.all(
    dataUrls.map((url) =>
      fetch(url)
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null)
    )
  ).then(([observations, evapotranspiration, precipitation, cold_hours, missing_entries, warnings, regions, forecast]) => {
    window.forecastTable = buildForecastTable(forecast, false);
    window.forecastTableMobile = buildForecastTable(forecast, true);
    window.evapotranspirationData = Array.isArray(evapotranspiration) ? evapotranspiration : [];
    window.observationsTable = buildObservationsPage(observations || [], evapotranspiration || [], precipitation || []);
    window.dashboardTable = buildDashboardPage(cold_hours || [], missing_entries || [], warnings || {}, regions || []);

    setupThemeToggle();
    setupModalHandlers();
    setupNavigation();
    setupDropdownHandlers(showcaseDiv);

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
  const forecastHtml = window.innerWidth <= 1025 ? window.forecastTableMobile : window.forecastTable;
  const tableMap = {
    forecast: forecastHtml,
    observations: window.observationsTable,
    dashboard: window.dashboardTable,
  };
  showcaseDiv.innerHTML = tableMap[page] || "<p>Page not found</p>";
  window.location.hash = page;
  updateButtonStyles(page);
  attachModalCloseListeners();
  if (page === "observations") loadEvapotranspirationChart();
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

function setupDropdownHandlers(showcaseDiv) {
  if (!showcaseDiv) return;
  showcaseDiv.addEventListener("click", function (e) {
    const link = e.target.closest("a[data-table]");
    if (!link) return;
    e.preventDefault();
    e.stopPropagation();
    const tableId = link.getAttribute("data-table");
    const tableName = link.textContent.trim();
    showcaseDiv.querySelectorAll(".data-table").forEach((t) => (t.style.display = "none"));
    const target = showcaseDiv.querySelector("#data-table-" + tableId);
    if (target) target.style.display = "block";
    const label = showcaseDiv.querySelector("#dropdown-label");
    if (label) label.textContent = tableName;
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
