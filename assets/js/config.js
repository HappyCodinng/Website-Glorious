/* =========================================================
   KONFIGURASI WEBSITE — d'Glorious Crater Kamojang
   ---------------------------------------------------------
   Cukup ubah nilai di bawah ini. Seluruh halaman akan
   otomatis mengikuti (tombol CTA, kontak, sosial media, peta,
   dan pemetaan gambar).
   ========================================================= */
window.SITE_CONFIG = {
  /* URL tujuan tombol "Lihat Paket" & "Dapatkan Penawaran".
     Default: halaman resmi berisi pricelist & reservasi.
     Ganti bila Anda punya link khusus. */
  ctaUrl: "https://linktr.ee/dgloriouscraterkamojang",

  /* Kontak */
  whatsapp: "6281110003016", // WhatsApp Admin Marketing 1 (resmi)
  whatsappMessage: "Halo d'Glorious Crater Kamojang, saya ingin bertanya mengenai paket menginap.",
  email: "dgloriouscraterkamojang@gmail.com",
  phone: "+62 811-1000-3016",

  /* Media sosial */
  instagram: "https://instagram.com/dgloriouscraterkamojang",
  facebook: "https://www.facebook.com/profile.php?id=61554424100148",

  /* Peta & lokasi (Google Maps) */
  mapsEmbed:
    "https://www.google.com/maps?q=D%27Glorious+Crater+Kamojang,+Mekarwangi,+Ibun,+Bandung&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=D%27Glorious+Crater+Kamojang,+Mekarwangi,+Ibun,+Bandung",

  /* ---------------------------------------------------------
     PEMETAAN GAMBAR
     ---------------------------------------------------------
     Sambungkan "slot" (kunci) dengan nama file foto Anda.
     Cukup ganti nilainya dengan path file asli di assets/img/.

     Contoh:  "villa": "assets/img/Foto Villa Kolam.jpg",

     - Bagian yang fotonya belum tersedia akan otomatis
       menampilkan latar gradien rapi (bukan gambar rusak).
     - Nilai di bawah ini sudah disambungkan ke foto yang
       tersedia di folder assets/img/.
     --------------------------------------------------------- */
  images: {
    /* --- Umum --- */
    "hero": "assets/img/Hero.webp",                       // poster video hero (Beranda)
    "intro": "assets/img/Tentang Kami.webp",               // foto bagian "Selamat Datang"

    /* --- Akomodasi --- */
    "villa": "assets/img/villa.jpg",                      // BELUM ADA FOTONYA
    "lodge": "assets/img/lodge.jpg",                      // BELUM ADA FOTONYA
    "glamping": "assets/img/Aktivitas Royal Kahuripan Glamping.webp",
    "akomodasi-1": "assets/img/Eagle hill cottage.webp",        // foto Eagle Hill Cottage
    "akomodasi-2": "assets/img/royal kahuripan glamping.webp",         // foto Royal Kahuripan Glamping
    "akomodasi-3": "assets/img/Camp Jamuju.webp",              // foto Camp Jamuju Tent
    "akomodasi-4": "assets/img/Camp Jamuju.webp",              // foto Camp Rasamala Tent (sementara pakai foto Camp Jamuju)
    "akomodasi-5": "assets/img/Camp Jamuju.webp",              // foto Camp Cakrawala Tent (sementara pakai foto Camp Jamuju)
    "akomodasi-6": "assets/img/glorious campervan.webp",              // foto Glorious Campervan

    /* --- Pengalaman & Aktivitas --- */
    "exp-crater": "assets/img/exp-crater.jpg",            // BELUM ADA FOTONYA
    "exp-hotspring": "assets/img/Aktivitas Rendam Kaki Air Panas.webp",
    "exp-walk": "assets/img/Aktivitas Morning Walk di Jalur Kawah.webp",
    "exp-workshop": "assets/img/exp-workshop.jpg",        // BELUM ADA FOTONYA
    "exp-campfire": "assets/img/Aktivitas Hangat Api Unggun.webp",
    "exp-sunrise": "assets/img/exp-sunrise.jpg",          // BELUM ADA FOTONYA
    "exp-kuliner": "assets/img/exp-kuliner.jpg",          // BELUM ADA FOTONYA
    "highlight-walk": "assets/img/Aktivitas Morning Walk di Jalur Kawah.webp",
    "highlight-workshop": "assets/img/highlight-workshop.jpg", // BELUM ADA FOTONYA

    /* --- Galeri foto --- */
    "gal-1": "assets/img/Hero.webp",                      // panorama kawah
    "gal-2": "assets/img/Aktivitas Royal Kahuripan Glamping.webp",
    "gal-3": "assets/img/Aktivitas Hangat Api Unggun.webp",
    "gal-4": "assets/img/Tentang Kami.webp",
    "gal-5": "assets/img/gal-5.jpg",                      // BELUM ADA FOTONYA
    "gal-6": "assets/img/Aktivitas Rendam Kaki Air Panas.webp",
    "gal-7": "assets/img/gal-7.jpg",                      // BELUM ADA FOTONYA
    "gal-8": "assets/img/gal-8.jpg",                      // BELUM ADA FOTONYA
    "gal-9": "assets/img/Aktivitas Morning Walk di Jalur Kawah.webp",
    "gal-10": "assets/img/gal-10.jpg",                    // BELUM ADA FOTONYA
    "video-thumb-1": "assets/img/video-thumb-1.jpg",      // BELUM ADA FOTONYA
    "video-thumb-2": "assets/img/video-thumb-2.jpg",      // BELUM ADA FOTONYA

    /* --- Instagram (Beranda) --- */
    "ig-1": "assets/img/Aktivitas Morning Walk di Jalur Kawah.webp",
    "ig-2": "assets/img/Aktivitas Hangat Api Unggun.webp",
    "ig-3": "assets/img/ig-3.jpg",                        // BELUM ADA FOTONYA
    "ig-4": "assets/img/Aktivitas Rendam Kaki Air Panas.webp",
    "ig-5": "assets/img/Aktivitas Royal Kahuripan Glamping.webp",
    "ig-6": "assets/img/Tentang Kami.webp",

    /* --- Latar judul halaman --- */
    "page-akomodasi": "assets/img/Hero Akomodasi.webp",
    "page-pengalaman": "assets/img/Aktivitas Morning Walk di Jalur Kawah.webp",
    "page-fasilitas": "assets/img/Aktivitas Hangat Api Unggun.webp",
    "page-galeri": "assets/img/Hero.webp",
    "page-kontak": "assets/img/Tentang Kami.webp"
  },

  /* ---------------------------------------------------------
     PEMETAAN VIDEO (folder assets/video/)
     --------------------------------------------------------- */
  videos: {
    "hero": "assets/video/Hero1.mp4",
    "video-1": "assets/video/video-1.mp4",
    "video-2": "assets/video/video-2.mp4",
    "eagle-cottage": "assets/video/eagle-cottage.mp4",
    "royal-kahuripan-glamping": "assets/video/royal-kahuripan-glamping.mp4"
  }
};