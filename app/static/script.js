document.addEventListener("DOMContentLoaded", function () {
  const btnThemeToggle = document.getElementById('theme-toggle');
  const showcaseDiv = document.getElementById('showcase');
  
  const btnForecast = document.getElementById('btn-forecast');
  const btnObservations = document.getElementById('btn-observations');
  const btnDashboard = document.getElementById('btn-dashboard');

  // TOGGLE THEME
  btnThemeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // UPDATE SHOWCASE
  btnForecast.addEventListener('click', () => {
    showcaseDiv.innerHTML = window.forecastTable;
  });

  btnObservations.addEventListener('click', () => {
    showcaseDiv.innerHTML = window.observationsTable;
  });

  btnDashboard.addEventListener('click', () => {
    showcaseDiv.innerHTML = window.missingTable;
  });
});
