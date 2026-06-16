(function () {
  if (!/\/renovation\/?$/.test(window.location.pathname)) return;

  var imageBase = "/images/renovation-design/project-";
  var displayImages = [
    1, 2, 3, 4, 5, 7, 9, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67
  ];
  var lang = "zh";
  var navCopy = {
    zh: {
      home: "首页",
      services: "服务",
      renovation: "装修方案",
      spaces: "精选空间",
      mm2h: "第二家园",
      about: "关于我们",
      contact: "联系"
    },
    en: {
      home: "Home",
      services: "Services",
      renovation: "Renovation",
      spaces: "Spaces",
      mm2h: "MM2H",
      about: "About",
      contact: "Contact"
    },
    ms: {
      home: "Utama",
      services: "Servis",
      renovation: "Renovasi",
      spaces: "Ruang",
      mm2h: "MM2H",
      about: "Tentang",
      contact: "Hubungi"
    }
  };
  var copy = {
    zh: {
      eyebrow: "HOME EMPIRE RENOVATION",
      title: "装修设计",
      intro: "真实空间、真实细节、真实交付。以下版面只展示 Home Empire 装修设计图片资料。",
      feature: "精选空间",
      gallery: "完整图库",
      note: "每个房间的采光、比例、动线和软装氛围都不同，设计应当跟着空间本身走。"
    },
    en: {
      eyebrow: "HOME EMPIRE RENOVATION",
      title: "Design Portfolio",
      intro: "Real spaces, real details, real delivery. This page only showcases Home Empire renovation design images.",
      feature: "Featured Spaces",
      gallery: "Full Gallery",
      note: "Every unit has its own light, scale, flow and styling mood. The design should follow the space itself."
    },
    ms: {
      eyebrow: "HOME EMPIRE RENOVATION",
      title: "Portfolio Reka Bentuk Renovasi",
      intro: "Ruang sebenar, butiran sebenar dan hasil sebenar. Halaman ini hanya memaparkan imej reka bentuk renovasi Home Empire.",
      feature: "Ruang Pilihan",
      gallery: "Galeri Penuh",
      note: "Setiap unit mempunyai cahaya, skala, aliran dan suasana gaya yang tersendiri. Reka bentuk perlu mengikut ruang sebenar."
    }
  };

  function src(index) {
    return imageBase + String(index).padStart(2, "0") + ".jpg";
  }

  function t(key) {
    return (copy[lang] || copy.zh)[key];
  }

  function image(index, className) {
    return '<figure class="' + className + '"><img loading="lazy" decoding="async" src="' + src(index) + '" alt="Home Empire renovation design ' + index + '"></figure>';
  }

  function updateShell() {
    var labels = navCopy[lang] || navCopy.zh;
    Object.keys(labels).forEach(function (key) {
      var node = document.querySelector("[data-he-nav='" + key + "']");
      if (node) node.textContent = labels[key];
    });
    document.querySelectorAll("[data-testid^='btn-lang-']").forEach(function (button) {
      button.setAttribute("aria-pressed", getLang(button) === lang ? "true" : "false");
    });
    document.documentElement.lang = lang === "ms" ? "ms" : lang === "en" ? "en" : "zh";
  }

  function render() {
    var main = document.querySelector("#root main") || document.querySelector("main");
    if (!main) return false;
    document.body.classList.add("he-renovation-page", "he-renovation-redesign");
    updateShell();

    var heroImages = displayImages.slice(0, 3);
    var sliderImages = displayImages.slice(3, 16);
    var galleryImages = displayImages.slice(16);

    main.innerHTML = [
      '<section class="he-reno-hero">',
      '  <div class="he-reno-hero__image he-reno-hero__image--main"><img src="' + src(heroImages[0]) + '" alt="Home Empire renovation design"></div>',
      '  <div class="he-reno-hero__image he-reno-hero__image--top"><img src="' + src(heroImages[1]) + '" alt="Home Empire renovation design"></div>',
      '  <div class="he-reno-hero__image he-reno-hero__image--bottom"><img src="' + src(heroImages[2]) + '" alt="Home Empire renovation design"></div>',
      '  <div class="he-reno-hero__copy">',
      '    <p>' + t("eyebrow") + '</p>',
      '    <h1>' + t("title") + '</h1>',
      '    <span>' + t("intro") + '</span>',
      '  </div>',
      '</section>',
      '<section class="he-reno-slider">',
      '  <div class="he-reno-section-head">',
      '    <p>' + t("feature") + '</p>',
      '    <h2>' + t("note") + '</h2>',
      '  </div>',
      '  <div class="he-reno-slider__rail" aria-label="' + t("feature") + '">',
      sliderImages.map(function (index) { return image(index, "he-reno-slider__item"); }).join(""),
      '  </div>',
      '</section>',
      '<section class="he-reno-gallery">',
      '  <div class="he-reno-section-head he-reno-section-head--tight">',
      '    <p>' + t("gallery") + '</p>',
      '  </div>',
      '  <div class="he-reno-gallery__grid">',
      galleryImages.map(function (index) { return image(index, "he-reno-gallery__item"); }).join(""),
      '  </div>',
      '</section>'
    ].join("");

    return true;
  }

  function getLang(button) {
    var id = button && button.getAttribute("data-testid");
    if (id && id.indexOf("btn-lang-en") >= 0) return "en";
    if (id && id.indexOf("btn-lang-ms") >= 0) return "ms";
    return "zh";
  }

  var tries = 0;
  var timer = window.setInterval(function () {
    tries += 1;
    if (render() || tries > 80) window.clearInterval(timer);
  }, 100);

  document.addEventListener("click", function (event) {
    var button = event.target.closest && event.target.closest("[data-testid^='btn-lang-']");
    if (!button) return;
    lang = getLang(button);
    window.setTimeout(render, 120);
  });
})();
