(function () {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');

  function applyTheme(theme, persist) {
    const isDark = theme === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';

    if (persist) {
      localStorage.setItem('preferred-theme', root.dataset.theme);
    }

    if (themeButton && themeLabel) {
      themeButton.setAttribute('aria-pressed', String(isDark));
      themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeLabel.textContent = isDark ? 'Light' : 'Dark';
    }
  }

  applyTheme(root.dataset.theme || 'light', false);

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
    });
  }
})();
