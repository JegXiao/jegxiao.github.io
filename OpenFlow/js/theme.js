const THEME_KEY = 'of-theme';
const PREFERS_DARK = window.matchMedia('(prefers-color-scheme: dark)');

function getSystemTheme() {
  return PREFERS_DARK.matches ? 'dark' : 'light';
}

function getStoredTheme() {
  return localStorage.getItem(THEME_KEY) || 'system';
}

function resolveTheme() {
  const stored = getStoredTheme();
  return stored === 'system' ? getSystemTheme() : stored;
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function updateThemeLabel(theme) {
  const btn = document.querySelector('.dropdown-toggle');
  if (!btn) return;
  const key = theme === 'light' ? 'theme_light' : theme === 'dark' ? 'theme_dark' : 'theme_system';
  btn.textContent = t(key);
}

function toggleDropdown(el) {
  document.querySelectorAll('.dropdown.open').forEach(d => {
    if (d !== el.closest('.dropdown')) d.classList.remove('open');
  });
  el.closest('.dropdown').classList.toggle('open');
}

function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme === 'system' ? getSystemTheme() : theme);
  updateThemeLabel(theme);
  closeAllDropdowns();
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown.open').forEach(el => el.classList.remove('open'));
}

function setLang(lang) {
  currentLang = lang;
  renderLang();
  closeAllDropdowns();
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) closeAllDropdowns();
});

PREFERS_DARK.addEventListener('change', () => {
  if (getStoredTheme() === 'system') applyTheme(getSystemTheme());
});

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(resolveTheme());
  updateThemeLabel(getStoredTheme());
});
