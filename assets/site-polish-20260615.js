(function () {
  var renovationTerms = /RENOVATION FILM|RENOVATION PORTFOLIO|RENOVATION PACKAGE|装修方案做成|装修报价|FILEM RENOVASI|PORTFOLIO RENOVASI/i;
  var serviceTerms = /装修设计|装修方案|装修报价|Renovation|Renovasi/i;

  function pathName() {
    return window.location.pathname.replace(/\/+$/, "") || "/";
  }

  function isRenovationPage() {
    return pathName() === "/renovation";
  }

  function isHomePage() {
    return pathName() === "/";
  }

  function mainNode() {
    return document.querySelector("#root main") || document.querySelector("main");
  }

  function polishLoader() {
    var loader = document.querySelector("#he-page-loader");
    if (!loader || loader.dataset.hePolished) return;
    loader.dataset.hePolished = "true";
    loader.classList.add("he-loader-redesign");
    var frame = document.createElement("div");
    frame.className = "he-loader-frame";
    frame.innerHTML = [
      '<div class="he-loader-mark"><span>HE</span></div>',
      '<div class="he-loader-copy">',
      '  <strong>HOME EMPIRE</strong>',
      '  <small>Property Management</small>',
      '</div>',
      '<div class="he-loader-track"><i></i></div>'
    ].join("");
    loader.appendChild(frame);

    var removeLoader = function () {
      if (!loader || !loader.parentNode) return;
      loader.classList.add("he-loader-done");
      window.setTimeout(function () {
        if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
      }, 420);
    };
    window.setTimeout(removeLoader, document.querySelector("main") ? 1400 : 2600);
    window.setTimeout(removeLoader, 3600);
  }

  function addHomeVideo() {
    if (!isHomePage()) return;
    document.body.classList.add("he-home-video");
    var main = mainNode();
    if (!main || document.querySelector("#he-home-video-bg")) return;
    var hero = main.querySelector("section");
    if (!hero) return;
    var wrap = document.createElement("div");
    wrap.id = "he-home-video-bg";
    wrap.setAttribute("aria-hidden", "true");
    wrap.innerHTML = '<video muted autoplay loop playsinline preload="metadata" poster="/images/hero-slide-1.png"><source src="https://videos.pexels.com/video-files/7578552/7578552-sd_960_540_30fps.mp4" type="video/mp4"></video>';
    hero.insertBefore(wrap, hero.firstChild);
  }

  function removeNode(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
  }

  function cleanRenovationFromOtherPages() {
    if (isRenovationPage()) return;
    var main = mainNode();
    if (!main) return;

    main.querySelectorAll(".he-renovation-film, .he-design-gallery").forEach(function (node) {
      removeNode(node.closest("section") || node);
    });

    if (!isHomePage()) {
      main.querySelectorAll("video").forEach(function (node) {
        removeNode(node.closest("section") || node);
      });
    }

    Array.prototype.slice.call(main.querySelectorAll("section")).forEach(function (section) {
      var text = (section.innerText || "").replace(/\s+/g, " ").trim();
      if (renovationTerms.test(text)) removeNode(section);
    });

    if (/^\/(services|spaces)$/.test(pathName())) {
      Array.prototype.slice.call(main.querySelectorAll("article, li, [class*='card'], [class*='Card'], .group")).forEach(function (node) {
        var text = (node.innerText || "").replace(/\s+/g, " ");
        if (serviceTerms.test(text) && text.length < 260) removeNode(node);
      });
      Array.prototype.slice.call(main.querySelectorAll("h2, h3, h4, strong")).forEach(function (node) {
        var text = (node.textContent || "").trim();
        if (!/^(装修翻新|装修设计|Renovation|Renovasi)$/i.test(text)) return;
        var card = node.closest(".group") || node.closest("article") || node.parentElement;
        while (card && card.parentElement && card.parentElement !== main && !/grid|flex/.test(card.parentElement.className || "")) {
          card = card.parentElement;
        }
        removeNode(card);
      });
    }
  }

  function run() {
    polishLoader();
    addHomeVideo();
    cleanRenovationFromOtherPages();
  }

  var tries = 0;
  var timer = window.setInterval(function () {
    tries += 1;
    run();
    if (tries > 80) window.clearInterval(timer);
  }, 100);

  new MutationObserver(run).observe(document.documentElement, { childList: true, subtree: true });
})();
