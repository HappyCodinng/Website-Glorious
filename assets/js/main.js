/* =========================================================
   d'Glorious Crater Kamojang — main.js
   Menu mobile, header, animasi scroll, lightbox, filter galeri,
   penerapan konfigurasi (CTA, kontak, sosial, peta), fallback gambar.
   ========================================================= */
(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};

  /* ---------------------------------------------------
     1. Terapkan konfigurasi ke elemen bertanda data-*
     --------------------------------------------------- */
  function applyConfig() {
    var ctaUrl = cfg.ctaUrl && cfg.ctaUrl.trim() ? cfg.ctaUrl : "#";
    document.querySelectorAll("[data-cta]").forEach(function (el) {
      el.setAttribute("href", ctaUrl);
      if (ctaUrl !== "#") {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    });

    var waLink =
      "https://wa.me/" +
      (cfg.whatsapp || "") +
      "?text=" +
      encodeURIComponent(cfg.whatsappMessage || "");
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      el.setAttribute("href", waLink);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });

    document.querySelectorAll("[data-instagram]").forEach(function (el) {
      el.setAttribute("href", cfg.instagram || "#");
    });
    document.querySelectorAll("[data-facebook]").forEach(function (el) {
      el.setAttribute("href", cfg.facebook || "#");
    });

    document.querySelectorAll("[data-email]").forEach(function (el) {
      var email = cfg.email || "";
      el.setAttribute("href", "mailto:" + email);
      if (el.hasAttribute("data-email-text") && email) el.textContent = email;
    });
    document.querySelectorAll("[data-phone]").forEach(function (el) {
      var phone = cfg.phone || "";
      el.setAttribute("href", "tel:" + phone.replace(/\s+/g, ""));
      if (el.hasAttribute("data-phone-text") && phone) el.textContent = phone;
    });

    var maps = document.querySelectorAll("[data-maps-embed]");
    maps.forEach(function (el) {
      el.setAttribute("src", cfg.mapsEmbed || "");
    });
    document.querySelectorAll("[data-maps-directions]").forEach(function (el) {
      el.setAttribute("href", cfg.mapsDirections || "#");
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ---------------------------------------------------
     2. Header solid saat scroll
     --------------------------------------------------- */
  function initHeader() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    if (header.classList.contains("is-static")) return;
    var onScroll = function () {
      header.classList.toggle("is-solid", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------------------------------------------
     3. Panel menu (hamburger)
     --------------------------------------------------- */
  function initNavPanel() {
    var toggle = document.getElementById("navToggle");
    var panel = document.getElementById("primaryNav");
    var backdrop = document.getElementById("navBackdrop");
    var closeBtn = document.getElementById("navClose");
    if (!toggle || !panel) return;

    function setOpen(open) {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
      if (backdrop) {
        if (open) { backdrop.hidden = false; }
        else { backdrop.hidden = true; }
      }
    }

    toggle.addEventListener("click", function () {
      setOpen(!document.body.classList.contains("nav-open"));
    });
    if (closeBtn) closeBtn.addEventListener("click", function () { setOpen(false); });
    if (backdrop) backdrop.addEventListener("click", function () { setOpen(false); });

    /* Tutup saat Escape ditekan */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) setOpen(false);
    });

    /* Tutup saat salah satu tautan diklik */
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  /* ---------------------------------------------------
     4. Tandai menu aktif berdasarkan halaman
     --------------------------------------------------- */
  function initActiveNav() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav__list a, .bottombar__list a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === path) a.classList.add("is-active");
    });
  }

  /* ---------------------------------------------------
     5. Animasi reveal saat scroll
     --------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach(function (el) { io.observe(el); });

    /* Jaring pengaman: bila observer gagal jalan, tampilkan elemen yang
       sudah berada di layar (atau di atasnya) agar tak terjebak transparan */
    setTimeout(function () {
      items.forEach(function (el) {
        if (el.classList.contains("is-visible")) return;
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-visible");
      });
    }, 1200);
  }

  /* ---------------------------------------------------
     6. Terapkan pemetaan gambar dari config (data-img)
     --------------------------------------------------- */
  function applyImages() {
    var map = cfg.images || {};
    document.querySelectorAll("[data-img]").forEach(function (el) {
      var url = map[el.getAttribute("data-img")];
      if (!url) return;
      var tag = el.tagName;
      if (tag === "IMG") {
        el.src = url;
      } else if (tag === "VIDEO") {
        el.setAttribute("poster", url);
      } else {
        if (el.hasAttribute("data-src")) el.setAttribute("data-src", url);
        var inner = el.querySelector("img");
        if (inner) inner.src = url;
      }
    });

    var vids = cfg.videos || {};
    document.querySelectorAll("[data-video]").forEach(function (el) {
      var url = vids[el.getAttribute("data-video")];
      if (!url) return;
      if (el.tagName === "SOURCE") el.setAttribute("src", url);
      else el.setAttribute("data-src", url);
    });
  }

  /* ---------------------------------------------------
     7. Fallback gambar & logo
     --------------------------------------------------- */
  function initImageFallbacks() {
    document.querySelectorAll(".media img, .hero__media img, .page-hero__media img, .ig-item img").forEach(function (img) {
      var mark = function () {
        var media = img.closest(".media") || img.parentElement;
        if (media) media.classList.add("media--empty");
        img.style.opacity = "0";
      };
      if (img.complete && img.naturalWidth === 0) mark();
      img.addEventListener("error", mark);
    });

    document.querySelectorAll(".brand__logo").forEach(function (logo) {
      var markText = function () {
        var brand = logo.closest(".brand");
        if (brand) brand.classList.add("brand--text");
      };
      if (logo.complete && logo.naturalWidth === 0) markText();
      logo.addEventListener("error", markText);
    });
  }

  /* ---------------------------------------------------
     8. Filter galeri
     --------------------------------------------------- */
  function initGalleryFilter() {
    var buttons = document.querySelectorAll("[data-filter]");
    var items = document.querySelectorAll(".gallery-item");
    if (!buttons.length || !items.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        items.forEach(function (item) {
          var cat = item.getAttribute("data-category") || "";
          var show = filter === "all" || cat.indexOf(filter) !== -1;
          item.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* ---------------------------------------------------
     9. Lightbox galeri
     --------------------------------------------------- */
  function initLightbox() {
    var box = document.getElementById("lightbox");
    if (!box) return;
    var content = box.querySelector(".lightbox__content");
    var caption = box.querySelector(".lightbox__caption");
    var visible = [];
    var index = 0;

    function render() {
      var item = visible[index];
      if (!item) return;
      content.innerHTML = "";
      var src = item.getAttribute("data-src");
      var type = item.getAttribute("data-type") || "image";
      if (type === "video") {
        var v = document.createElement("video");
        v.src = src;
        v.controls = true;
        v.autoplay = true;
        v.playsInline = true;
        content.appendChild(v);
      } else {
        var i = document.createElement("img");
        i.src = src;
        i.alt = item.getAttribute("data-caption") || "";
        content.appendChild(i);
      }
      if (caption) caption.textContent = item.getAttribute("data-caption") || "";
    }
    function open(item) {
      visible = Array.prototype.filter.call(
        document.querySelectorAll(".gallery-item"),
        function (el) { return !el.classList.contains("is-hidden"); }
      );
      index = visible.indexOf(item);
      render();
      box.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      box.classList.remove("is-open");
      content.innerHTML = "";
      document.body.style.overflow = "";
    }
    function step(dir) {
      if (!visible.length) return;
      index = (index + dir + visible.length) % visible.length;
      render();
    }

    document.querySelectorAll(".gallery-item").forEach(function (item) {
      item.addEventListener("click", function () { open(item); });
    });
    box.querySelector(".lightbox__close").addEventListener("click", close);
    box.querySelector(".lightbox__nav--prev").addEventListener("click", function (e) { e.stopPropagation(); step(-1); });
    box.querySelector(".lightbox__nav--next").addEventListener("click", function (e) { e.stopPropagation(); step(1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  /* ---------------------------------------------------
     9b. Galeri adaptif: 1 foto = full screen, >1 = scroll
     --------------------------------------------------- */
  function initAdaptiveGallery() {
    document.querySelectorAll("[data-gallery]").forEach(function (grid) {
      var items = Array.prototype.filter.call(
        grid.querySelectorAll(".gallery-item"),
        function (el) { return !el.classList.contains("is-hidden"); }
      );
      if (!items.length) return;
      var single = items.length === 1;
      grid.classList.toggle("is-single", single);
      grid.classList.toggle("is-scroll", !single);
    });
  }

  /* ---------------------------------------------------
     10. Form kontak (dummy -> WhatsApp)
     --------------------------------------------------- */
  function initContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.querySelector('[name="nama"]') || {}).value || "";
      var paket = (form.querySelector('[name="paket"]') || {}).value || "";
      var pesan = (form.querySelector('[name="pesan"]') || {}).value || "";
      var text =
        "Halo d'Glorious Crater Kamojang,%0A" +
        "Nama: " + name + "%0A" +
        "Paket diminati: " + paket + "%0A" +
        "Pesan: " + pesan;
      var url =
        "https://wa.me/" + (cfg.whatsapp || "") + "?text=" + text;
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---------------------------------------------------
     11. Tahun footer
     --------------------------------------------------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------------------------------------------------
     11b. Latar blur video hero (video vertikal)
     --------------------------------------------------- */
  function initHeroBackdrop() {
    var media = document.querySelector(".hero__media");
    var hero = media && media.querySelector("video");
    var backdrop = media && media.querySelector(".hero__backdrop");
    if (!hero || !backdrop) return;

    var mq = window.matchMedia("(min-aspect-ratio: 9/16)");
    var clip = null;

    function sync() {
      /* Di layar sempit video sudah memenuhi hero, tak perlu lapisan blur */
      if (!mq.matches) {
        if (clip) { clip.remove(); clip = null; }
        return;
      }
      if (clip) return;

      var poster = hero.getAttribute("poster");
      if (poster) backdrop.style.backgroundImage = "url('" + poster + "')";

      var source = hero.querySelector("source");
      var url = (source && source.getAttribute("src")) || hero.currentSrc;
      if (!url) return;

      /* Salinan video yang sama, diblur lewat CSS di belakang video utama */
      clip = document.createElement("video");
      clip.className = "hero__backdrop-video";
      clip.muted = true;
      clip.loop = true;
      clip.autoplay = true;
      clip.setAttribute("playsinline", "");
      clip.setAttribute("aria-hidden", "true");
      clip.setAttribute("tabindex", "-1");
      clip.src = url;
      backdrop.appendChild(clip);
      var play = clip.play();
      if (play && play.catch) play.catch(function () {});
    }

    sync();
    if (mq.addEventListener) mq.addEventListener("change", sync);
    else if (mq.addListener) mq.addListener(sync);
  }

  /* ---------------------------------------------------
     12. Carousel ulasan — geser lewat panah / dot / usapan
     --------------------------------------------------- */
  function initTestimonialCarousel() {
    var root = document.querySelector("[data-carousel]");
    if (!root) return;
    var track = root.querySelector(".tcarousel__track");
    var slides = track ? Array.prototype.slice.call(track.children) : [];
    if (slides.length < 2) return;

    var prev = root.querySelector("[data-carousel-prev]");
    var next = root.querySelector("[data-carousel-next]");
    var dotsBox = root.querySelector("[data-carousel-dots]");
    var curEl = root.querySelector("[data-carousel-current]");
    var totalEl = root.querySelector("[data-carousel-total]");
    var index = 0;

    var dots = slides.map(function (slide, i) {
      if (!dotsBox) return null;
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Tampilkan ulasan ke-" + (i + 1));
      b.addEventListener("click", function () { go(i); });
      dotsBox.appendChild(b);
      return b;
    });

    function go(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = "translate3d(" + (-index * 100) + "%, 0, 0)";
      slides.forEach(function (s, n) {
        s.classList.toggle("is-active", n === index);
        s.setAttribute("aria-hidden", n === index ? "false" : "true");
      });
      dots.forEach(function (d, n) {
        if (!d) return;
        d.classList.toggle("is-active", n === index);
        d.setAttribute("aria-current", n === index ? "true" : "false");
      });
      if (curEl) curEl.textContent = index + 1;
      if (totalEl) totalEl.textContent = slides.length;
    }

    if (prev) prev.addEventListener("click", function () { go(index - 1); });
    if (next) next.addEventListener("click", function () { go(index + 1); });

    /* Panah keyboard saat fokus berada di dalam carousel */
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { go(index - 1); }
      else if (e.key === "ArrowRight") { go(index + 1); }
      else { return; }
      e.preventDefault();
    });

    /* Usapan jari di layar sentuh */
    var x0 = null;
    root.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });

    go(0);
  }

  /* ---------------------------------------------------
     13. Gulir roda yang halus (damped / glide)
     --------------------------------------------------- */
  function initSmoothScroll() {
    var root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    var EASE = 0.085;   /* makin kecil makin "melayang" */
    var SPEED = 0.82;   /* penyesuaian kecepatan dorongan roda */
    var LIMIT = 280;    /* batas lompatan satu kali dorong */

    var target = window.scrollY;
    var current = target;
    var running = false;

    /* Beberapa browser lama tak mengenal behavior "instant" */
    var supportsInstant = true;
    try { window.scrollTo({ top: window.scrollY, left: 0, behavior: "instant" }); }
    catch (err) { supportsInstant = false; }

    function maxScroll() {
      return Math.max(0, root.scrollHeight - window.innerHeight);
    }

    function begin() {
      if (running) return;
      running = true;
      /* Matikan scroll-behavior CSS selama animasi (untuk browser tanpa "instant") */
      if (!supportsInstant) root.style.scrollBehavior = "auto";
      requestAnimationFrame(step);
    }

    function end() {
      if (!running) return;
      running = false;
      if (!supportsInstant) root.style.scrollBehavior = "";
    }

    function write(y) {
      if (supportsInstant) window.scrollTo({ top: y, left: 0, behavior: "instant" });
      else window.scrollTo(0, y);
    }

    function step() {
      if (!running) return;
      var diff = target - current;
      if (Math.abs(diff) < 0.6) {
        current = target;
        write(current);
        end();
        return;
      }
      current += diff * EASE;
      write(current);
      requestAnimationFrame(step);
    }

    window.addEventListener("wheel", function (e) {
      if (e.ctrlKey || e.defaultPrevented) return;
      /* Geser mendatar (trackpad) dibiarkan alami */
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      var el = e.target;
      if (el && el.closest && el.closest(".navpanel, .lightbox, .pano, [data-native-scroll]")) return;

      var d = e.deltaY;
      if (e.deltaMode === 1) d *= 16;
      else if (e.deltaMode === 2) d *= window.innerHeight;
      d = Math.max(-LIMIT, Math.min(LIMIT, d)) * SPEED;

      e.preventDefault();
      target = Math.max(0, Math.min(maxScroll(), target + d));
      begin();
    }, { passive: false });

    /* Gulir dari sumber lain (keyboard, scrollbar, ponsel) — ikuti apa adanya */
    window.addEventListener("scroll", function () {
      if (Math.abs(window.scrollY - current) > 2) {
        current = target = window.scrollY;
        end();
      }
    }, { passive: true });

    /* Tautan jangkar diserahkan ke animasi scroll-behavior CSS */
    document.addEventListener("click", function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      current = target = window.scrollY;
      end();
    });

    window.addEventListener("resize", function () {
      target = Math.min(target, maxScroll());
    });
  }

  /* ---------------------------------------------------
     14. Virtual tour 360 derajat (proyeksi bola + hotspot)
     --------------------------------------------------- */
  function initPano360() {
    var modal = document.getElementById("pano");
    if (!modal) return;
    var stage = document.getElementById("panoStage");
    var strip = document.getElementById("panoStrip");
    var scenesBox = document.getElementById("panoScenes");
    var overlay = document.getElementById("panoHotspots");
    var infoCard = document.getElementById("panoInfo");
    var tabsEl = document.getElementById("panoTabs");
    var fsBtn = modal.querySelector("[data-pano-full]");
    var panoDialog = modal.querySelector(".pano__dialog");
    var triggers = document.querySelectorAll("[data-pano]");
    if (!stage || !strip || !triggers.length) return;

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var SPIN_IDLE = 2600;
    var AUTO_YAW = 0.045;
    var PITCH_MAX = 1.45;

    var mode = "flat";         /* "gl" = proyeksi bola, "flat" = geser biasa */
    var rafId = null, lastTime = 0, lastTouch = 0, dragging = false;
    var startX = 0, startY = 0, baseYaw = 0, basePitch = 0, baseOffset = 0;
    var opener = null;

    var imgs = [], period = 0, offset = 0;
    var yaw = 0, pitch = 0, fov = 1.05;
    var gl = null, prog = null, tex = null, uRes = null, uRot = null, uFov = null;
    var canvas = document.createElement("canvas");
    canvas.className = "pano__canvas";
    canvas.setAttribute("aria-hidden", "true");
    stage.insertBefore(canvas, strip);

    /* --- urutan ruang (dari markup halaman) --- */
    var scenes = [];
    if (scenesBox) {
      scenes = Array.prototype.map.call(scenesBox.querySelectorAll(".pano__scene"), function (el) {
        return {
          el: el,
          box: scenesBox,
          src: el.getAttribute("data-src"),
          sid: el.getAttribute("data-sid") || "",
          label: el.getAttribute("data-label") || "",
          set: el.getAttribute("data-set") || "",
          yaw0: parseFloat(el.getAttribute("data-yaw")) || 0,
          hots: Array.prototype.slice.call(el.querySelectorAll("[data-lon]"))
        };
      });
    }
    var allScenes = scenes.slice();   /* semua ruangan dari semua lokasi */
    var sceneIndex = -1;
    var startYaw = 0;
    var infoHot = null;
    var infoBody = null, typeTimer = null;

    var VERT = "attribute vec2 aPos;void main(){gl_Position=vec4(aPos,0.0,1.0);}";
    var FRAG = [
      "precision highp float;",
      "uniform sampler2D uTex;",
      "uniform vec2 uRes;",
      "uniform vec2 uRot;",
      "uniform float uFov;",
      "const float PI=3.141592653589793;",
      "void main(){",
      "  vec2 p=(gl_FragCoord.xy-0.5*uRes)/uRes.y;",
      "  float f=1.0/tan(uFov*0.5);",
      "  vec3 d=normalize(vec3(p.x,p.y,-f));",
      "  float cp=cos(uRot.y),sp=sin(uRot.y);",
      "  d=vec3(d.x,d.y*cp-d.z*sp,d.y*sp+d.z*cp);",
      "  float cy=cos(uRot.x),sy=sin(uRot.x);",
      "  d=vec3(d.x*cy+d.z*sy,d.y,-d.x*sy+d.z*cy);",
      "  float lon=atan(d.x,-d.z);",
      "  float lat=asin(clamp(d.y,-1.0,1.0));",
      "  gl_FragColor=texture2D(uTex,vec2(lon/(2.0*PI)+0.5,0.5-lat/PI));",
      "}"
    ].join("\n");

    function initGL() {
      if (gl !== null) return gl;
      try {
        gl = canvas.getContext("webgl", { antialias: true, alpha: false }) ||
             canvas.getContext("experimental-webgl");
      } catch (e) { gl = null; }
      if (!gl) { gl = false; return gl; }

      function shader(type, src) {
        var s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
      }
      var vs = shader(gl.VERTEX_SHADER, VERT);
      var fs = shader(gl.FRAGMENT_SHADER, FRAG);
      if (!vs || !fs) { gl = false; return gl; }

      prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { gl = false; return gl; }
      gl.useProgram(prog);

      var buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var aPos = gl.getAttribLocation(prog, "aPos");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      uRes = gl.getUniformLocation(prog, "uRes");
      uRot = gl.getUniformLocation(prog, "uRot");
      uFov = gl.getUniformLocation(prog, "uFov");
      tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.clearColor(0.02, 0.09, 0.13, 1);
      return gl;
    }

    function uploadTex(img) {
      if (!gl) return false;
      var w = img.naturalWidth, h = img.naturalHeight;
      if (w > 4096) {
        var k = 1;
        while (w / k > 4096) k *= 2;
        w = Math.round(w / k);
        h = Math.round(h / k);
      }
      var src = img;
      if (w !== img.naturalWidth) {
        var c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        c.getContext("2d").drawImage(img, 0, 0, w, h);
        src = c;
      }
      gl.bindTexture(gl.TEXTURE_2D, tex);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
      } catch (e) { return false; }
      var pot = (w & (w - 1)) === 0 && (h & (h - 1)) === 0;
      if (pot) {
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      }
      return true;
    }

    function resizeGL() {
      if (!gl) return;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var w = Math.max(1, Math.round(stage.clientWidth * dpr));
      var h = Math.max(1, Math.round(stage.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    }

    function drawGL() {
      if (!gl) return;
      gl.uniform2f(uRot, yaw, pitch);
      gl.uniform1f(uFov, fov);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    /* --- mode datar (cadangan bila WebGL tak tersedia) --- */
    function renderFlat() {
      if (period) offset = ((offset % period) + period) % period;
      strip.style.transform = "translate3d(" + -offset + "px,0,0)";
    }

    function buildFlat(src, probe) {
      strip.innerHTML = "";
      imgs = [];
      period = 0;
      offset = 0;
      var h = stage.clientHeight || 420;
      var w = Math.round((probe.naturalWidth * h) / probe.naturalHeight);
      if (!w) return;
      var span = stage.clientWidth || 900;
      var copies = Math.min(12, Math.max(4, Math.ceil(span / (2 * w)) + 2));
      for (var i = 0; i < copies; i++) {
        var im = document.createElement("img");
        im.src = src;
        im.alt = "";
        im.setAttribute("aria-hidden", "true");
        if (i % 2 === 1) im.className = "is-flip";
        im.style.width = w + "px";
        strip.appendChild(im);
        imgs.push(im);
      }
      period = w * 2;
      renderFlat();
    }

    function toast(msg) {
      var old = stage.querySelector(".pano__empty");
      if (old) old.parentNode.removeChild(old);
      var p = document.createElement("p");
      p.className = "pano__empty";
      p.textContent = msg;
      stage.appendChild(p);
      setTimeout(function () { if (p.parentNode) p.parentNode.removeChild(p); }, 2600);
    }

    /* --- hotspot: proyeksi posisi dunia ke layar --- */
    function positionHotspots() {
      if (!overlay || mode !== "gl" || sceneIndex < 0) return;
      var s = scenes[sceneIndex];
      if (!s) return;
      var W = stage.clientWidth, H = stage.clientHeight;
      if (!W || !H) return;
      var f = 1 / Math.tan(fov / 2);
      var cy = Math.cos(-yaw), sy = Math.sin(-yaw);
      var cp = Math.cos(-pitch), sp = Math.sin(-pitch);

      for (var i = 0; i < s.hots.length; i++) {
        var h = s.hots[i];
        var lon = parseFloat(h.getAttribute("data-lon")) || 0;
        var lat = parseFloat(h.getAttribute("data-lat")) || 0;
        var cl = Math.cos(lat);
        var vx = cl * Math.sin(lon);
        var vy = Math.sin(lat);
        var vz = -cl * Math.cos(lon);
        var ax = vx * cy + vz * sy;
        var az = -vx * sy + vz * cy;
        var by = vy * cp - az * sp;
        var bz = vy * sp + az * cp;
        if (bz > -0.001) {                     /* di belakang kamera */
          h.classList.add("is-behind");
          if (infoHot === h) closeInfo();
          continue;
        }
        var k = -f / bz;
        var sx = W / 2 + ax * k * H;
        var shy = H / 2 - by * k * H;
        if (sx < -30 || sx > W + 30 || shy < -30 || shy > H + 30) {  /* di luar panggung */
          h.classList.add("is-behind");
          if (infoHot === h) closeInfo();
          continue;
        }
        h.classList.remove("is-behind");
        h.classList.add("is-placed");
        /* hotspot info dipaku dari ujung pin (seperti penanda peta) */
        h.style.transform = "translate3d(" + sx + "px," + shy + "px,0) translate(-50%," +
          (h.getAttribute("data-hot") === "info" ? "-100%" : "-50%") + ")";
      }
    }

    function stopTyping() {
      if (typeTimer) {
        clearTimeout(typeTimer);
        typeTimer = null;
      }
      if (infoBody) infoBody.classList.remove("is-typing");
    }

    /* teks info langsung tampil penuh (tanpa efek ketik) */
    function startTyping(text) {
      stopTyping();
      if (infoBody) infoBody.textContent = text || "";
    }

    function openInfo(h) {
      if (!infoCard) return;
      stopTyping();
      infoCard.querySelector(".pano__info-title").textContent = h.getAttribute("data-info-title") || "";
      if (infoBody) infoBody.textContent = "";
      infoCard.hidden = false;
      infoHot = h;
      h.classList.add("is-open");
      stage.classList.add("has-interacted");
      startTyping(h.getAttribute("data-info-text") || "");
      var panel = infoCard.querySelector(".pano__popup-panel");
      if (panel && panel.focus) panel.focus({ preventScroll: true });
    }

    function closeInfo(refocus) {
      stopTyping();
      if (infoCard) infoCard.hidden = true;
      if (infoHot) {
        if (refocus === true && infoHot.focus) infoHot.focus({ preventScroll: true });
        infoHot.classList.remove("is-open");
        infoHot = null;
      }
    }

    /* --- muat panorama --- */
    function load(src, label) {
      strip.innerHTML = "";
      imgs = [];
      period = 0;
      offset = 0;
      stage.classList.remove("is-gl");

      var probe = new Image();
      probe.onload = function () {
        var ratio = probe.naturalWidth / probe.naturalHeight;
        if (ratio >= 1.8 && ratio <= 2.2 && initGL() && uploadTex(probe)) {
          mode = "gl";
          yaw = startYaw; pitch = 0; fov = 1.05;
          stage.classList.add("is-gl");
          resizeGL();
          drawGL();
          positionHotspots();
        } else {
          mode = "flat";
          buildFlat(src, probe);
        }
        startLoop();
      };
      probe.onerror = function () {
        stopLoop();
        toast("Virtual tour belum tersedia.");
      };
      probe.src = src;
    }

    /* tab pilihan ruangan: dibangun ulang saat lokasi berganti, selebihnya hanya menandai tab aktif */
    var tabsKey = "";
    function renderTabs() {
      if (!tabsEl) return;
      tabsEl.hidden = !scenes.length;
      var key = scenes.map(function (s) { return s.sid; }).join("|");
      if (key !== tabsKey) {
        tabsKey = key;
        tabsEl.innerHTML = "";
        scenes.forEach(function (s, i) {
          var b = document.createElement("button");
          b.type = "button";
          b.className = "pano__tab";
          b.setAttribute("role", "tab");
          b.textContent = s.label || s.sid;
          b.addEventListener("click", function () {
            if (i === sceneIndex) return;
            touched();
            showScene(i);
          });
          tabsEl.appendChild(b);
        });
      }
      Array.prototype.forEach.call(tabsEl.children, function (b, i) {
        var on = i === sceneIndex;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
        if (on) tabsEl.scrollLeft = b.offsetLeft - (tabsEl.clientWidth - b.offsetWidth) / 2;
      });
    }

    /* --- pergantian ruang --- */
    function showScene(i) {
      if (!scenes.length) return;
      if (i < 0 || i >= scenes.length) i = 0;
      sceneIndex = i;
      var s = scenes[i];
      renderTabs();
      scenes.forEach(function (o) { if (o.el.parentNode !== o.box) o.box.appendChild(o.el); });
      if (overlay) overlay.appendChild(s.el);
      closeInfo();
      startYaw = s.yaw0 || 0;              /* arah pandang awal sesuai isi ruang */
      load(s.src, s.label);
    }

    /* --- putar otomatis (hanya bila tidak ada hotspot) --- */
    function loop(now) {
      rafId = null;
      if (modal.hidden) return;
      var dt = lastTime ? Math.min(64, now - lastTime) : 16;
      lastTime = now;
      positionHotspots();
      if (!scenes.length && !dragging && !reduce && now - lastTouch > SPIN_IDLE) {
        if (mode === "gl") {
          yaw += AUTO_YAW * dt / 1000;
          drawGL();
        } else if (period) {
          offset += 55 * dt / 1000;
          renderFlat();
        }
      }
      rafId = requestAnimationFrame(loop);
    }

    function startLoop() {
      stopLoop();
      lastTime = 0;
      rafId = requestAnimationFrame(loop);
    }

    function stopLoop() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    }

    function touched() {
      lastTouch = performance.now();
      stage.classList.add("has-interacted");
    }

    /* pilih lokasi (data-pano-set tombol = id lokasi; "royal" cocok dengan "royal-kahuripan-glamping") */
    function pickSet(key) {
      allScenes.forEach(function (o) { if (o.el.parentNode !== o.box) o.box.appendChild(o.el); });
      var ids = [], seen = {}, chosen = "";
      allScenes.forEach(function (o) { if (o.set && !seen[o.set]) { seen[o.set] = 1; ids.push(o.set); } });
      if (key) {
        if (seen[key]) chosen = key;
        else ids.forEach(function (id) { if (!chosen && id.indexOf(key + "-") === 0) chosen = id; });
      }
      if (!chosen && ids.length) chosen = ids[0];
      scenes = chosen ? allScenes.filter(function (o) { return o.set === chosen; }) : allScenes.slice();
    }

    /* --- kontrol --- */
    function open(btn) {
      opener = btn;
      pickSet(btn.getAttribute("data-pano-set") || "");
      var direct = btn.getAttribute("data-pano-src") || "";
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      closeInfo();
      if (tabsEl) tabsEl.hidden = !scenes.length;

      if (scenes.length) {
        var idx = 0;
        if (direct) scenes.forEach(function (s, i) { if (s.src === direct) idx = i; });
        showScene(idx);
      } else if (direct) {
        load(direct, "");
      } else {
        modal.hidden = true;
        document.body.style.overflow = "";
        return;
      }
      stage.focus();
    }

    function close() {
      if (modal.hidden) return;
      if (fsOn()) toggleFs();          /* keluar layar penuh bersama modalnya */
      modal.hidden = true;
      stopLoop();
      closeInfo();
      strip.innerHTML = "";
      imgs = [];
      period = 0;
      mode = "flat";
      sceneIndex = -1;
      stage.classList.remove("is-gl", "is-dragging");
      document.body.style.overflow = "";
      if (opener) { opener.focus(); opener = null; }
    }

    triggers.forEach(function (btn) {
      btn.addEventListener("click", function () { open(btn); });
    });

    modal.querySelectorAll("[data-pano-close]").forEach(function (el) {
      el.addEventListener("click", close);
    });

    /* --- layar penuh: Fullscreen API bila tersedia, fallback kelas CSS --- */
    var fsForced = false;   /* mode fallback CSS: API tidak ada atau ditolak */
    function fsOn() {
      return !!(document.fullscreenElement || document.webkitFullscreenElement) || fsForced;
    }
    function syncFs() {
      if (!fsBtn || !panoDialog) return;
      var on = fsOn();
      panoDialog.classList.toggle("is-full", on);
      fsBtn.classList.toggle("is-active", on);
      fsBtn.setAttribute("aria-label", on ? "Keluar layar penuh" : "Layar penuh");
      fsBtn.setAttribute("title", on ? "Keluar layar penuh" : "Layar penuh");
      if (modal.hidden) return;
      if (mode === "gl") { resizeGL(); drawGL(); }
      else if (imgs.length) { buildFlat(imgs[0].src, imgs[0]); }
      positionHotspots();
    }
    function toggleFs() {
      if (fsOn()) {
        var el = document.fullscreenElement || document.webkitFullscreenElement;
        if (el) {
          var ex = document.exitFullscreen || document.webkitExitFullscreen;
          var pe = null;
          try { if (ex) pe = ex.call(document); } catch (err) {}
          if (pe && typeof pe.then === "function") { pe.then(syncFs, syncFs); return; }
          return;   /* tanpa promise: event fullscreenchange yang menyinkronkan */
        }
        fsForced = false;
        syncFs();
      } else {
        var req = panoDialog.requestFullscreen || panoDialog.webkitRequestFullscreen;
        if (req) {
          var pn = null;
          try { pn = req.call(panoDialog); } catch (err) {}
          if (pn && typeof pn.then === "function") {
            pn.then(syncFs, function () { fsForced = true; syncFs(); });   /* ditolak: fallback */
            return;
          }
          return;   /* API tanpa promise: event fullscreenchange yang menyinkronkan */
        }
        fsForced = true;
        syncFs();
      }
    }
    if (fsBtn) fsBtn.addEventListener("click", function () { touched(); toggleFs(); });
    document.addEventListener("fullscreenchange", syncFs);
    document.addEventListener("webkitfullscreenchange", syncFs);

    /* hotspot diaktifkan lewat pointer langsung: pointer ditangkap panggung
       untuk keperluan seret, sehingga event click tidak pernah sampai ke ikon */
    var hotDown = null, hotMoved = false, hotPointerAt = 0;

    /*function activateHot(h) {
      if (h.getAttribute("data-hot") === "info") {
        if (infoHot === h) closeInfo(true);
        else openInfo(h);
      }
    }*/
    function activateHot(h) {
      var kind = h.getAttribute("data-hot");
      if (kind === "info") {
        if (infoHot === h) closeInfo(true);
        else openInfo(h);
      } else if (kind === "nav") {
        var t = h.getAttribute("data-target"), found = -1, i;
        for (i = 0; i < scenes.length; i++) {
          if (scenes[i].sid === t) { found = i; break; }
        }
        if (found < 0) {          /* tujuan ada di lokasi lain */
          for (i = 0; i < allScenes.length; i++) {
            if (allScenes[i].sid === t) {
              pickSet(allScenes[i].set);
              found = scenes.indexOf(allScenes[i]);
              break;
            }
          }
        }
        if (found >= 0) { touched(); showScene(found); }
      }
    }

    allScenes.forEach(function (s) {
      s.hots.forEach(function (h) {
        /* cadangan keyboard / pembaca layar */
        h.addEventListener("click", function () {
          if (performance.now() - hotPointerAt < 400) return;   /* sudah ditangani pointer */
          activateHot(h);
        });
      });
    });

    if (infoCard) {
      infoBody = infoCard.querySelector(".pano__info-text");
      infoCard.querySelectorAll("[data-info-close]").forEach(function (el) {
        el.addEventListener("click", function () { closeInfo(true); });
      });
    }

    stage.addEventListener("pointerdown", function (e) {
      /* biarkan popup penjelasan & tab ruangan menangani kliknya
         sendiri — kalau panggung ikut menangkap pointer, tombol jadi mati */
      if (e.target && e.target.closest && e.target.closest(".pano__popup, .pano__tabs")) return;
      var tgt = e.target;
      hotDown = (tgt && tgt.closest) ? tgt.closest("[data-hot]") : null;
      hotMoved = false;
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      baseYaw = yaw;
      basePitch = pitch;
      baseOffset = offset;
      touched();
      stage.classList.add("is-dragging");
      if (stage.setPointerCapture) { try { stage.setPointerCapture(e.pointerId); } catch (err) {} }
    });

    stage.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      touched();
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      if (hotDown && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) hotMoved = true;
      if (mode === "gl") {
        var k = fov / Math.max(1, stage.clientHeight);
        yaw = baseYaw - dx * k;
        pitch = Math.max(-PITCH_MAX, Math.min(PITCH_MAX, basePitch + dy * k));
        drawGL();
      } else {
        offset = baseOffset - dx;
        renderFlat();
      }
    });

    ["pointerup", "pointercancel", "pointerleave"].forEach(function (ev) {
      stage.addEventListener(ev, function () {
        if (hotDown) {
          var h = hotDown, moved = hotMoved;
          hotDown = null;
          if (!moved) {                       /* ketukan pendek = klik ikon */
            hotPointerAt = performance.now();
            activateHot(h);
          }
        }
        dragging = false;
        lastTouch = performance.now();
        stage.classList.remove("is-dragging");
      });
    });

    stage.addEventListener("wheel", function (e) {
      e.preventDefault();
      var d = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      if (e.deltaMode === 1) d *= 16;
      else if (e.deltaMode === 2) d *= 40;
      touched();
      if (mode === "gl") {
        fov = Math.max(0.45, Math.min(1.45, fov + d * 0.0012));
        drawGL();
      } else {
        offset += d;
        renderFlat();
      }
    }, { passive: false });

    stage.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      e.preventDefault();
      touched();
      if (mode === "gl") {
        if (e.key === "ArrowLeft") yaw -= 0.09;
        if (e.key === "ArrowRight") yaw += 0.09;
        if (e.key === "ArrowUp") pitch = Math.min(PITCH_MAX, pitch + 0.07);
        if (e.key === "ArrowDown") pitch = Math.max(-PITCH_MAX, pitch - 0.07);
        drawGL();
      } else {
        if (e.key === "ArrowLeft") offset -= 80;
        if (e.key === "ArrowRight") offset += 80;
        renderFlat();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") {
        if (infoCard && !infoCard.hidden) closeInfo(true);
        else if (fsOn()) { e.preventDefault(); toggleFs(); }   /* Esc pertama: keluar layar penuh */
        else close();
      }
    });

    window.addEventListener("resize", function () {
      if (modal.hidden) return;
      if (mode === "gl") {
        resizeGL();
        drawGL();
      } else if (imgs.length) {
        buildFlat(imgs[0].src, imgs[0]);
      }
      positionHotspots();
    });
  }

    /* ---------------------------------------------------
     14b. Hotspot dari editor (assets/data/hotspot.js)
     --------------------------------------------------- */
    function applyHotspots() {
    var data = window.HOTSPOTS;
    if (!data) return;
    var files = window.HOTSPOT_FILES || {
      "halaman": "VIlla Halaman-8192.webp",
      "kamar-mandi": "Villa Kamar mandi -8192.webp",
      "lemari": "Villa Lemari pakaian-8192.webp",
      "parkiran": "Villa Parkiran-8192.webp",
      "r-keluarga": "Villa R keluarga-8192.webp",
      "ruang-belakang": "Villa ruangan belakang-8192.webp"
    };
    var titles = window.HOTSPOT_TITLES || {};
    /* lokasi -> {title, dir, rooms:[id scene]} ditulis editor; bila tidak ada, semua ruang dianggap satu lokasi "villa" */
    var locs = window.HOTSPOT_LOCATIONS || {
      villa: { title: "Villa", dir: "assets/img/360/villa/", rooms: Object.keys(files) }
    };

    var css = document.createElement("style");
    css.textContent =
      ".pano__hs{position:absolute;left:0;top:0;width:44px;height:44px;padding:0;border:3px solid #fff;" +
      "border-radius:50%;background:#e8863a;cursor:pointer;pointer-events:auto;opacity:0;" +
      "transition:opacity .2s;box-shadow:0 2px 8px rgba(0,0,0,.4)}" +
      ".pano__hs--nav{background:#4fb286}" +
      ".pano__hs--info{margin-top:22px}" +
      ".pano__hs.has-icon{background:none;border:0;box-shadow:none}" +
      ".pano__hs img{width:100%;height:100%;display:block;pointer-events:none}" +
      ".pano__hs.is-placed{opacity:1}" +
      ".pano__hs.is-behind{opacity:0;pointer-events:none}";
    document.head.appendChild(css);

    var box = document.getElementById("panoScenes");
    if (!box) return;

    function norm(p) {
      p = (p || "").split("?")[0];
      try { p = decodeURIComponent(p); } catch (e) {}
      return p.toLowerCase();
    }
    /* scene lama di HTML dipakai hanya sebagai sumber arah pandang awal & hotspot cadangan */
    var legacy = Array.prototype.slice.call(box.querySelectorAll(".pano__scene"));
    function legacyFor(file) {
      var f = String(file).toLowerCase();
      for (var i = 0; i < legacy.length; i++) {
        var s = norm(legacy[i].getAttribute("data-src"));
        if (s.slice(-f.length) === f) return legacy[i];
      }
      return null;
    }

    function makePin(h) {
      var b = document.createElement("button");
      var kind = h.type === "nav" ? "nav" : "info";
      b.type = "button";
      b.className = "pano__hs pano__hs--" + kind;
      b.setAttribute("data-hot", kind);
      b.setAttribute("data-lon", (h.yaw * Math.PI / 180).toFixed(5));
      b.setAttribute("data-lat", (h.pitch * Math.PI / 180).toFixed(5));
      b.setAttribute("aria-label", h.label || kind);
      b.title = h.label || "";
      if (kind === "nav") b.setAttribute("data-target", h.target || "");
      else {
        b.setAttribute("data-info-title", h.label || "");
        b.setAttribute("data-info-text", h.text || "");
      }
      var sz = parseFloat(h.size);  /* ukuran pin dari editor (px) */
      if (sz > 0) {
        b.style.width = b.style.height = sz + "px";
        if (kind === "info") b.style.marginTop = (sz / 2) + "px";
      }
      if (h.icon) {
        var im = document.createElement("img");
        im.src = h.icon; im.alt = "";
        b.appendChild(im);
        b.classList.add("has-icon");
      }
      return b;
    }

    var made = [];
    Object.keys(locs).forEach(function (lid) {
      var L = locs[lid] || {};
      var dir = L.dir || "";
      if (dir && dir.slice(-1) !== "/") dir += "/";
      (L.rooms || []).forEach(function (sid) {
        var file = files[sid];
        if (!file) return;
        var old = legacyFor(file);
        var el = document.createElement("div");
        el.className = "pano__scene";
        el.setAttribute("data-src", dir + file);
        el.setAttribute("data-label", titles[sid] || (old && old.getAttribute("data-label")) || sid);
        el.setAttribute("data-yaw", (old && old.getAttribute("data-yaw")) || "0");
        el.setAttribute("data-sid", sid);     /* id unik per ruangan, tidak lagi bergantung nama file */
        el.setAttribute("data-set", lid);     /* id lokasi, dipakai data-pano-set pada tombol Virtual Tour */
        var pins = data[sid] || [];
        if (pins.length) {
          pins.forEach(function (h) { el.appendChild(makePin(h)); });
        } else if (old) {
          old.querySelectorAll("[data-lon]").forEach(function (x) { el.appendChild(x.cloneNode(true)); });
        }
        made.push(el);
      });
    });
    if (!made.length) return;
    legacy.forEach(function (el) { el.remove(); });
    made.forEach(function (el) { box.appendChild(el); });
  }

  /* ---------------------------------------------------
     Jalankan semua
     --------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyConfig();
    applyImages();
    initHeroBackdrop();
    initTestimonialCarousel();
    initHeader();
    initNavPanel();
    initActiveNav();
    initReveal();
    initImageFallbacks();
    initGalleryFilter();
    initLightbox();
    initAdaptiveGallery();
    initContactForm();
    initYear();
    applyHotspots();
    initPano360();
    initSmoothScroll();
  });
})();
