(function(){
  var btn = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav-links');
  btn.addEventListener('click', function(){
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      nav.style.display = 'none';
    } else {
      nav.classList.add('open');
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
    }
  });
})();
