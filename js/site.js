// Mobile navigation
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Close' : 'Menu';
  });
})();

// Gallery lightbox
(function () {
  var links = document.querySelectorAll('.gallery a[href]');
  var box = document.getElementById('lightbox');
  if (!links.length || !box || typeof box.showModal !== 'function') return;
  var img = box.querySelector('img');
  var cap = box.querySelector('figcaption');
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      img.src = a.getAttribute('href');
      img.alt = a.querySelector('img').alt;
      cap.textContent = a.querySelector('span') ? a.querySelector('span').textContent : '';
      box.showModal();
    });
  });
  box.querySelector('button').addEventListener('click', function () { box.close(); });
  box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
})();
