(function(){
  var nav = document.getElementById('site-nav');
  var navToggle = document.getElementById('nav-toggle');
  var themeBtn = document.getElementById('theme-toggle');
  var root = document.documentElement;

  // nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', function(){
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
      }
    });
  }

  // theme toggle
  function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('preferred-theme', theme);
    if (theme === 'dark') themeBtn.textContent = '☀️';
    else themeBtn.textContent = '🌙';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function(){
      var cur = document.body.getAttribute('data-theme') || 'light';
      setTheme(cur === 'light' ? 'dark' : 'light');
    });
  }

  // Initialize from localStorage or system
  var saved = localStorage.getItem('preferred-theme');
  if (saved) {
    setTheme(saved);
  } else {
    var media = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(media ? 'dark' : 'light');
  }
})();
