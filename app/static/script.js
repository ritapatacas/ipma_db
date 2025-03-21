document.addEventListener("DOMContentLoaded", function () {
  const showcaseDiv = document.getElementById("showcase");

  const btnForecast = document.getElementById("btn-forecast");
  const btnObservations = document.getElementById("btn-observations");
  const btnDashboard = document.getElementById("btn-dashboard");

  // ✅ TOGGLE THEME
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  function getForecastTable() {
    return window.innerWidth <= 1025 ? window.forecastTableMobile : window.forecastTable;
  }

  function updateShowcase(page) {
    let content;
    switch (page) {
      case "forecast":
        content = getForecastTable();
        break;
      case "observations":
        content = window.observationsTable;
        break;
      case "dashboard":
        content = window.dashboardTable;
        break;
      default:
        content = "<p>Page not found</p>";
    }

    showcaseDiv.innerHTML = content;
    window.location.hash = page;
    updateButtonStyles(page);

    // ✅ Load chart only when switching to "observations"
    if (page === "observations") {
      loadEvapotranspirationChart();
    }
  }

  function updateButtonStyles(page) {
    document.querySelectorAll("nav a[data-page]").forEach((btn) => {
      btn.dataset.page === page
        ? btn.classList.add("active")
        : btn.classList.remove("active");
    });
  }

  function updateNavbarText() {
    const width = window.innerWidth;
    if (btnForecast && btnObservations && btnDashboard) {
      if (width <= 1025) {
        btnForecast.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>';
        btnObservations.innerHTML = '<i class="fa-solid fa-eye"></i>';
        btnDashboard.innerHTML = '<i class="fa-solid fa-chart-line"></i>';
      } else {
        btnForecast.textContent = "forecast";
        btnObservations.textContent = "observations";
        btnDashboard.textContent = "dashboard";
      }
    }
  }

  function loadPageFromHash() {
    const page = window.location.hash.replace("#", "") || "forecast";
    updateShowcase(page);
  }

  window.addEventListener("hashchange", loadPageFromHash);

  // ✅ LISTEN FOR DATA LOAD EVENT FROM `tables.js.jinja`
  window.addEventListener("evapotranspirationLoaded", () => {
    console.log("🚀 Evapotranspiration data is ready! Creating chart...");
    loadEvapotranspirationChart();
  });

  function loadEvapotranspirationChart() {
    if (!window.evapotranspirationData || window.evapotranspirationData.length === 0) {
      console.warn("⚠️ No evapotranspiration data available. Chart will not be created.");
      return;
    }

    let canvas = document.getElementById("evapoChart");
    if (!canvas) {
      console.error("❌ Chart canvas #evapoChart not found. Skipping chart creation.");
      return;
    }

    console.log("✅ Data & canvas found! Creating chart...");
    createEvapoChart(window.evapotranspirationData);
  }

  updateNavbarText();
  loadPageFromHash();
});

function createEvapoChart(data) {
  console.log("📊 Creating Chart with Data:", data);

  if (!Array.isArray(data) || data.length === 0) {
    console.error("⚠️ Chart data is empty or invalid.");
    return;
  }

  let canvas = document.getElementById("evapoChart");
  if (!canvas) {
    console.error("⚠️ Canvas element #evapoChart not found!");
    return;
  }

  let ctx = canvas.getContext("2d");

  // ✅ Destroy old Chart if it exists
  if (window.evapoChart instanceof Chart) {
    console.log("🛑 Destroying existing Chart.js instance...");
    window.evapoChart.destroy();
  }

  // ✅ Clean Data: Remove anomalies where max or min values are 0
  let filteredData = data.filter(row => row.maximum !== 0 && row.minimum !== 0);

  // ✅ Check if data is **hourly or daily** based on period format
  let isHourly = filteredData.some(row => row.period.match(/^\d{1,2}h$/));
  
  // ✅ Format X-Axis Labels (Sort by Date & Time)
  let labels = filteredData.map(row => row.period);
  let meanData = filteredData.map(row => row.mean);
  let maxData = filteredData.map(row => row.maximum);
  let minData = filteredData.map(row => row.minimum);

  // ✅ Improve Chart Styling
  window.evapoChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Mean",
          data: meanData,
          borderColor: "blue",
          backgroundColor: "rgba(0, 0, 255, 0.2)",
          borderWidth: 1,   // Thicker lines
          pointRadius: 2,   // Bigger dots
          pointBackgroundColor: "blue",
          pointHoverRadius: 6,
          fill: false,
        },
        {
          label: "Max",
          data: maxData,
          borderColor: "red",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          borderWidth: 1,
          pointRadius: 2,
          pointBackgroundColor: "red",
          pointHoverRadius: 6,
          fill: false,
        },
        {
          label: "Min",
          data: minData,
          borderColor: "green",
          backgroundColor: "rgba(0, 255, 0, 0.2)",
          borderWidth: 1,
          pointRadius: 2,
          pointBackgroundColor: "green",
          pointHoverRadius: 6,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: true, text: isHourly ? "Hour of the Day" : "day", font: { size: 1 } },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            autoSkip: true,
            font: { size: 12 },
            callback: function(value, index, values) {
              return isHourly ? `${labels[index]}h` : labels[index]; // Add 'h' for hourly data
            },
          },
          grid: {
            color: "rgba(200, 200, 200, 0.3)",
          },
        },
        y: {
          title: { display: true, text: "(mm)", font: { size: 12 } },
          beginAtZero: true,
          suggestedMin: Math.min(...minData) - 0.5,
          suggestedMax: Math.max(...maxData) + 0.5,
          ticks: {
            stepSize: 0.5, // Ensures better readability on the Y-axis
            font: { size: 12 },
          },
          grid: {
            color: "rgba(150, 150, 150, 0.3)", // Softer grid lines
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            boxWidth: 15,
            font: { size: 12 },
          },
        },
        tooltip: {
          enabled: true,
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(2)} mm`;
            },
          },
        },
      },
    },
  });

  console.log("✅ Chart successfully created!");
}
