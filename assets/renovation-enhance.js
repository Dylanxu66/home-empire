(function () {
  var isRenovation = /\/renovation\/?$/.test(window.location.pathname);
  if (!isRenovation) return;

  var copy = {
    zh: {
      eyebrow: "RENOVATION FILM",
      title: "把装修方案做成住客愿意下单的空间",
      body: "装修页不应该只堆价格。Home Empire 会从户型、预算、采购、施工到 Airbnb 上架氛围一起规划，让空间看起来更真实、更耐看，也更适合拍照成交。",
      step1Title: "现场沟通",
      step1Body: "先看户型、采光、动线和预算，不盲目堆装饰。",
      step2Title: "材料与施工",
      step2Body: "把家具、电器、灯光、软装和施工节奏统一管理。",
      step3Title: "成品上架",
      step3Body: "按短租照片和住客体验调整细节，让空间更容易被选择。",
      badge1: "DESIGN",
      badge2: "SITE",
      badge3: "READY",
      caption: "Home Empire renovation workflow",
      small1: "Planning",
      small2: "Build"
    },
    en: {
      eyebrow: "RENOVATION FILM",
      title: "A renovation package built for bookings, not just decoration",
      body: "A renovation page should not only list prices. Home Empire plans layout, budget, sourcing, contractor coordination and Airbnb-ready styling together, so the finished space feels real, photogenic and easier to book.",
      step1Title: "Site discussion",
      step1Body: "We study layout, light, movement and budget before adding decorative items.",
      step2Title: "Materials and build",
      step2Body: "Furniture, appliances, lighting, styling and site progress are managed as one plan.",
      step3Title: "Ready to list",
      step3Body: "Details are adjusted for short-stay photography and guest experience.",
      badge1: "DESIGN",
      badge2: "SITE",
      badge3: "READY",
      caption: "Home Empire renovation workflow",
      small1: "Planning",
      small2: "Build"
    },
    ms: {
      eyebrow: "FILEM RENOVASI",
      title: "Pakej renovasi yang dibina untuk tempahan, bukan sekadar hiasan",
      body: "Halaman renovasi tidak sepatutnya hanya memaparkan harga. Home Empire merancang susun atur, bajet, pembelian, koordinasi kontraktor dan gaya Airbnb-ready sebagai satu proses supaya ruang akhir kelihatan sebenar, cantik untuk foto dan lebih mudah ditempah.",
      step1Title: "Perbincangan tapak",
      step1Body: "Kami menilai susun atur, cahaya, pergerakan dan bajet sebelum menambah hiasan.",
      step2Title: "Bahan dan kerja bina",
      step2Body: "Perabot, peralatan, lampu, gaya dan kemajuan tapak diurus sebagai satu pelan.",
      step3Title: "Sedia untuk disenaraikan",
      step3Body: "Butiran disesuaikan untuk fotografi penginapan pendek dan pengalaman tetamu.",
      badge1: "REKA BENTUK",
      badge2: "TAPAK",
      badge3: "SEDIA",
      caption: "Aliran kerja renovasi Home Empire",
      small1: "Perancangan",
      small2: "Bina"
    }
  };

  var currentLang = "zh";

  function getLangFromButton(button) {
    var testId = button && button.getAttribute("data-testid");
    if (!testId) return currentLang;
    if (testId.indexOf("btn-lang-en") >= 0) return "en";
    if (testId.indexOf("btn-lang-ms") >= 0) return "ms";
    return "zh";
  }

  function setText(root) {
    var dictionary = copy[currentLang] || copy.zh;
    root.querySelectorAll("[data-he-copy]").forEach(function (node) {
      var key = node.getAttribute("data-he-copy");
      if (dictionary[key]) node.textContent = dictionary[key];
    });
  }

  function lazyLoadVideos(root) {
    var videos = Array.prototype.slice.call(root.querySelectorAll("video[data-src]"));
    if (!("IntersectionObserver" in window)) {
      videos.forEach(loadVideo);
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        loadVideo(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "240px 0px" });
    videos.forEach(function (video) { observer.observe(video); });
  }

  function loadVideo(video) {
    if (!video || video.dataset.loaded) return;
    var source = document.createElement("source");
    source.src = video.getAttribute("data-src");
    source.type = "video/mp4";
    video.appendChild(source);
    video.dataset.loaded = "true";
    video.load();
    var play = video.play();
    if (play && typeof play.catch === "function") play.catch(function () {});
  }

  function buildFilmSection() {
    var section = document.createElement("section");
    section.className = "he-renovation-film";
    section.innerHTML = [
      '<div class="he-renovation-film__inner">',
      '  <div class="he-renovation-film__media">',
      '    <video muted loop playsinline preload="metadata" poster="/images/skyline2-living1.jpg" data-src="https://videos.pexels.com/video-files/7578552/7578552-sd_960_540_30fps.mp4"></video>',
      '    <div class="he-renovation-film__caption">',
      '      <span data-he-copy="badge1"></span>',
      '      <span data-he-copy="caption"></span>',
      '    </div>',
      '  </div>',
      '  <div class="he-renovation-film__panel">',
      '    <p class="he-renovation-film__eyebrow" data-he-copy="eyebrow"></p>',
      '    <h2 class="he-renovation-film__title" data-he-copy="title"></h2>',
      '    <p class="he-renovation-film__body" data-he-copy="body"></p>',
      '    <div class="he-renovation-film__steps">',
      '      <div class="he-renovation-film__step"><strong>01</strong><span><b data-he-copy="step1Title"></b><small data-he-copy="step1Body"></small></span></div>',
      '      <div class="he-renovation-film__step"><strong>02</strong><span><b data-he-copy="step2Title"></b><small data-he-copy="step2Body"></small></span></div>',
      '      <div class="he-renovation-film__step"><strong>03</strong><span><b data-he-copy="step3Title"></b><small data-he-copy="step3Body"></small></span></div>',
      '    </div>',
      '    <div class="he-renovation-film__smallgrid">',
      '      <div class="he-renovation-film__small"><video muted loop playsinline preload="metadata" poster="/images/skyline-art.jpg" data-src="https://videos.pexels.com/video-files/6474253/6474253-sd_960_540_25fps.mp4"></video><span data-he-copy="small1"></span></div>',
      '      <div class="he-renovation-film__small"><video muted loop playsinline preload="metadata" poster="/images/belfield-living1.jpg" data-src="https://videos.pexels.com/video-files/1538132/1538132-sd_960_540_30fps.mp4"></video><span data-he-copy="small2"></span></div>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join("");
    setText(section);
    lazyLoadVideos(section);
    return section;
  }

  function mount() {
    document.body.classList.add("he-renovation-page");
    var main = document.querySelector("#root main");
    if (!main) return false;
    if (!document.querySelector(".he-renovation-film")) {
      var sections = main.querySelectorAll("section");
      if (sections.length < 2) return false;
      sections[1].insertAdjacentElement("afterend", buildFilmSection());
    } else {
      setText(document.querySelector(".he-renovation-film"));
    }
    return true;
  }

  var tries = 0;
  var timer = window.setInterval(function () {
    tries += 1;
    if (mount() || tries > 80) window.clearInterval(timer);
  }, 100);

  document.addEventListener("click", function (event) {
    var button = event.target.closest && event.target.closest("[data-testid^='btn-lang-']");
    if (!button) return;
    currentLang = getLangFromButton(button);
    window.setTimeout(function () {
      mount();
    }, 80);
  });

  var observer = new MutationObserver(function () {
    if (!document.querySelector(".he-renovation-film")) mount();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
