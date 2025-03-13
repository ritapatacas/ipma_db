document.addEventListener("DOMContentLoaded", function () {
  const btnThemeToggle = document.getElementById('theme-toggle');
  const showcaseDiv = document.getElementById('showcase');
  
  const btnForecast = document.getElementById('btn-forecast');
  const btnObservations = document.getElementById('btn-observations');
  const btnDashboard = document.getElementById('btn-dashboard');
  const allButtons = [btnForecast, btnObservations, btnDashboard];

  // TOGGLE THEME
  btnThemeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Função para atualizar o showcase e o URL
  function updateShowcase(content, page) {
    showcaseDiv.innerHTML = content;
    history.pushState({ page: page }, '', `?p=${page}`);
    updateButtonStyles(page);
  }

  // Função para definir o botão "ativo" com underline via aria-current
  function updateButtonStyles(page) {
    document.querySelectorAll('nav a[data-page]').forEach(btn => {
      if (btn.dataset.page === page) {
        btn.setAttribute('aria-current', 'p');
      } else {
        btn.removeAttribute('aria-current');
      }
    });
  }
  
  

  // Função para ler o parâmetro da URL e mostrar o conteúdo correspondente
  function loadPageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('p') || 'forecast'; // default forecast

    switch (page) {
      case 'forecast':
        showcaseDiv.innerHTML = window.forecastTable;
        break;
      case 'observations':
        showcaseDiv.innerHTML = window.observationsTable;
        break;
      case 'dashboard':
        showcaseDiv.innerHTML = window.dashboardTable;
        break;
      default:
        showcaseDiv.innerHTML = '<p>Page not found</p>';
    }
    updateButtonStyles(page);
  }

  // Eventos dos botões com showcase + URL
  btnForecast.addEventListener('click', () => {
    updateShowcase(window.forecastTable, 'forecast');
  });

  btnObservations.addEventListener('click', () => {
    updateShowcase(window.observationsTable, 'observations');
  });

  btnDashboard.addEventListener('click', () => {
    updateShowcase(window.dashboardTable, 'dashboard');
  });

  // Detetar navegação via back/forward do browser
  window.addEventListener('popstate', () => {
    loadPageFromUrl();
  });

  // Carregar a página correta ao abrir o site
  loadPageFromUrl();
});
