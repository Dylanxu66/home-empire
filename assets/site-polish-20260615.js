(function () {
  var renovationTerms = /RENOVATION FILM|RENOVATION PORTFOLIO|RENOVATION PACKAGE|装修方案做成|装修报价|FILEM RENOVASI|PORTFOLIO RENOVASI/i;
  var serviceTerms = /装修设计|装修方案|装修报价|Renovation|Renovasi/i;
  var staticRenovationUrl = "/renovation/?v=20260709a";
  var defaultLang = "en";
  var langStorageKey = "hePreferredLang20260709";
  var langOrder = ["en", "zh", "ms"];
  var currentLang = preferredLang();
  var legalCopy = {
    privacy: {
      zh: {
        eyebrow: "隐私政策",
        title: "隐私政策",
        updated: "最后更新：2026年5月",
        sections: [
          ["我们收集的信息", "当您通过表单、WhatsApp、电话或电子邮件联系我们时，我们可能收集您的姓名、联系方式、房源需求和沟通记录。"],
          ["我们如何使用信息", "这些信息仅用于回复咨询、安排服务、管理预订、提供物业管理支持，以及改进 Home Empire 的服务体验。"],
          ["资料保护", "我们不会出售您的个人资料。只有在提供服务、遵守法律或获得您同意时，才会与必要合作方分享信息。"],
          ["联系我们", "如需查询、更正或删除个人资料，请通过网站联系 Home Empire。"]
        ]
      },
      en: {
        eyebrow: "Privacy Policy",
        title: "Privacy Policy",
        updated: "Last updated: May 2026",
        sections: [
          ["Information We Collect", "When you contact us through forms, WhatsApp, phone or email, we may collect your name, contact details, property requirements and conversation records."],
          ["How We Use Information", "We use this information to reply to enquiries, arrange services, manage bookings, support property management work and improve the Home Empire service experience."],
          ["Data Protection", "We do not sell personal information. We only share information with necessary service partners when required to deliver services, comply with law or with your consent."],
          ["Contact", "To request access, correction or deletion of personal information, please contact Home Empire through this website."]
        ]
      },
      ms: {
        eyebrow: "Dasar Privasi",
        title: "Dasar Privasi",
        updated: "Dikemas kini: Mei 2026",
        sections: [
          ["Maklumat Yang Kami Kumpul", "Apabila anda menghubungi kami melalui borang, WhatsApp, telefon atau e-mel, kami mungkin mengumpul nama, maklumat hubungan, keperluan hartanah dan rekod komunikasi anda."],
          ["Cara Kami Menggunakan Maklumat", "Maklumat ini digunakan untuk menjawab pertanyaan, mengatur perkhidmatan, mengurus tempahan, menyokong pengurusan hartanah dan menambah baik pengalaman perkhidmatan Home Empire."],
          ["Perlindungan Data", "Kami tidak menjual maklumat peribadi. Maklumat hanya dikongsi dengan rakan perkhidmatan yang perlu apabila diperlukan untuk menyediakan perkhidmatan, mematuhi undang-undang atau dengan persetujuan anda."],
          ["Hubungi Kami", "Untuk meminta akses, pembetulan atau pemadaman maklumat peribadi, sila hubungi Home Empire melalui laman web ini."]
        ]
      }
    },
    terms: {
      zh: {
        eyebrow: "服务条款",
        title: "服务条款",
        updated: "最后更新：2026年5月",
        sections: [
          ["网站使用", "访问和使用本网站，即表示您同意遵守本服务条款。本网站由 HOME EMPIRE GROUP SDN. BHD. 运营。"],
          ["服务说明", "网站内容用于介绍物业管理、短租管理、MM2H 相关协助和装修设计服务。实际服务范围以双方确认的报价或协议为准。"],
          ["信息准确性", "我们会尽力保持网站信息准确，但房源、服务内容、价格或可用性可能因实际情况调整。"],
          ["责任限制", "因使用本网站或第三方链接产生的间接损失，Home Empire 不承担超出法律规定范围的责任。"]
        ]
      },
      en: {
        eyebrow: "Terms of Service",
        title: "Terms of Service",
        updated: "Last updated: May 2026",
        sections: [
          ["Use of Website", "By accessing this website, you agree to follow these terms. This website is operated by HOME EMPIRE GROUP SDN. BHD."],
          ["Service Information", "The website introduces property management, short-stay management, MM2H assistance and renovation design services. Actual scope is based on confirmed quotations or agreements."],
          ["Accuracy", "We work to keep information accurate, but property details, services, pricing and availability may change according to actual conditions."],
          ["Limitation of Liability", "Home Empire is not liable for indirect loss arising from website use or third-party links beyond the extent required by law."]
        ]
      },
      ms: {
        eyebrow: "Terma Perkhidmatan",
        title: "Terma Perkhidmatan",
        updated: "Dikemas kini: Mei 2026",
        sections: [
          ["Penggunaan Laman Web", "Dengan mengakses laman web ini, anda bersetuju untuk mematuhi terma ini. Laman web ini dikendalikan oleh HOME EMPIRE GROUP SDN. BHD."],
          ["Maklumat Perkhidmatan", "Laman web ini memperkenalkan pengurusan hartanah, pengurusan penginapan jangka pendek, bantuan MM2H dan perkhidmatan reka bentuk renovasi. Skop sebenar adalah berdasarkan sebut harga atau perjanjian yang disahkan."],
          ["Ketepatan Maklumat", "Kami berusaha memastikan maklumat tepat, tetapi butiran hartanah, perkhidmatan, harga dan ketersediaan mungkin berubah mengikut keadaan sebenar."],
          ["Had Liabiliti", "Home Empire tidak bertanggungjawab atas kerugian tidak langsung akibat penggunaan laman web atau pautan pihak ketiga melebihi had yang ditetapkan undang-undang."]
        ]
      }
    }
  };

  function pathName() {
    return window.location.pathname.replace(/\/+$/, "") || "/";
  }

  function isRenovationPage() {
    return pathName() === "/renovation";
  }

  function isHomePage() {
    return pathName() === "/";
  }

  function getLang(button) {
    var id = button && button.getAttribute("data-testid");
    if (id && id.indexOf("btn-lang-en") >= 0) return "en";
    if (id && id.indexOf("btn-lang-ms") >= 0) return "ms";
    return "zh";
  }

  function preferredLang() {
    try {
      return window.localStorage.getItem(langStorageKey) || defaultLang;
    } catch (error) {
      return defaultLang;
    }
  }

  function savePreferredLang(lang) {
    try {
      window.localStorage.setItem(langStorageKey, lang);
    } catch (error) {}
  }

  function mainNode() {
    return document.querySelector("#root main") || document.querySelector("main");
  }

  function languageButton(lang) {
    var suffix = lang === "ms" ? "ms" : lang === "zh" ? "zh" : "en";
    return document.querySelector("[data-testid='btn-lang-" + suffix + "']");
  }

  function reorderLanguageButtons() {
    var buttons = langOrder.map(languageButton).filter(Boolean);
    if (buttons.length < 2) return;
    var parent = buttons[0].parentElement;
    if (!parent) return;
    var currentOrder = Array.prototype.slice.call(parent.querySelectorAll("[data-testid^='btn-lang-']")).map(getLang).join("|");
    var targetOrder = langOrder.join("|");
    if (currentOrder !== targetOrder) {
      langOrder.forEach(function (lang) {
        var button = languageButton(lang);
        if (button && button.parentElement === parent) parent.appendChild(button);
      });
    }
    if (!parent.classList.contains("he-lang-switcher")) parent.classList.add("he-lang-switcher");
    if (document.body && !document.body.classList.contains("he-site-premium")) document.body.classList.add("he-site-premium");
    document.documentElement.lang = currentLang === "ms" ? "ms" : currentLang === "zh" ? "zh" : "en";
  }

  function applyDefaultLanguage() {
    reorderLanguageButtons();
    if (document.body && document.body.classList.contains("he-static-renovation")) return;
    var button = languageButton(currentLang);
    if (!button) return;
    var key = pathName() + ":" + currentLang;
    if (document.documentElement.dataset.heLangApplied === key) return;
    document.documentElement.dataset.heLangApplied = key;
    window.setTimeout(function () {
      var freshButton = languageButton(currentLang);
      if (freshButton && freshButton.click) freshButton.click();
    }, 80);
  }

  function renovationHref(anchor) {
    if (!anchor) return false;
    var href = anchor.getAttribute("href") || "";
    if (!href) return false;
    try {
      var url = new URL(href, window.location.origin);
      return url.origin === window.location.origin && url.pathname.replace(/\/+$/, "") === "/renovation";
    } catch (error) {
      return /^\/renovation\/?/.test(href);
    }
  }

  function forceStaticRenovation() {
    if (!isRenovationPage()) return;
    if (document.body && document.body.classList.contains("he-static-renovation")) return;
    window.location.replace(staticRenovationUrl);
  }

  function polishLoader() {
    var loader = document.querySelector("#he-page-loader");
    if (!loader || loader.dataset.hePolished) return;
    loader.dataset.hePolished = "true";
    loader.classList.add("he-loader-redesign");
    loader.innerHTML = [
      '<div class="he-loader-frame">',
      '  <img class="he-loader-logo" src="/images/logo-transparent.png" alt="Home Empire">',
      '  <div class="he-loader-copy">',
      '    <strong>HOME EMPIRE</strong>',
      '    <small>PROPERTY MANAGEMENT</small>',
      '  </div>',
      '  <div class="he-loader-track"><i></i></div>',
      '</div>'
    ].join("");

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
    var main = mainNode();
    if (!main) return;
    document.body.classList.add("he-home-stats-video-ready");
    var oldPanel = document.querySelector("#he-home-video-panel");
    if (oldPanel) oldPanel.remove();
    var oldBackground = document.querySelector("#he-home-video-bg");
    if (oldBackground) oldBackground.remove();
    if (document.querySelector("#he-home-stats-video-bg")) return;
    var statsSection = Array.prototype.slice.call(main.querySelectorAll("section")).find(function (section, index) {
      var text = (section.innerText || "").replace(/\s+/g, " ");
      if (index === 0) return false;
      var matchedLabels = [
        /管理房源|Managed|Diurus/i,
        /满意住客|Guests|Tetamu/i,
        /平均评分|Rating|Penilaian/i
      ].filter(function (pattern) {
        return pattern.test(text);
      }).length;
      return text.indexOf("24/7") >= 0 && matchedLabels >= 2;
    });
    if (!statsSection) return;
    statsSection.classList.add("he-home-stats-video-section");
    var wrap = document.createElement("div");
    wrap.id = "he-home-stats-video-bg";
    wrap.setAttribute("aria-hidden", "true");
    wrap.innerHTML = [
      '<video muted autoplay loop playsinline preload="metadata" poster="/images/hero-kl.png">',
      '  <source src="https://assets.mixkit.co/videos/20137/20137-720.mp4" type="video/mp4">',
      '</video>'
    ].join("");
    statsSection.insertBefore(wrap, statsSection.firstChild);
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

  function rewriteLegalPage() {
    var key = pathName().replace("/", "");
    if (key !== "privacy" && key !== "terms") return;
    var main = mainNode();
    if (!main || main.dataset.heLegalLang === currentLang) return;
    var data = legalCopy[key][currentLang] || legalCopy[key].zh;
    main.dataset.heLegalLang = currentLang;
    main.innerHTML = [
      '<section class="he-legal-page">',
      '  <div class="he-legal-page__inner">',
      '    <p class="he-legal-page__eyebrow">' + data.eyebrow + '</p>',
      '    <h1>' + data.title + '</h1>',
      '    <span>' + data.updated + '</span>',
      '    <div class="he-legal-page__body">',
      data.sections.map(function (section, index) {
        return '<article><strong>' + (index + 1) + '. ' + section[0] + '</strong><p>' + section[1] + '</p></article>';
      }).join(""),
      '    </div>',
      '  </div>',
      '</section>'
    ].join("");
  }

  function run() {
    forceStaticRenovation();
    applyDefaultLanguage();
    polishLoader();
    addHomeVideo();
    cleanRenovationFromOtherPages();
    rewriteLegalPage();
  }

  var tries = 0;
  var timer = window.setInterval(function () {
    tries += 1;
    run();
    if (tries > 80) window.clearInterval(timer);
  }, 100);

  new MutationObserver(run).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener("click", function (event) {
    var renovationLink = event.target.closest && event.target.closest("a[href]");
    if (renovationHref(renovationLink) && !(document.body && document.body.classList.contains("he-static-renovation"))) {
      event.preventDefault();
      event.stopPropagation();
      window.location.assign(staticRenovationUrl);
      return;
    }

    var button = event.target.closest && event.target.closest("[data-testid^='btn-lang-']");
    if (!button) return;
    currentLang = getLang(button);
    savePreferredLang(currentLang);
    reorderLanguageButtons();
    window.setTimeout(rewriteLegalPage, 120);
  });
})();
