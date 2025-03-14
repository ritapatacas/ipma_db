document.addEventListener("DOMContentLoaded", function () {
  const showcaseDiv = document.getElementById("showcase");

  const btnForecast = document.getElementById("btn-forecast");
  const btnObservations = document.getElementById("btn-observations");
  const btnDashboard = document.getElementById("btn-dashboard");
  const allButtons = [btnForecast, btnObservations, btnDashboard];

  // TOGGLE THEME
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

  // Attach event listeners
  btnForecast.addEventListener("click", () => updateShowcase("forecast"));
  btnObservations.addEventListener("click", () => updateShowcase("observations"));
  btnDashboard.addEventListener("click", () => updateShowcase("dashboard"));

  window.addEventListener("hashchange", loadPageFromHash);
  window.addEventListener("resize", () => {
    if (window.location.hash.includes("forecast")) {
      updateShowcase("forecast"); // Refresh the forecast table on resize
    }
    updateNavbarText();
  });

  updateNavbarText();
  loadPageFromHash();
});
