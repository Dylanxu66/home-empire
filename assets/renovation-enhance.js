(function () {
  if (!/\/renovation\/?$/.test(window.location.pathname)) return;

  var totalImages = 68;
  var imageBase = "/images/renovation-design/project-";
  var lang = "zh";
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

  function render() {
    var main = document.querySelector("#root main") || document.querySelector("main");
    if (!main) return false;
    document.body.classList.add("he-renovation-page", "he-renovation-redesign");

    var featureImages = [1, 2, 3, 4, 5, 6, 7, 8];
    var allImages = [];
    for (var i = 1; i <= totalImages; i += 1) allImages.push(i);

    main.innerHTML = [
      '<section class="he-reno-hero">',
      '  <div class="he-reno-hero__image he-reno-hero__image--main"><img src="' + src(1) + '" alt="Home Empire renovation design"></div>',
      '  <div class="he-reno-hero__image he-reno-hero__image--top"><img src="' + src(2) + '" alt="Home Empire renovation design"></div>',
      '  <div class="he-reno-hero__image he-reno-hero__image--bottom"><img src="' + src(3) + '" alt="Home Empire renovation design"></div>',
      '  <div class="he-reno-hero__copy">',
      '    <p>' + t("eyebrow") + '</p>',
      '    <h1>' + t("title") + '</h1>',
      '    <span>' + t("intro") + '</span>',
      '  </div>',
      '</section>',
      '<section class="he-reno-feature">',
      '  <div class="he-reno-section-head">',
      '    <p>' + t("feature") + '</p>',
      '    <h2>' + t("note") + '</h2>',
      '  </div>',
      '  <div class="he-reno-feature__grid">',
      featureImages.map(function (index) { return image(index, "he-reno-feature__item"); }).join(""),
      '  </div>',
      '</section>',
      '<section class="he-reno-gallery">',
      '  <div class="he-reno-section-head he-reno-section-head--tight">',
      '    <p>' + t("gallery") + '</p>',
      '  </div>',
      '  <div class="he-reno-gallery__grid">',
      allImages.map(function (index) { return image(index, "he-reno-gallery__item"); }).join(""),
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
