let currentLang = localStorage.getItem('of-lang') || 'zh';

function t(key) {
  return (headI18n[currentLang] && headI18n[currentLang][key])
    || (i18n[currentLang] && i18n[currentLang][key])
    || key;
}

function renderLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  if (typeof updateThemeLabel === 'function') {
    updateThemeLabel(getStoredTheme());
  }
  const langMap = { zh: 'zh-CN', 'zh-TW': 'zh-TW', en: 'en' };
  document.documentElement.lang = langMap[currentLang] || 'zh-CN';
  localStorage.setItem('of-lang', currentLang);
}

function setLang(lang) {
  currentLang = lang;
  renderLang();
  if (typeof closeAllDropdowns === 'function') closeAllDropdowns();
}
