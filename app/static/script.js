document.addEventListener("DOMContentLoaded", function () {
  const showcaseDiv = document.getElementById("showcase");

  setupThemeToggle();
  setupModalHandlers();
  setupNavigation();

  setupDropdownHandlers();
  const observationLinks = document.querySelectorAll('[data-table]');
  const allDataTables = document.querySelectorAll('.data-table');
  const dropdownLabel = document.getElementById('dropdown-label');

  observationLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const tableId = this.dataset.table;
      const tableName = this.textContent.trim();

      // Atualiza visibilidade das tabelas
      allDataTables.forEach(table => table.style.display = 'none');
      document.getElementById(`data-table-${tableId}`).style.display = 'block';

      // Atualiza o texto do summary
      dropdownLabel.textContent = tableName;
    });
  });

  

  function setupNavigation() {
    const pages = ["forecast", "observations", "dashboard"];

    pages.forEach((page) => {
      const btn = document.getElementById(`btn-${page}`);
      if (btn) {
        btn.addEventListener("click", () => updateShowcase(page));
      }
    });

    window.addEventListener("hashchange", () => {
      const page = window.location.hash.replace("#", "") || "forecast";
      updateShowcase(page);
    });

    window.addEventListener("resize", () => {
      if (window.location.hash.includes("forecast")) updateShowcase("forecast");
      updateNavbarText();
    });

    updateNavbarText();
    updateShowcase(window.location.hash.replace("#", "") || "forecast");
  }

  function updateShowcase(page) {
    const tableMap = {
      forecast: window.innerWidth <= 1025 ? window.forecastTableMobile : window.forecastTable,
      observations: window.observationsTable,
      dashboard: window.dashboardTable,
    };

    showcaseDiv.innerHTML = tableMap[page] || "<p>Page not found</p>";
    window.location.hash = page;
    updateButtonStyles(page);
    attachModalCloseListeners();

    if (page === "observations") {
      loadEvapotranspirationChart();
    }
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
      const btn = document.getElementById(`btn-${key}`);
      if (btn) {
        btn.innerHTML = window.innerWidth <= 1025 ? iconMap[key] : key;
      }
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
      } else {
        console.error("Modal not found:", modalId);
      }
    };

    window.closeModal = function (modalId, event) {
      if (event) event.preventDefault();
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.close();
        document.body.classList.remove("modal-open");
      } else {
        console.error("Modal not found:", modalId);
      }
    };

    const observer = new MutationObserver(() => attachModalCloseListeners());
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function attachModalCloseListeners() {
    document.querySelectorAll("dialog").forEach((modal) => {
      modal.removeEventListener("click", handleModalClick); // prevent duplicates
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
    if (!window.evapotranspirationData || window.evapotranspirationData.length === 0) {
      console.warn("⚠️ No evapotranspiration data available.");
      return;
    }

    const canvas = document.getElementById("evapoChart");
    if (!canvas) {
      console.error("❌ Canvas #evapoChart not found.");
      return;
    }

    createEvapoChart(window.evapotranspirationData);
  }

  function showDataTable(type) {
  const tables = document.querySelectorAll('.data-table');
  tables.forEach(table => table.style.display = 'none');

  const target = document.getElementById(`data-table-${type}`);
  if (target) {
    target.style.display = 'block';
  }
}

function setupDropdownHandlers() {
  const dropdownLinks = document.querySelectorAll('.dropdown a[data-table]');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const type = link.getAttribute('data-table');
      if (type) showDataTable(type);
    });
  });
}



  window.addEventListener("evapotranspirationLoaded", () => {
    console.log("🚀 Evapotranspiration data loaded, drawing chart...");
    loadEvapotranspirationChart();
  });
  
});



function createEvapoChart(data) {
  if (!Array.isArray(data) || data.length === 0) return;

  const canvas = document.getElementById("evapoChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (window.evapoChart instanceof Chart) window.evapoChart.destroy();

  const filtered = data.filter(row => row.max !== 0 && row.min !== 0);
  const isHourly = filtered.some(row => row.period.match(/^\d{1,2}h$/));

  const labels = filtered.map(row => row.period);
  const maxData = filtered.map(row => row.max);
  const minData = filtered.map(row => row.min);
  const meanData = filtered.map(row => row.mean);

  window.evapoChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Mean",
          data: meanData,
          borderColor: "blue",
          pointBackgroundColor: "blue",
          borderWidth: 1,
          pointRadius: 2,
          fill: false,
        },
        {
          label: "Max",
          data: maxData,
          borderColor: "red",
          pointBackgroundColor: "red",
          borderWidth: 1,
          pointRadius: 2,
          fill: false,
        },
        {
          label: "Min",
          data: minData,
          borderColor: "green",
          pointBackgroundColor: "green",
          borderWidth: 1,
          pointRadius: 2,
          fill: false,
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: true, text: isHourly ? "Hour" : "Day" },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            font: { size: 12 },
          },
          grid: {
            color: "rgba(200, 200, 200, 0.3)",
          },
        },
        y: {
          title: { display: true, text: "Evapotranspiration (mm)" },
          beginAtZero: true,
          suggestedMin: Math.min(...minData) - 0.5,
          suggestedMax: Math.max(...maxData) + 0.5,
          ticks: {
            stepSize: 0.5,
            font: { size: 12 },
          },
          grid: {
            color: "rgba(150, 150, 150, 0.3)",
          },
        }
      },
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: { size: 12 }
          }
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) =>
              `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(2)} mm`,
          }
        }
      }
    }
  });
}
