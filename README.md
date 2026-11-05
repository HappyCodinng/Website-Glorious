# d'Glorious Crater Kamojang — Website

Website statis (HTML + CSS + JavaScript murni) untuk **d'Glorious Crater Kamojang**.
Tagline: *LETS CREATE A GLORIOUS MOMENT*

Tidak perlu build tools. Cukup buka `index.html` di browser, atau unggah seluruh folder ke hosting.

---

## Struktur Folder

```
project/
├── index.html          → Beranda
├── akomodasi.html      → Akomodasi (Villa / Lodge / Glamping)
├── galeri.html         → Galeri Foto & Video (filter + lightbox)
├── kontak.html         → Kontak, Form, Peta & Petunjuk Arah
├── assets/
│   ├── css/style.css    → Seluruh tampilan (warna, tipografi, layout)
│   ├── js/config.js     → KONFIGURASI (CTA, kontak, sosial, peta, gambar)
│   ├── js/main.js       → Interaksi (menu, animasi, galeri, dll.)
│   ├── img/             → Logo & foto  ← taruh file Anda di sini
│   └── video/           → Video banner & video galeri
└── README.md
```

---

## 1. Mengganti Link Tombol (CTA)

Buka **`assets/js/config.js`**, ubah `ctaUrl`:

```js
ctaUrl: "https://link-booking-anda.com",
```

Semua tombol **"Lihat Paket"** dan **"Dapatkan Penawaran"** di seluruh halaman otomatis mengarah ke link tersebut.

## 2. Mengganti Kontak, Sosial Media & Peta

Masih di **`assets/js/config.js`**:

| Baris | Kegunaan |
|-------|----------|
| `whatsapp` | Nomor WhatsApp (format `62...`, tanpa `+` dan spasi) |
| `whatsappMessage` | Pesan otomatis saat tombol WhatsApp diklik |
| `email` / `phone` | Email & telepon yang tampil di footer & halaman kontak |
| `instagram` / `facebook` | Link akun sosial media |
| `mapsEmbed` | URL embed Google Maps (berakhiran `output=embed`) |
| `mapsDirections` | URL petunjuk arah Google Maps |

> **Tips Google Maps:** buka lokasi di Google Maps → *Bagikan* → *Sematkan peta* → salin bagian `src="..."`.

---

## 3. Mengganti Gambar (Pusat Pemetaan)

Semua gambar dikendalikan dari objek **`images`** di `assets/js/config.js`.
Setiap gambar di halaman punya **slot** (kunci), dan Anda cukup mengganti nilainya
dengan nama file Anda.

Contoh — foto villa Anda bernama `Foto Villa Kolam.jpg`:

```js
"villa": "assets/img/Foto Villa Kolam.jpg",
```

Nama file **boleh berbeda-beda** (termasuk spasi). Tidak perlu mengubah HTML.

### Daftar slot gambar

**Umum**
| Slot | Keterangan |
|------|------------|
| `hero` | Poster video hero Beranda |
| `intro` | Foto bagian "Selamat Datang" |

**Akomodasi**
| Slot | Keterangan |
|------|------------|
| `villa`, `lodge`, `glamping` | Foto tiap unit |
| `akomodasi-1` s/d `akomodasi-3` | Galeri akomodasi |

**Pengalaman & Aktivitas**
| Slot | Keterangan |
|------|------------|
| `exp-crater`, `exp-hotspring`, `exp-walk` | Kartu aktivitas |
| `exp-workshop`, `exp-campfire`, `exp-sunrise`, `exp-kuliner` | Kartu aktivitas |
| `highlight-walk`, `highlight-workshop` | Foto bagian unggulan |

**Galeri**
| Slot | Keterangan |
|------|------------|
| `gal-1` s/d `gal-10` | Foto galeri |
| `video-thumb-1`, `video-thumb-2` | Thumbnail video |

**Instagram (Beranda)**
| Slot | Keterangan |
|------|------------|
| `ig-1` s/d `ig-6` | Foto grid Instagram |

**Latar judul halaman**
| Slot | Halaman |
|------|---------|
| `page-akomodasi` | Akomodasi |
| `page-pengalaman` | Pengalaman |
| `page-fasilitas` | Fasilitas |
| `page-galeri` | Galeri |
| `page-kontak` | Kontak |

> Jika sebuah slot belum diisi / fotonya belum ada, bagian tersebut otomatis
> menampilkan **latar gradien** yang rapi — bukan gambar rusak.

## 4. Mengganti Video (folder `assets/video/`)

Pada objek **`videos`** di `assets/js/config.js`:

| Slot | Keterangan |
|------|------------|
| `hero` | Video banner Beranda (disarankan ≤ 10 MB, rasio 16:9) |
| `video-1`, `video-2` | Video pada galeri |

---

## 5. Warna & Tipografi

Diatur lewat CSS variables di bagian atas `assets/css/style.css`:

```css
--gold:  #e7a626;   /* aksen & tombol utama */
--blue:  #006094;   /* judul, link, elemen utama */
--green: #76b74d;   /* aksen alam */
--white: #ffffff;   /* latar dasar */
```

Ganti nilai di atas untuk mengubah tema menyeluruh.

---

## 6. Menjalankan Secara Lokal

Buka `index.html` langsung di browser, atau jalankan server sederhana:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

Lalu buka `http://localhost:8000`.

---

## 7. Publikasi (Deployment)

Unggah **seluruh isi folder** ke layanan hosting statis, misalnya:

- **Netlify** / **Vercel** — seret & lepas folder
- **GitHub Pages** — push ke repository, aktifkan Pages
- **cPanel** — unggah via File Manager ke `public_html`

Tidak diperlukan database atau server khusus.

