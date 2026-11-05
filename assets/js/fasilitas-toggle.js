/* Mode mobile: beranda menampilkan 2 fasilitas; tombol "Lihat Semua Fasilitas"
   membuka daftar lengkap (semua fasilitas, termasuk 2 yang sudah tampil). */
(function () {
  var grid = document.getElementById('facGrid');
  var btn = document.getElementById('facMore');
  var modal = document.getElementById('facModal');
  if (!grid || !btn || !modal) return;
  var list = modal.querySelector('.fac-modal__list');
  var built = false;

  function build() {
    if (built) return;
    grid.querySelectorAll('.fac-card').forEach(function (card) {
      var c = card.cloneNode(true);
      c.removeAttribute('data-reveal');
      c.removeAttribute('data-reveal-delay');
      c.classList.remove('fac-card--wide');
      list.appendChild(c);
    });
    built = true;
  }
  function open() {
    build();
    modal.hidden = false;
    document.body.classList.add('fac-modal-open');
    list.scrollTop = 0;
    modal.querySelector('.fac-modal__close').focus();
  }
  function close() {
    modal.hidden = true;
    document.body.classList.remove('fac-modal-open');
    btn.focus();
  }

  btn.addEventListener('click', open);
  modal.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) close();
  });
  window.addEventListener('resize', function () {
    if (!modal.hidden && window.innerWidth > 900) close();
  });
})();
