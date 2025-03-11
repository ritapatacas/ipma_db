// theme.js
const toggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
} else if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}
toggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// table switching
const forecastTable = window.forecastTable;
const observationsTable = window.observationsTable;

const showcaseDiv = document.getElementById('showcase');
document.getElementById('btn-forecast').addEventListener('click', () => {
    showcaseDiv.innerHTML = forecastTable;
});
document.getElementById('btn-observations').addEventListener('click', () => {
    showcaseDiv.innerHTML = observationsTable;
});
