const LOCALE_STORAGE_KEY = 'gojim_locale';

function normalizeLocale(locale) {
  if (!locale) return null;
  return locale === 'fr' ? 'fr' : 'en';
}

function getPreferredLocale() {
  const stored = normalizeLocale(localStorage.getItem(LOCALE_STORAGE_KEY));
  if (stored) return stored;
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('fr') ? 'fr' : 'en';
}

function setLocale(locale) {
  const next = normalizeLocale(locale) || 'en';
  localStorage.setItem(LOCALE_STORAGE_KEY, next);
  applyLocale(next);
}

function applyLocale(locale) {
  const active = normalizeLocale(locale) || 'en';
  document.documentElement.lang = active;
  document.documentElement.dataset.locale = active;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = el.getAttribute(`data-i18n-${active}`);
    if (!value) return;

    if (key.endsWith(':html')) {
      el.innerHTML = value;
    } else if (key.endsWith(':placeholder')) {
      el.setAttribute('placeholder', value);
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const attr = el.getAttribute('data-i18n-attr');
    const value = el.getAttribute(`data-i18n-${active}`);
    if (!attr || !value) return;
    el.setAttribute(attr, value);
  });

  document.querySelectorAll('[data-locale-button]').forEach((btn) => {
    const btnLocale = normalizeLocale(btn.getAttribute('data-locale-button')) || 'en';
    const isActive = btnLocale === active;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

window.GoJimI18n = { setLocale, getPreferredLocale, applyLocale };

document.addEventListener('DOMContentLoaded', () => {
  applyLocale(getPreferredLocale());

  document.querySelectorAll('[data-locale-button]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLocale(btn.getAttribute('data-locale-button'));
    });
  });
});

