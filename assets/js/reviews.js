/* =========================================================
   Data & render ulasan — edit daftar REVIEWS di bawah ini.
   Tambah / ubah / hapus objek, carousel menyesuaikan otomatis.
   Catatan: file ini harus dimuat SEBELUM main.js.
   ========================================================= */
(function () {
  "use strict";

  var REVIEWS = [
    {
        "name": "Klara Nathania",
        "rating": 5,
        "text": "Pemandangannya indah dan udaranya dingin walaupun siang hari. Buat foto juga estetik. Kawahnya kebagi jadi beberapa bagian di area sini. Untuk jalannya lumayan nanjak pas di dalam saat mau melihat kawah. Love this place 💕",
        "meta": [
            [
                "Waktu kunjungan",
                "Hari biasa"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Sarah Melissa",
        "rating": 5,
        "text": "kesini tgl 1 Mei 26\nbooking utk campervan biaya 285k weekend\nstaff nya gercep dan ramah (Top)\ndpt welcome drink (bisa pilih ada kopi/teh)\ndpt 4 tiket utk mandi di kolam privat dan foto2\nwifi bagus\ndeket spot campervan ada colokan listrik, bisa narik kabel sampai tenda\npenerangan bagus,gak gelap saat malam\nair hangat di kolam nirwana nya enak, cuma kolam agak kotor sedkit\nkamar mandi ada shower (air hangat)\nada mushola\nada semacam panggung mini bisa utk acara\nada musik dket resto, menu resto banyak, rasa juga enak, harga standar\nsuhu siang-sore 21-20°C\nsuhu sore-pagi 19-15°C\ndingin nya mantep\nair belerang di kolam mandi privat lbh panas (diberi waktu utk berendam sekitar 15menit)\nmenjual belerang jg disana\n\nsaran : disediakan keran utk cuci piring dan tempat sampah di area campervan",
        "meta": [
            [
                "Waktu kunjungan",
                "Akhir pekan"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Dita Aprilla",
        "rating": 5,
        "text": "Pengalaman seru dan baru karena bisa merasakan glamping dengan view kawah2 Kamojang.. Anak2 bisa teredukasi jg demgan pengalaman baru ini + bs ngerasain hot spring Kawah Kamojang ❤️\n\nYang lebih spesial adalah dengan adanya vendor @popotoandulu dimana kita dapet free akses untuk gratis jasa fotonya loh.. Jd ga perlu pusing2 mikirin gimana nanti mau create family foto krna sudah disediakan untuk tamu yg berkunjung dan jg tamu menginap 🤍",
        "meta": [
            [
                "Waktu kunjungan",
                "Hari biasa"
            ],
            [
                "Reservasi",
                "Disarankan"
            ]
        ]
    },
    {
        "name": "Nadira Raisya Putri",
        "rating": 5,
        "text": "Pengalaman yg seru sama anak2... Menambah wawasan juga... Bisa berendam air hangat...bisa berkemah,toilet bersih,ada banyak penjual makanan...tempatnya masih asri...bisa jadi alternatif wisata kl cari tempat berendam air hangat...",
        "meta": [
            [
                "Waktu kunjungan",
                "Akhir pekan"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Agung Rachmatullah",
        "rating": 5,
        "text": "Tempat yang asyik buat berkunjung di tempat wisata salah satunya di sini, menikmati alam dengan pemandangan alam yang indah diiringi dengan asap khas kawah yang memukau pemandangan, disini tersedia juga pemandian kolam air panas, jembatan gantung, dan ayunan, memang banyak fasilitas yang dapat di pakai, ayo coba dan rasakan udara dingin yang asyik.",
        "meta": [
            [
                "Waktu kunjungan",
                "Hari biasa"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak yakin"
            ]
        ]
    },
    {
        "name": "Imam Rustadi",
        "rating": 5,
        "text": "Wisata sumur geothermal alami.\nTidak disarankan untuk disabilitas atau manula.\nTangga lumayan curam.",
        "meta": [
            [
                "Waktu kunjungan",
                "Akhir pekan"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Fauzie Firdaus",
        "rating": 5,
        "text": "Tempatnya bagus luas,lebih aesthetic kalo lebih berkabut,ada tempat berendam air hangat juga cocok buat nenangin pikiran",
        "meta": []
    },
    {
        "name": "yusuf bachtiar",
        "rating": 5,
        "text": "Semakin bagus aja. Sekarang ada glampingnya, jembatan gantung dan kafenya. Semakin terkelola dengan baik.",
        "meta": [
            [
                "Waktu kunjungan",
                "Hari biasa"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Nurliani Inviati",
        "rating": 5,
        "text": "Main kesini untuk berendam tempatnya nyaman dan weekend kesini ga serame tmpt berendam lain jd seru ada kawah nya juga disitu enak buat berenang soalnya ada kolam yg ga terlalu panas juga, aku saranin main bareng2 biar bisa ambil paket makan suki/grill barengan itu worth it dan parkiran luas, disini aku ambil paket platinum include kolam nirwana/private jacuzzi dan kawah nya + free jasa FG tp per foto kita bayar 5k buat soft file nya",
        "meta": [
            [
                "Waktu kunjungan",
                "Akhir pekan"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Disarankan"
            ]
        ]
    },
    {
        "name": "Ree yanti",
        "rating": 5,
        "text": "Sangat menyenangkan menginap semalam disini. Pada saat check in tersedia welcome drink. Glampingnya juga nyaman dan bersih. Untuk berendam bisa di kolam nirwana dengan cafe yang buka hingga pukul 9 mlm, dengan menu beragam dan harga yang bervariatif. Atau bisa juga di kamar berendam privat yang tersedia. Pagi harinya disediakan menu nasi goreng dengan lauk ayam goreng dan telur mata sapi dan segelas teh hangat. Terdapat beberapa kawah yang bisa dijelajahi  sambil berkeliling melewati jembatan kuning dan tembus ke hutan yang terhubung dengan resto di ujung jembatan yang jadi ikon disini. Di hutan terlihat papan informasi mengenai hewan yang mendiami kawasan salah satunya ialah hewan lutung. Tersedia pula spot foto gratis bagi yang menginap yaitu di spot mobil van kuning dan di jembatan. Untuk setiap hasil jepretan foto dikenakan biaya 5rb/soft file yang bisa di ambil di resto dekat jembatan.",
        "meta": [
            [
                "Waktu kunjungan",
                "Akhir pekan"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Buluk Lukman",
        "rating": 5,
        "text": "Pengalaman yg luar biasa menginap di glorius crater Kamojang....expektasinya luar biasa dengan pemandangan alami....",
        "meta": [
            [
                "Waktu kunjungan",
                "Akhir pekan"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Mariani tjio",
        "rating": 5,
        "text": "ok, sudah tertata dengan rapih.\nTiket masuk berbayar mulai dari rp 40 rb, tergantung paket yang dipilih tapi dapat ditukarkan dengan tiket berendam dan minuman.\nAda restoran, jembatan gantung, kawah kereta api, kawah hujan, kolam rendamnya ada yang umum dan ada yang privat.\nAda glamping nya juga..\nAda juga beberapa warung makanan.",
        "meta": [
            [
                "Waktu kunjungan",
                "Hari biasa"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Satria Arif",
        "rating": 4,
        "text": "Berawal dari iseng bertanya, digunung itu ada apa jadi berujung mampir kelokasi ini. Dari majalaya sekitar 1 jam kelokasi ini dengan perjalanan menanjak.\n\nUntuj tiket masuknya diharga 40k perorang sudah dengan mobil dan ada tambahan paket paket lainnya.\n\nAda beberapa model untuk penginapannya, ada beberapa tempat untuk berendam baik umum dan private, tempatnya bersih dan nyaman, untuk private pemandian air panasnya juga bersih terawat dan kolamnya cukup panas, dan dapat voucher untuk welcome drink dengan pilihan lecy atau strawberry.\n\nUdaranya cukup dingin sejuk, kalau kesini disarankan membawa jaket dan celana panjang, untuk signal terkadang ada dan terkadang hilang",
        "meta": [
            [
                "Waktu kunjungan",
                "Hari biasa"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Dimas Kurniawan Prasetya",
        "rating": 5,
        "text": "D'Glorious Crater Kamojang adalah destinasi wisata yang sangat menarik, terletak di kawasan geotermal Kamojang, Jawa Barat, yang menawarkan pemandangan alam yang luar biasa dan berbagai fasilitas wisata yang menyenangkan. Kawah-kawah geotermal yang terkenal, seperti Kawah Kereta Api dan Kawah Kahuripan, memberikan pengalaman yang unik dan mengesankan. Tempat ini juga menawarkan berbagai wahana seru seperti Glory Bridge, Jungle Track, dan Crater Bridge, yang sangat Instagramable. Bagi yang ingin bersantai, tersedia kolam air panas alami yang menyegarkan.\n\nFasilitas penginapan di D'Glorious Kamojang juga sangat memadai, dengan pilihan glamping yang nyaman dan mewah, lengkap dengan balkon pribadi dan Wi-Fi. Selain itu, restoran dan kafe di sini menyajikan berbagai hidangan lezat dalam suasana yang nyaman dan tenang. Untuk tiket masuk, harga bervariasi mulai dari Rp25.000 hingga Rp110.000, tergantung pada paket yang dipilih, dengan biaya parkir yang terjangkau untuk kendaraan pribadi maupun bus.\n\nTempat ini sangat cocok untuk liburan bersama keluarga, teman, atau pasangan, menawarkan suasana yang menenangkan dan pemandangan yang memukau. Pelayanan yang ramah, fasilitas yang terawat, dan lokasi yang strategis membuat D'Glorious Crater Kamojang layak menjadi pilihan utama untuk berlibur. Selain itu, Anda juga dapat memanfaatkan jasa Popotoan, tim fotografi profesional yang siap mengabadikan momen-momen spesial selama kunjungan Anda, membuat pengalaman Anda semakin tak terlupakan. Pengalaman saya di sini benar-benar luar biasa, dan saya pasti akan kembali lagi.",
        "meta": [
            [
                "Waktu kunjungan",
                "Hari biasa"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Ridnia Nur Istiqomah",
        "rating": 4,
        "text": "Salah satu wisata, resto serta Glamping yang ada di kota Garut.\nD'Glorious Crater Kamojang sendiri tepatnya terdapat diperbatasan antara Bandung dan Garut (CMIIW).\nDisini saya beserta keluarga menginap di Glamping tipe Kahuripan (tersedia 10 unit). Untuk per-malam nya dikenakan biaya Rp 1.000.000.\nDisini kita disediakan 1 bed ukuran besar, kamar mandi dengan hot shower serta amenity yang disediakan seperti air mineral (Amidis) serta kopi dan teh yang bisa diseduh.\nDi bagian tengah terdapat resto serta pemandian air panas (belerang) yang bisa dinikmati oleh pengunjung baik yang menginap ataupun tidak menginap.\nUntuk pemandian nya disarankan untuk dinikmati maksimal 15 menit, sambil berendam, kita juga bisa menikmati makanan dan minuman yang disediakan di restonya.\nDisini jika sore menuju ke malam sangat dingin (bisa menembus 17⁰), jadi disarankan membawa jaket, memakai celana panjang serta kaos kaki, hehe.\nPas sekali buat yang berkeinginan untuk staycation sambil healing. Cuaca dingin, area yang tenang dan dikelilingi oleh pegunungan yang beberapa titik mengeluarkan uap-uap panas dari belerang.\nDisini juga terdapat beberapa wahana seperti kawah kereta api, glory bridge, jungle bridge serta wahana bermain untuk anak-anak.\nYuk dicoba menginap disini bersama keluarga, dijamin suka...",
        "meta": [
            [
                "Waktu kunjungan",
                "Akhir pekan"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Disarankan"
            ]
        ]
    },
    {
        "name": "Sukmawati Ishak",
        "rating": 5,
        "text": "Kami berkunjung kesini saat liburan anak sekolah dan weekday, jadi suasana tdk terlalu ramai, enak, syahdu, indah pemandangannya",
        "meta": [
            [
                "Waktu kunjungan",
                "Hari biasa"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "Ihanna Dyah",
        "rating": 5,
        "text": "pemandangannya indah sekali, hawanya sangat sejuk dan kebersihan sarana dan prasarana yg terjaga",
        "meta": [
            [
                "Waktu kunjungan",
                "Akhir pekan"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Tidak perlu"
            ]
        ]
    },
    {
        "name": "anis rengganis",
        "rating": 5,
        "text": "Salah satu wisata air belerang asli di garut, jalan nya sudah bagus. harga tiket mulai 40k dan ada paket yg lain, sedikit sulit sinyal, tempat yg ikonik nya DGlory bridge, kawah kereta api, ada glamping juga. Utk tempat rendam yg private room semoga makin nyaman ke depan nya. Ada cafe juga untuk beli makanan dan minuman.",
        "meta": [
            [
                "Waktu kunjungan",
                "Akhir pekan"
            ],
            [
                "Waktu antrean",
                "Tanpa mengantre"
            ],
            [
                "Reservasi",
                "Disarankan"
            ]
        ]
    }
];

  var STAR = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.8 2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.36 6.3 20.36l1.09-6.35-4.62-4.5 6.38-.93z"/></svg>';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Inisial avatar diambil otomatis dari nama */
  function initials(name) {
    return String(name).trim().split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join("").toUpperCase() || "?";
  }

  function stars(n) {
    var html = "";
    for (var i = 1; i <= 5; i++) {
      html += i <= n ? STAR : STAR.replace("<svg ", '<svg class="is-empty" ');
    }
    return html;
  }

  function slide(r) {
    var meta = (r.meta || []).map(function (m) {
      return "<li><span>" + esc(m[0]) + "</span>" + esc(m[1]) + "</li>";
    }).join("");
    return (
      '<figure class="testimonial testimonial--slide">' +
        '<span class="testimonial__mark" aria-hidden="true">&ldquo;</span>' +
        '<div class="testimonial__stars" aria-label="' + r.rating + ' dari 5 bintang">' + stars(r.rating) + "</div>" +
        '<blockquote class="testimonial__quote">' + esc(r.text).replace(/\n/g, "<br>") + "</blockquote>" +
        (meta ? '<ul class="testimonial__meta">' + meta + "</ul>" : "") +
        '<figcaption class="testimonial__author">' +
          '<span class="testimonial__avatar" aria-hidden="true">' + esc(initials(r.name)) + "</span>" +
          '<span class="testimonial__name">' + esc(r.name) + "</span>" +
        "</figcaption>" +
      "</figure>"
    );
  }

  var track = document.querySelector("[data-reviews]");
  if (!track) return;
  track.innerHTML = REVIEWS.map(slide).join("");

  /* Bisa dipakai bagian lain, mis. untuk menghitung rata-rata rating */
  window.REVIEWS = REVIEWS;
})();
