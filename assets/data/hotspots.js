/* Data hotspot tur 360 — DITULIS oleh editor.html (tombol "Ekspor hotspots.js").
   Kunci = id scene, nilai = daftar hotspot {type, label, yaw, pitch, target?, text?, icon?, size?}. */
window.HOTSPOTS = {
  "halaman": [
    {
      "type": "info",
      "label": "Villa 2",
      "yaw": -98.4,
      "pitch": 0.2,
      "icon": "assets/Icon/ikon-villa.webp",
      "size": 80
    },
    {
      "type": "nav",
      "label": "Masuk  ke Ruang Keluaraga",
      "yaw": -4.5,
      "pitch": -16.7,
      "target": "r-keluarga",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 100
    },
    {
      "type": "nav",
      "label": "Akses ke parkiran",
      "yaw": -108.6,
      "pitch": -20,
      "target": "parkiran",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 90
    },
    {
      "type": "info",
      "label": "Kursi",
      "yaw": 39.4,
      "pitch": -10.3,
      "icon": "assets/Icon/ikon-kursi.webp",
      "size": 100
    },
    {
      "type": "info",
      "label": "Meja",
      "yaw": 77.4,
      "pitch": -29.1,
      "icon": "assets/Icon/ikon-meja.webp",
      "size": 84
    }
  ],
  "parkiran": [
    {
      "type": "info",
      "label": "Lapangan Parkir",
      "yaw": 33,
      "pitch": -8.6,
      "icon": "assets/Icon/ikon-parkir.webp",
      "size": 100
    },
    {
      "type": "info",
      "label": "Villa 2",
      "yaw": 121.5,
      "pitch": -11.7,
      "icon": "assets/Icon/ikon-villa.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Villa 1",
      "yaw": 86.3,
      "pitch": -3.3,
      "icon": "assets/Icon/ikon-villa.webp",
      "size": 72
    },
    {
      "type": "nav",
      "label": "Akses ke Halaman",
      "yaw": -174.4,
      "pitch": -10.3,
      "target": "halaman",
      "icon": "assets/Icon/ikon-panah-belok-kiri-lantai.webp",
      "size": 90
    },
    {
      "type": "nav",
      "label": "Parkiran Karyawan",
      "yaw": -164.6,
      "pitch": -12,
      "target": "parkirkaryawan",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 100
    }
  ],
  "r-keluarga": [
    {
      "type": "info",
      "label": "TV Digital",
      "yaw": 22.7,
      "pitch": -14.7,
      "icon": "assets/Icon/ikon-tv.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Kasur Double Bed",
      "yaw": -42.3,
      "pitch": -12.8,
      "icon": "assets/Icon/ikon-kasur-double.webp",
      "size": 70
    },
    {
      "type": "nav",
      "label": "Masuk ke Ruangan Belakang",
      "yaw": -24.7,
      "pitch": -6.1,
      "target": "ruang-belakang",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 60
    },
    {
      "type": "nav",
      "label": "Keluar ke Halaman",
      "yaw": -56.5,
      "pitch": -10.9,
      "target": "halaman",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 60
    },
    {
      "type": "info",
      "label": "Kursi Angin",
      "yaw": -33.9,
      "pitch": -61.3,
      "icon": "assets/Icon/ikon-kursi-angin.webp",
      "size": 90
    },
    {
      "type": "info",
      "label": "Meja Kabinet",
      "yaw": -1.7,
      "pitch": -22.2,
      "icon": "assets/Icon/ikon-meja-kabinet.webp",
      "size": 90
    }
  ],
  "ruang-belakang": [
    {
      "type": "nav",
      "label": "Masuk ke Ruang Keluarga",
      "yaw": 172.3,
      "pitch": -45.2,
      "target": "r-keluarga",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 80
    },
    {
      "type": "nav",
      "label": "Akses ke Lemari Pakaian",
      "yaw": 78.7,
      "pitch": -25,
      "target": "lemari",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 90
    },
    {
      "type": "nav",
      "label": "Masuk ke Kamar Mandi",
      "yaw": -136.9,
      "pitch": -39.4,
      "target": "kamar-mandi",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 70
    },
    {
      "type": "info",
      "label": "Alat Alat Kopi",
      "yaw": 98.6,
      "pitch": -11.7,
      "icon": "assets/Icon/ikon-alat-kopi.webp",
      "size": 80
    }
  ],
  "lemari": [
    {
      "type": "nav",
      "label": "Keluar dari Lemari Pakaian",
      "yaw": -142.5,
      "pitch": -37.1,
      "target": "ruang-belakang",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 100
    },
    {
      "type": "info",
      "label": "Gantungan Baju",
      "yaw": 154.2,
      "pitch": 17.4,
      "icon": "assets/Icon/ikon-gantungan-baju.webp",
      "size": 80
    }
  ],
  "kamar-mandi": [
    {
      "type": "info",
      "label": "Bathtub",
      "yaw": 28.1,
      "pitch": -28.9,
      "icon": "assets/Icon/ikon-bathtub.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Shower",
      "yaw": 92.5,
      "pitch": -16.7,
      "icon": "assets/Icon/ikon-shower.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Toilet",
      "yaw": 132.1,
      "pitch": -36.5,
      "icon": "assets/Icon/ikon-toilet.webp",
      "size": 80
    },
    {
      "type": "nav",
      "label": "Keluar dari Kamar Mandi",
      "yaw": -161.1,
      "pitch": -30.4,
      "target": "ruang-belakang",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 90
    },
    {
      "type": "info",
      "label": "Hairdryer",
      "yaw": 147.7,
      "pitch": -0.7,
      "icon": "assets/Icon/ikon-hairdryer.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Cermin",
      "yaw": 159.4,
      "pitch": 4,
      "icon": "assets/Icon/ikon-cermin.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Wastafel",
      "yaw": 165.8,
      "pitch": -15.2,
      "icon": "assets/Icon/ikon-wastafel.webp",
      "size": 80
    }
  ],
  "gerbang-utama": [
    {
      "type": "info",
      "label": "Gerbang Utama",
      "yaw": 100.7,
      "pitch": 3.7,
      "icon": "assets/Icon/ikon-gerbang.webp",
      "size": 88
    },
    {
      "type": "info",
      "label": "Parkir Motor",
      "yaw": 14.1,
      "pitch": -14.7,
      "icon": "assets/Icon/ikon-parkir-motor.webp",
      "size": 100
    },
    {
      "type": "info",
      "label": "Parkir Mobil",
      "yaw": 143.4,
      "pitch": -6.1,
      "icon": "assets/Icon/ikon-parkir-mobil.webp",
      "size": 106
    },
    {
      "type": "info",
      "label": "SPKLU/Pom Mobil Listrik",
      "yaw": 176.2,
      "pitch": -0.7,
      "icon": "assets/Icon/ikon-spklu.webp",
      "size": 82
    },
    {
      "type": "info",
      "label": "Kantin",
      "yaw": 71.6,
      "pitch": 3.7,
      "icon": "assets/Icon/ikon-kantin.webp",
      "size": 72
    },
    {
      "type": "nav",
      "label": "Toilet",
      "yaw": 14.9,
      "pitch": 2.2,
      "target": "toilet",
      "icon": "assets/Icon/ikon-toilet.webp",
      "size": 90
    },
    {
      "type": "info",
      "label": "Front Office",
      "yaw": -133.9,
      "pitch": 6.1,
      "icon": "assets/Icon/ikon-front-office.webp",
      "size": 80
    },
    {
      "type": "nav",
      "label": "maju ke Parkir Karyawan",
      "yaw": -93.6,
      "pitch": -15.7,
      "target": "parkirkaryawan",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 100
    },
    {
      "type": "info",
      "label": "Security",
      "yaw": 82.1,
      "pitch": 4.7,
      "icon": "assets/Icon/ikon-security.webp",
      "size": 80
    }
  ],
  "parkirkaryawan": [
    {
      "type": "info",
      "label": "Mushola",
      "yaw": -39.4,
      "pitch": 8.1,
      "icon": "assets/Icon/ikon-mushola.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Tempat Sampah",
      "yaw": 14,
      "pitch": -8.9,
      "icon": "assets/Icon/ikon-tempat-sampah.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Papan Informasi",
      "yaw": 28.1,
      "pitch": 3.9,
      "icon": "assets/Icon/ikon-papan-informasi.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Parkir Mobil",
      "yaw": -117.6,
      "pitch": -1.2,
      "icon": "assets/Icon/ikon-parkir-mobil.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Parkir Motor",
      "yaw": 167.2,
      "pitch": -2.6,
      "icon": "assets/Icon/ikon-parkir-motor.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Cafe",
      "yaw": -147.8,
      "pitch": 5.1,
      "icon": "assets/Icon/ikon-cafe.webp",
      "size": 80
    },
    {
      "type": "nav",
      "label": "Villa",
      "yaw": -12.4,
      "pitch": -20.7,
      "target": "parkiran",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 100
    },
    {
      "type": "nav",
      "label": "Gerbang Utama",
      "yaw": 130.9,
      "pitch": -13.7,
      "target": "gerbang-utama",
      "icon": "assets/Icon/ikon-panah-maju-lantai-panjang.webp",
      "size": 90
    }
  ],
  "toilet": [
    {
      "type": "info",
      "label": "Cermin 1",
      "yaw": -149.8,
      "pitch": -0.3,
      "icon": "assets/Icon/ikon-cermin.webp",
      "size": 70
    },
    {
      "type": "info",
      "label": "Cermin 2",
      "yaw": -128,
      "pitch": -0.5,
      "icon": "assets/Icon/ikon-cermin.webp",
      "size": 70
    },
    {
      "type": "info",
      "label": "Cermin 3",
      "yaw": -86.5,
      "pitch": -4.9,
      "icon": "assets/Icon/ikon-cermin.webp",
      "size": 70
    },
    {
      "type": "info",
      "label": "Cermin 4",
      "yaw": -59.8,
      "pitch": -4.3,
      "icon": "assets/Icon/ikon-cermin.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Wastafel 1",
      "yaw": -156.8,
      "pitch": -21.3,
      "icon": "assets/Icon/ikon-wastafel.webp",
      "size": 82
    },
    {
      "type": "info",
      "label": "Wastafel 2",
      "yaw": -134.5,
      "pitch": -30.6,
      "icon": "assets/Icon/ikon-wastafel.webp",
      "size": 70
    },
    {
      "type": "info",
      "label": "Wastafel 3",
      "yaw": -86.5,
      "pitch": -29.9,
      "icon": "assets/Icon/ikon-wastafel.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Wastafel 4",
      "yaw": -53.5,
      "pitch": -23.3,
      "icon": "assets/Icon/ikon-wastafel.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Kotak Tisue",
      "yaw": -42.1,
      "pitch": -4.6,
      "icon": "assets/Icon/ikon-tisu.webp",
      "size": 76
    },
    {
      "type": "info",
      "label": "kotak tisue",
      "yaw": -164.1,
      "pitch": 0.1,
      "icon": "assets/Icon/ikon-tisu.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Toilet",
      "yaw": -19.7,
      "pitch": -6,
      "icon": "assets/Icon/ikon-toilet.webp",
      "size": 70
    },
    {
      "type": "info",
      "label": "Toilet",
      "yaw": 1.5,
      "pitch": -2.9,
      "icon": "assets/Icon/ikon-toilet.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Toilet",
      "yaw": 175.6,
      "pitch": -6.8,
      "icon": "assets/Icon/ikon-toilet.webp",
      "size": 80
    },
    {
      "type": "info",
      "label": "Toilet",
      "yaw": 157.7,
      "pitch": -4,
      "icon": "assets/Icon/ikon-toilet.webp",
      "size": 80
    },
    {
      "type": "nav",
      "label": "Keluar dari Toilet",
      "yaw": -20.2,
      "pitch": -38.7,
      "target": "gerbang-utama",
      "icon": "assets/Icon/ikon-panah-belok-kiri-lantai.webp",
      "size": 100
    },
    {
      "type": "nav",
      "label": "Keluar dari Toilet",
      "yaw": 176.3,
      "pitch": -36.3,
      "target": "gerbang-utama",
      "icon": "assets/Icon/ikon-panah-belok-kanan-lantai.webp",
      "size": 100
    }
  ]
};

/* id scene -> nama file panorama (dipakai main.js untuk mencocokkan scene) */
window.HOTSPOT_FILES = {
  "parkiran": "Villa Parkiran-8192.webp",
  "halaman": "VIlla Halaman-8192.webp",
  "r-keluarga": "Villa R keluarga-8192.webp",
  "ruang-belakang": "Villa ruangan belakang-8192.webp",
  "lemari": "Villa Lemari pakaian-8192.webp",
  "kamar-mandi": "Villa Kamar mandi -8192.webp",
  "gerbang-utama": "GerbangUtama.webp",
  "parkirkaryawan": "ParkirPegawai.webp",
  "toilet": "IMG_20261003_113045_00_431.webp"
};

/* id scene -> nama ruangan (dipakai editor.html) */
window.HOTSPOT_TITLES = {
  "parkiran": "Parkiran",
  "halaman": "Halaman",
  "r-keluarga": "Ruang keluarga",
  "ruang-belakang": "Ruangan belakang",
  "lemari": "Lemari pakaian",
  "kamar-mandi": "Kamar mandi",
  "gerbang-utama": "Gerbang Utama",
  "parkirkaryawan": "ParkirKaryawan",
  "toilet": "Toilet"
};

/* lokasi -> {title, dir, rooms:[id scene]} (dipakai editor.html) */
window.HOTSPOT_LOCATIONS = {
  "villa": {
    "title": "Villa",
    "dir": "assets/img/360/villa/",
    "rooms": [
      "parkiran",
      "halaman",
      "r-keluarga",
      "ruang-belakang",
      "lemari",
      "kamar-mandi"
    ]
  },
  "lobby": {
    "title": "Lobby",
    "dir": "assets/img/360/lobby/",
    "rooms": [
      "gerbang-utama",
      "parkirkaryawan",
      "toilet"
    ]
  }
};
