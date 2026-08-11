let currentLang = localStorage.getItem('of-lang') || 'zh';

// 缓存 HTML 中的原始中文文本，切回简体中文时恢复
const zhCache = new Map();

function cacheZhText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    zhCache.set(el, el.textContent);
  });
}

function t(key) {
  return (headI18n[currentLang] && headI18n[currentLang][key])
    || (i18n[currentLang] && i18n[currentLang][key])
    || key;
}

function renderLang() {
  if (currentLang === 'zh') {
    // 简体中文：直接使用 HTML 原文，不查 i18n 表
    zhCache.forEach((text, el) => {
      el.textContent = text;
    });
  } else {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t(key);
      } else {
        el.textContent = t(key);
      }
    });
  }
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

// 脚本位于 body 末尾，DOM 已解析，直接缓存
cacheZhText();
