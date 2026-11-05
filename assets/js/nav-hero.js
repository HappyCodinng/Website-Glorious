/* Mode mobile: bar navigasi bawah disembunyikan selama masih di bagian hero
   (dipakai di halaman Beranda dan Penginapan), lalu muncul setelah hero terlewati. */
(function () {
  var hero = document.querySelector('.hero, .page-hero');
  var bar = document.querySelector('.bottombar');
  if (!hero || !bar) return;
  var ticking = false;

  function update() {
    ticking = false;
    // bar disembunyikan selama hero masih menutupi area bar di dasar layar
    var overBar = hero.getBoundingClientRect().bottom > window.innerHeight - bar.offsetHeight;
    document.body.classList.toggle('bottombar-hidden', overBar);
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
