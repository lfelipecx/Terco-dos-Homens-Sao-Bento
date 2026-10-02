// Preferência local; aplicada antes do CSS para evitar troca de tema ao carregar.
(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved = null;
  try { saved = localStorage.getItem('terco-tema'); } catch {}
  if (!['light', 'dark'].includes(saved)) saved = null;
  const apply = theme => {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#101e35' : '#ffffff');
    const button = document.querySelector('.theme-toggle');
    if (button) {
      const label = dark ? 'Ativar tema claro' : 'Ativar tema escuro';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', String(dark));
    }
  };
  apply(saved || (preference.matches ? 'dark' : 'light'));
  document.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.theme);
    document.querySelector('.theme-toggle')?.addEventListener('click', () => {
      saved = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(saved);
      try { localStorage.setItem('terco-tema', saved); } catch {}
    });
  });
  preference.addEventListener('change', event => {
    if (!saved) apply(event.matches ? 'dark' : 'light');
  });
})();
