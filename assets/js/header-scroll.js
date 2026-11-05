/* Mobile: header tetap di atas; setelah halaman digulir diberi latar putih tipis (kelas is-scrolled). */
(function () {
  var header = document.getElementById('siteHeader');
  if (!header) return;
  var ticking = false;
  function update() {
    ticking = false;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();
