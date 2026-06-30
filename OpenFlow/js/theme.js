const THEME_KEY = 'of-theme';
const PREFERS_DARK = window.matchMedia('(prefers-color-scheme: dark)');

function getSystemTheme() {
  return PREFERS_DARK.matches ? 'dark' : 'light';
}

function getStoredTheme() {
  return localStorage.getItem(THEME_KEY);
}

function resolveTheme() {
  const stored = getStoredTheme();
  if (stored === 'system' || !stored) return getSystemTheme();
  return stored;
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const stored = getStoredTheme();
  if (stored === 'system') {
    btn.textContent = '⚙';
    btn.title = stored;
  } else {
    btn.textContent = theme === 'dark' ? '☀' : '☾';
    btn.title = theme === 'dark' ? 'light' : 'dark';
  }
}

function cycleTheme() {
  const stored = getStoredTheme();
  const next = stored === 'light' ? 'dark' : stored === 'dark' ? 'system' : 'light';
  localStorage.setItem(THEME_KEY, next);
  const resolved = next === 'system' ? getSystemTheme() : next;
  applyTheme(resolved);
}

PREFERS_DARK.addEventListener('change', () => {
  if (getStoredTheme() === 'system' || !getStoredTheme()) {
    applyTheme(getSystemTheme());
  }
});

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(resolveTheme());
});
