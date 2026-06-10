const AIRBNB_URL = 'https://www.airbnb.com/rooms/1689146617176132317?source_impression_id=p3_1779464263_P3cwlokVLJ4QcpxT';
const WHATSAPP_URL = 'https://wa.me/60108266243';
const LANGS = ['zh', 'en', 'ms'];
const LANG_LABELS = { zh: '中文', en: 'EN', ms: 'BM' };

const routes = {
  '': 'home', '/': 'home', '/home-empire': 'home', '/homeempire': 'home',
  '/services': 'services', '/property-management-kuala-lumpur': 'services',
  '/airbnb-malaysia': 'services', '/airbnb-management-malaysia': 'services',
  '/spaces': 'spaces', '/renovation': 'renovation', '/kl-renovation': 'renovation',
  '/mm2h': 'mm2h', '/about': 'about', '/contact': 'contact',
  '/privacy': 'privacy', '/terms': 'terms', '/404': 'notFound', '/404.html': 'notFound'
};

const heroImages = {
  home: '/images/hero-kl.png', services: '/images/service-1.png', spaces: '/images/skyline2-view.jpg',
  renovation: '/images/skyline2-living1.jpg', mm2h: '/images/hero-slide-3.png',
  about: '/images/team-1.png', contact: '/images/hero-slide-4.png'
};

const base = {
  zh: {
    nav: ['首页', '服务', '精选空间', '装修方案', '第二家园', '关于我们', '联系'],
    common: {
      brandSub: '物业管理', menu: '菜单', whatsapp: 'WhatsApp 咨询', learn: '了解更多',
      spaces: '查看空间', packages: '查看方案', enquire: '立即咨询', book: '打开 Airbnb',
      guests: '位住客', bedrooms: '卧室', bathrooms: '浴室', from: '起价', perNight: '/ 晚',
      company: 'HOME EMPIRE GROUP SDN. BHD.', companyNo: 'Company No. : 202601010219 (1672317-W)',
      location: 'Kuala Lumpur, Malaysia', privacy: '隐私政策', terms: '服务条款', wechat: '微信'
    }
  },
  en: {
    nav: ['Home', 'Services', 'Spaces', 'Renovation', 'MM2H', 'About', 'Contact'],
    common: {
      brandSub: 'Property Management', menu: 'Menu', whatsapp: 'WhatsApp', learn: 'Learn More',
      spaces: 'View Spaces', packages: 'View Packages', enquire: 'Enquire Now', book: 'Open Airbnb',
      guests: 'guests', bedrooms: 'bedrooms', bathrooms: 'bathrooms', from: 'from', perNight: '/ night',
      company: 'HOME EMPIRE GROUP SDN. BHD.', companyNo: 'Company No. : 202601010219 (1672317-W)',
      location: 'Kuala Lumpur, Malaysia', privacy: 'Privacy', terms: 'Terms', wechat: 'WeChat'
    }
  },
  ms: {
    nav: ['Laman Utama', 'Servis', 'Ruang Pilihan', 'Ubah Suai', 'MM2H', 'Tentang Kami', 'Hubungi'],
    common: {
      brandSub: 'Pengurusan Hartanah', menu: 'Menu', whatsapp: 'WhatsApp', learn: 'Ketahui Lagi',
      spaces: 'Lihat Ruang', packages: 'Lihat Pakej', enquire: 'Hubungi Kami', book: 'Buka Airbnb',
      guests: 'tetamu', bedrooms: 'bilik tidur', bathrooms: 'bilik mandi', from: 'dari', perNight: '/ malam',
      company: 'HOME EMPIRE GROUP SDN. BHD.', companyNo: 'Company No. : 202601010219 (1672317-W)',
      location: 'Kuala Lumpur, Malaysia', privacy: 'Privasi', terms: 'Terma', wechat: 'WeChat'
    }
  }
};

const content = {
  zh: {
    seo: {
      home: ['HomeEmpire.my | Home Empire 吉隆坡物业管理与短租服务', 'Home Empire 为吉隆坡业主与住客提供物业管理、Airbnb 代管、短租运营、装修布置与第二家园支持。'],
      services: ['Home Empire 服务 | 物业管理、Airbnb 代管与短租运营', '查看 Home Empire 在吉隆坡提供的物业管理、Airbnb 代管、清洁协调、业主报告与装修布置服务。'],
      spaces: ['Home Empire 精选空间 | 吉隆坡短租房源', '查看 Home Empire 已布置和运营的吉隆坡短租空间、房型亮点与 Airbnb 咨询入口。'],
      renovation: ['KL 装修方案 | Home Empire 适合 Airbnb 运营的装修', '面向吉隆坡 Airbnb、公寓与投资房的装修布置方案，包含家具、软装、灯光、拍摄准备与运营交付。'],
      mm2h: ['马来西亚第二家园 MM2H 支持 | Home Empire', 'Home Empire 为 MM2H 家庭提供吉隆坡居住区域匹配、房源安排、入住准备与生活落地支持。'],
      about: ['关于 Home Empire | HOME EMPIRE GROUP SDN. BHD.', '了解 Home Empire 团队如何整合物业管理、短租运营、装修布置和住客体验。'],
      contact: ['联系 Home Empire | 吉隆坡物业与 Airbnb 咨询', '通过 WhatsApp、微信、小红书或表单联系 Home Empire。'],
      privacy: ['隐私政策 | Home Empire', 'Home Empire 网站咨询与客户沟通资料的隐私政策。'],
      terms: ['服务条款 | Home Empire', 'Home Empire 网站、咨询和服务沟通的基本条款。'],
      notFound: ['页面未找到 | Home Empire', '该 Home Empire 页面暂时不存在。']
    },
    home: {
      eyebrow: '吉隆坡物业与短租运营', title: '把房子整理成更好住、更好租、更容易被信任的空间。',
      copy: 'Home Empire 为业主、住客和长期旅居家庭提供从装修布置、Airbnb 代管到物业管理的一体化服务。我们关注的不只是漂亮照片，而是入住体验、维护效率和长期口碑。',
      badgeTitle: '从布置到运营', badgeText: '每套空间都按入住体验、清洁动线和拍摄效果一起设计。',
      proofs: [['3', '语言服务'], ['24/7', '住客沟通'], ['KL', '核心区域']],
      boardTitle: 'Home Empire 运营控制板', boardCopy: '我们把房源当成一个持续运营的产品，而不是交付后就结束的项目。',
      boardNoteTitle: '一个团队管理空间的外观、体验和收益', boardNoteText: '装修、软装、拍照、上架、清洁、沟通和维护放在同一个流程里。',
      steps: [['诊断', '核对房型、位置、预算和目标客群。'], ['布置', '家具、灯光、床品、收纳和拍摄角度同步安排。'], ['上线', '准备文案、图片、入住指引和多平台沟通。'], ['维护', '用清洁反馈、住客评价和业主报告继续优化。']],
      featuredTitle: '精选空间', featuredCopy: '使用真实图片展示，避免空白卡片和模板感。'
    },
    services: {
      eyebrow: '核心服务', title: '为业主减少麻烦，为住客提高体验。',
      copy: 'Home Empire 把短租运营、物业管理、装修布置和长期居住支持结合起来，让每个环节都有人跟进。',
      cards: [['Airbnb 代管', '房源定位、上架准备、价格建议、住客沟通、入住指引和评价维护。', ['房源优化', '动态价格', '住客支持']], ['物业管理', '日常检查、维修协调、清洁安排、钥匙管理和业主报告。', ['维护跟进', '清洁协调', '透明报告']], ['装修布置', '按短租或长期出租目标做家具、灯光、软装和拍摄准备。', ['风格定位', '家具采购', '交付检查']], ['MM2H 支持', '为长期旅居家庭提供区域建议、看房沟通和入住准备。', ['区域匹配', '房源安排', '落地支持']]],
      flowTitle: '服务不是分散项目，而是一条完整链路', flowCopy: '从第一天评估房子开始，同时考虑装修、照片、入住、清洁、维护和业主收益。'
    },
    spaces: {
      eyebrow: '精选空间', title: '让客户看见真实空间，而不是空白展示。',
      copy: '每张图片都来自实际空间或已完成布置的房型。住客可以直接咨询入住，业主也可以参考装修和运营方向。',
      introTitle: '真实图片、清楚房型、直接行动', introCopy: '房源卡片更适合手机浏览：图片更大、信息更清楚、按钮更直接。'
    },
    renovation: {
      eyebrow: '装修方案', title: '适合 Airbnb 运营的装修，不只是好看，而是能交付、能拍照、能运营。',
      copy: '装修页面把套餐、房间、材料、流程和交付检查放在同一张地图里。客户可以快速看懂不同预算下能得到什么，也能看到 Home Empire 如何把设计落地到运营。',
      packagesTitle: '三档方案，更适合业主判断预算', packagesCopy: '套餐按出租目标、房型大小和住客体验拆分。',
      packs: {
        basic: ['基础出租方案', '适合快速上线', '保留核心家具和必需设备，重点保证照片整洁、入住顺畅和成本可控。', ['基础家具与电器', '窗帘、床品、厨房基础配置', '入住前检查清单']],
        standard: ['标准推荐方案', '平衡质感与回报', '增加灯光、软装、收纳和拍摄重点，让房源更适合 Airbnb 展示。', ['客厅视觉墙与灯光层次', '卧室舒适升级', '拍摄和上架准备']],
        premium: ['高质感方案', '适合高评分房源', '强化空间记忆点、材质质感和完整体验，适合希望做品牌房源的业主。', ['定制柜体与高级软装', '完整氛围灯光', '品牌化入住体验']]
      },
      roomTitle: '按房间拆解，而不是只放套餐名字',
      rooms: [['客厅', '第一眼决定照片表现：沙发、电视墙、灯光、窗帘和茶几比例一起处理。'], ['卧室', '床架、床垫、床品、遮光、收纳和镜面细节决定评价里的舒适度。'], ['厨房', '电器、餐具、清洁用品和储物安排按短租使用频率配置。'], ['卫浴', '镜柜、毛巾、洗护、地垫、收纳和灯光保证入住体验稳定。']],
      processTitle: '从报价到交付的 5 步', process: [['读图', '核对户型、面积、房间数量和现有条件。'], ['选型', '按 Basic、Standard、Premium 确认预算范围。'], ['采购', '家具、电器、软装和材料统一排期。'], ['安装', '现场施工、灯光、窗帘、家具和清洁联动。'], ['上线', '拍摄、入住指南、Airbnb 页面和运营交接。']],
      scopeTitle: '交付检查', scope: [['照片表现', '每个角度都有清晰主画面和记忆点。'], ['住客动线', '入住、停车、取钥匙、开门和 WiFi 使用清楚。'], ['维护效率', '常耗品、清洁和维修位置容易检查。'], ['业主报告', '预算、进度、问题和交付状态可追踪。']]
    },
    mm2h: { eyebrow: '第二家园', title: '让长期旅居家庭更快找到合适的生活节奏。', copy: 'Home Empire 协助 MM2H 与长期居住客户理解吉隆坡区域、房源选择、入住准备和日常沟通。', cards: [['区域匹配', '根据学校、通勤、预算和生活方式选择居住范围。'], ['看房沟通', '协助整理房源条件、租约重点和入住注意事项。'], ['入住准备', '家具、清洁、网络、水电和基本生活配置一起跟进。']] },
    about: { eyebrow: '关于我们', title: 'Home Empire 做的是空间，也是信任感。', copy: '我们从吉隆坡本地物业、装修和短租运营出发，帮助业主把资产变成稳定、清楚、可持续管理的空间。', values: [['清楚', '报价、范围、进度和交付状态尽量说清楚。'], ['稳定', '运营不是一次性动作，而是持续维护。'], ['体验', '住客感受到的细节，最后会变成评价和复购。']] },
    contact: { eyebrow: '联系', title: '告诉我们你的房子情况，我们会用最直接的方式回复。', copy: '可以咨询物业管理、Airbnb 代管、装修方案、MM2H 支持或短租入住。', form: ['姓名', '电话或微信', '咨询类型', '想咨询的内容', '发送 WhatsApp'], types: ['物业管理', 'Airbnb 代管', '装修方案', 'MM2H', '入住咨询'] },
    legal: { privacyTitle: '隐私政策', privacyCopy: '我们只会把你提交的姓名、联系方式和咨询内容用于回复咨询、安排服务和后续沟通。', termsTitle: '服务条款', termsCopy: '网站信息用于初步了解服务范围，实际报价、房源安排、装修范围和管理条款以双方确认的书面内容为准。', notFoundTitle: '页面未找到', notFoundCopy: '这个页面暂时不存在，可以回到首页或直接联系我们。' }
  },
  en: {
    seo: {
      home: ['HomeEmpire.my | Home Empire Kuala Lumpur Property Management', 'Home Empire provides Kuala Lumpur property management, Airbnb management, renovation setup and MM2H support.'],
      services: ['Home Empire Services | Airbnb and Property Management', 'Property management, Airbnb management, cleaning coordination, owner reporting and renovation setup in Kuala Lumpur.'],
      spaces: ['Home Empire Spaces | Kuala Lumpur Short-Stay Units', 'Real Home Empire spaces with property highlights and Airbnb enquiry links.'],
      renovation: ['KL Renovation Packages | Airbnb-Ready Setup by Home Empire', 'Renovation and furnishing packages for Airbnb, condos and investment properties in Kuala Lumpur.'],
      mm2h: ['Malaysia MM2H Support | Home Empire', 'Area matching, rental support and move-in preparation for MM2H families in Kuala Lumpur.'],
      about: ['About Home Empire | HOME EMPIRE GROUP SDN. BHD.', 'About the Home Empire team and our property, short-stay and renovation service model.'],
      contact: ['Contact Home Empire | Kuala Lumpur Property Consultation', 'Contact Home Empire for Airbnb management, property management, renovation and MM2H support.'],
      privacy: ['Privacy Policy | Home Empire', 'Privacy policy for Home Empire website enquiries.'],
      terms: ['Terms of Service | Home Empire', 'Basic terms for Home Empire website enquiries and service communication.'],
      notFound: ['Page Not Found | Home Empire', 'This Home Empire page does not exist.']
    },
    home: { eyebrow: 'Kuala Lumpur Property Operations', title: 'Homes that feel better, rent better and earn trust faster.', copy: 'Home Empire connects renovation setup, Airbnb management and property operations for owners, guests and long-stay families. We care about the stay experience, maintenance flow and long-term reputation.', badgeTitle: 'From setup to operations', badgeText: 'Each space is shaped around guest comfort, cleaning flow and photo performance.', proofs: [['3', 'languages'], ['24/7', 'guest support'], ['KL', 'core areas']], boardTitle: 'Home Empire Operations Board', boardCopy: 'We treat every unit like a living product, not a one-off handover.', boardNoteTitle: 'One team for look, guest experience and performance', boardNoteText: 'Renovation, furnishing, photography, listing, cleaning, messaging and maintenance stay in one workflow.', steps: [['Diagnose', 'Review layout, location, budget and guest profile.'], ['Prepare', 'Furniture, lighting, linens, storage and photo angles planned together.'], ['Launch', 'Listing copy, photos, check-in guide and platform messaging.'], ['Improve', 'Cleaning notes, reviews and owner reports keep improving the unit.']], featuredTitle: 'Featured Spaces', featuredCopy: 'Real images and clear cards instead of blank template blocks.' },
    services: { eyebrow: 'Core Services', title: 'Less stress for owners, better stays for guests.', copy: 'Home Empire combines short-stay operations, property management, renovation setup and long-stay support.', cards: [['Airbnb Management', 'Listing positioning, launch setup, pricing guidance, guest messaging, check-in support and review care.', ['Listing setup', 'Dynamic pricing', 'Guest support']], ['Property Management', 'Routine checks, repair coordination, cleaning, key handling and owner reporting.', ['Maintenance', 'Cleaning', 'Reporting']], ['Renovation Setup', 'Furniture, lighting, styling and photo preparation for rental performance.', ['Style direction', 'Furniture sourcing', 'Handover checks']], ['MM2H Support', 'Area advice, viewing coordination and move-in preparation for long-stay families.', ['Area matching', 'Unit support', 'Move-in setup']]], flowTitle: 'One continuous service chain', flowCopy: 'From day one, we think about renovation, photos, check-in, cleaning, maintenance and owner performance together.' },
    spaces: { eyebrow: 'Featured Spaces', title: 'Real spaces customers can actually inspect.', copy: 'Every card uses real unit or completed setup images. Guests can enquire directly, while owners can reference the design and operating direction.', introTitle: 'Real photos, clear layouts, direct action', introCopy: 'Cards are rebuilt for mobile: larger images, clearer data and faster action buttons.' },
    renovation: { eyebrow: 'Renovation Packages', title: 'Airbnb-ready renovation that can be handed over, photographed and operated.', copy: 'The renovation page now maps packages, rooms, materials, process and handover checks in one place, so owners can quickly understand what each budget level delivers.', packagesTitle: 'Three practical packages for owner budgeting', packagesCopy: 'Packages are shaped by rental goal, unit size and guest experience.', packs: { basic: ['Basic Rental Setup', 'Fast launch', 'Core furniture and essential equipment for clean photos, smooth check-in and controlled cost.', ['Basic furniture and appliances', 'Curtains, bedding and kitchen basics', 'Pre-stay checklist']], standard: ['Standard Recommended', 'Balanced style and return', 'Adds lighting, styling, storage and photo focus so the unit looks stronger on Airbnb.', ['Living room feature and layered lighting', 'Bedroom comfort upgrade', 'Photo and listing preparation']], premium: ['Premium Signature', 'For high-rating units', 'Builds stronger memory points, richer materials and a more complete branded stay.', ['Custom storage and premium styling', 'Full ambience lighting', 'Branded stay experience']] }, roomTitle: 'Room-by-room planning', rooms: [['Living Room', 'The first photo matters: sofa, TV wall, lighting, curtains and coffee table are planned together.'], ['Bedroom', 'Bed frame, mattress, linens, blackout, storage and mirror details influence comfort reviews.'], ['Kitchen', 'Appliances, tableware, cleaning items and storage follow short-stay usage patterns.'], ['Bathroom', 'Mirror, towels, toiletries, mats, storage and lighting keep the stay stable.']], processTitle: 'Five steps from quote to handover', process: [['Read Layout', 'Check layout, size, room count and current condition.'], ['Select Package', 'Confirm Basic, Standard or Premium budget level.'], ['Procure', 'Schedule furniture, appliances, styling and materials.'], ['Install', 'Coordinate site work, lighting, curtains, furniture and cleaning.'], ['Launch', 'Photography, check-in guide, Airbnb page and operations handover.']], scopeTitle: 'Handover Checks', scope: [['Photo performance', 'Each angle has a clear main view and memory point.'], ['Guest journey', 'Check-in, parking, keys, door access and WiFi are clear.'], ['Maintenance efficiency', 'Consumables, cleaning and repair points are easy to inspect.'], ['Owner reporting', 'Budget, progress, issues and status stay traceable.']] },
    mm2h: { eyebrow: 'MM2H', title: 'Helping long-stay families settle into the right rhythm.', copy: 'Home Empire helps MM2H and long-stay clients understand Kuala Lumpur areas, rental choices, move-in setup and daily communication.', cards: [['Area Matching', 'Select areas by school, commute, budget and lifestyle.'], ['Viewing Support', 'Organize unit conditions, lease points and move-in notes.'], ['Move-In Setup', 'Furniture, cleaning, internet, utilities and daily essentials.']] },
    about: { eyebrow: 'About', title: 'Home Empire works on space and trust.', copy: 'Starting from local Kuala Lumpur property, renovation and short-stay operations, we help owners turn assets into stable, clear and manageable spaces.', values: [['Clarity', 'Quotes, scope, progress and handover status should be easy to understand.'], ['Stability', 'Operations are continuous, not one-time work.'], ['Experience', 'Guest details become reviews, repeat bookings and owner confidence.']] },
    contact: { eyebrow: 'Contact', title: 'Tell us about your unit and we will reply directly.', copy: 'Ask about property management, Airbnb management, renovation packages, MM2H support or short-stay booking.', form: ['Name', 'Phone or WeChat', 'Enquiry type', 'What would you like to ask?', 'Send WhatsApp'], types: ['Property management', 'Airbnb management', 'Renovation', 'MM2H', 'Stay enquiry'] },
    legal: { privacyTitle: 'Privacy Policy', privacyCopy: 'We use submitted names, contact details and enquiry messages only to reply, arrange services and follow up.', termsTitle: 'Terms of Service', termsCopy: 'Website information is for initial service understanding. Final pricing, unit arrangements, renovation scope and management terms depend on written confirmation.', notFoundTitle: 'Page Not Found', notFoundCopy: 'This page does not exist. You can return home or contact us directly.' }
  },
  ms: {
    seo: {
      home: ['HomeEmpire.my | Pengurusan Hartanah Kuala Lumpur', 'Home Empire menyediakan pengurusan hartanah, Airbnb, ubah suai dan sokongan MM2H di Kuala Lumpur.'],
      services: ['Servis Home Empire | Pengurusan Airbnb dan Hartanah', 'Servis pengurusan hartanah, Airbnb, pembersihan, laporan pemilik dan ubah suai di Kuala Lumpur.'],
      spaces: ['Ruang Pilihan Home Empire | Unit Sewa Pendek Kuala Lumpur', 'Ruang sebenar Home Empire dengan maklumat unit dan pautan Airbnb.'],
      renovation: ['Pakej Ubah Suai KL | Siap Airbnb oleh Home Empire', 'Pakej ubah suai dan perabot untuk Airbnb, kondominium dan hartanah pelaburan di Kuala Lumpur.'],
      mm2h: ['Sokongan Malaysia MM2H | Home Empire', 'Padanan kawasan, sokongan sewaan dan persediaan masuk rumah untuk keluarga MM2H.'],
      about: ['Tentang Home Empire | HOME EMPIRE GROUP SDN. BHD.', 'Tentang pasukan Home Empire dan model servis hartanah, sewa pendek dan ubah suai.'],
      contact: ['Hubungi Home Empire | Konsultasi Hartanah Kuala Lumpur', 'Hubungi Home Empire untuk pengurusan Airbnb, hartanah, ubah suai dan MM2H.'],
      privacy: ['Polisi Privasi | Home Empire', 'Polisi privasi untuk pertanyaan laman Home Empire.'],
      terms: ['Terma Servis | Home Empire', 'Terma asas untuk laman dan komunikasi servis Home Empire.'],
      notFound: ['Halaman Tidak Dijumpai | Home Empire', 'Halaman Home Empire ini tidak wujud.']
    },
    home: { eyebrow: 'Operasi Hartanah Kuala Lumpur', title: 'Rumah yang lebih selesa, lebih mudah disewa dan lebih cepat dipercayai.', copy: 'Home Empire menggabungkan persediaan ubah suai, pengurusan Airbnb dan operasi hartanah untuk pemilik, tetamu dan keluarga jangka panjang.', badgeTitle: 'Dari persediaan ke operasi', badgeText: 'Setiap ruang dirancang untuk keselesaan tetamu, aliran pembersihan dan gambar yang baik.', proofs: [['3', 'bahasa'], ['24/7', 'sokongan tetamu'], ['KL', 'kawasan utama']], boardTitle: 'Papan Operasi Home Empire', boardCopy: 'Kami melihat setiap unit sebagai produk yang terus diurus, bukan projek sekali siap.', boardNoteTitle: 'Satu pasukan untuk rupa, pengalaman dan prestasi', boardNoteText: 'Ubah suai, perabot, fotografi, penyenaraian, pembersihan, mesej dan penyelenggaraan dalam satu aliran.', steps: [['Diagnos', 'Semak pelan, lokasi, bajet dan profil tetamu.'], ['Sedia', 'Perabot, lampu, cadar, storan dan sudut gambar dirancang bersama.'], ['Lancar', 'Teks senarai, gambar, panduan masuk dan mesej platform.'], ['Baiki', 'Nota pembersihan, ulasan dan laporan pemilik terus menambah baik unit.']], featuredTitle: 'Ruang Pilihan', featuredCopy: 'Gambar sebenar dan kad yang jelas, bukan blok template kosong.' },
    services: { eyebrow: 'Servis Utama', title: 'Kurang beban untuk pemilik, pengalaman lebih baik untuk tetamu.', copy: 'Home Empire menggabungkan operasi sewa pendek, pengurusan hartanah, persediaan ubah suai dan sokongan jangka panjang.', cards: [['Pengurusan Airbnb', 'Posisi unit, persediaan senarai, cadangan harga, mesej tetamu, panduan masuk dan penjagaan ulasan.', ['Senarai', 'Harga dinamik', 'Sokongan tetamu']], ['Pengurusan Hartanah', 'Pemeriksaan rutin, koordinasi pembaikan, pembersihan, kunci dan laporan pemilik.', ['Penyelenggaraan', 'Pembersihan', 'Laporan']], ['Persediaan Ubah Suai', 'Perabot, lampu, gaya dan persediaan gambar untuk prestasi sewaan.', ['Arah gaya', 'Sumber perabot', 'Semakan serah']], ['Sokongan MM2H', 'Nasihat kawasan, koordinasi lawatan dan persediaan masuk untuk keluarga jangka panjang.', ['Padanan kawasan', 'Sokongan unit', 'Persediaan masuk']]], flowTitle: 'Satu rantaian servis yang lengkap', flowCopy: 'Dari hari pertama, kami fikirkan ubah suai, gambar, daftar masuk, pembersihan, penyelenggaraan dan prestasi pemilik bersama.' },
    spaces: { eyebrow: 'Ruang Pilihan', title: 'Ruang sebenar yang boleh dinilai oleh pelanggan.', copy: 'Setiap kad menggunakan gambar unit sebenar atau persediaan yang telah siap. Tetamu boleh bertanya terus dan pemilik boleh rujuk arah reka bentuk.', introTitle: 'Gambar sebenar, susun atur jelas, tindakan terus', introCopy: 'Kad dibina semula untuk telefon: gambar lebih besar, data lebih jelas dan butang lebih pantas.' },
    renovation: { eyebrow: 'Pakej Ubah Suai', title: 'Ubah suai siap Airbnb yang cantik, sedia diserah dan mudah dioperasikan.', copy: 'Halaman ubah suai kini menyusun pakej, bilik, bahan, proses dan semakan serah dalam satu tempat supaya pemilik cepat faham hasil setiap bajet.', packagesTitle: 'Tiga pakej praktikal untuk bajet pemilik', packagesCopy: 'Pakej dibentuk mengikut sasaran sewaan, saiz unit dan pengalaman tetamu.', packs: { basic: ['Pakej Asas Sewaan', 'Cepat dilancar', 'Perabot utama dan kelengkapan penting untuk gambar kemas, masuk lancar dan kos terkawal.', ['Perabot dan peralatan asas', 'Langsir, cadar dan asas dapur', 'Senarai semak sebelum inap']], standard: ['Pakej Standard', 'Seimbang gaya dan pulangan', 'Tambah lampu, dekor, storan dan fokus gambar supaya unit lebih kuat di Airbnb.', ['Ruang tamu dengan lampu berlapis', 'Naik taraf keselesaan bilik', 'Persediaan gambar dan senarai']], premium: ['Pakej Premium', 'Untuk unit rating tinggi', 'Bina titik ingatan, bahan lebih baik dan pengalaman tinggal yang lengkap.', ['Storan khas dan dekor premium', 'Lampu suasana penuh', 'Pengalaman tinggal berjenama']] }, roomTitle: 'Perancangan mengikut bilik', rooms: [['Ruang Tamu', 'Gambar pertama penting: sofa, dinding TV, lampu, langsir dan meja dirancang bersama.'], ['Bilik Tidur', 'Rangka katil, tilam, cadar, blackout, storan dan cermin mempengaruhi ulasan keselesaan.'], ['Dapur', 'Peralatan, pinggan mangkuk, barang cuci dan storan ikut corak sewa pendek.'], ['Bilik Air', 'Cermin, tuala, toiletries, alas, storan dan lampu memastikan pengalaman stabil.']], processTitle: 'Lima langkah dari sebut harga ke serahan', process: [['Baca Pelan', 'Semak pelan, saiz, bilik dan keadaan semasa.'], ['Pilih Pakej', 'Sahkan tahap bajet Basic, Standard atau Premium.'], ['Beli', 'Jadualkan perabot, peralatan, dekor dan bahan.'], ['Pasang', 'Koordinasi kerja tapak, lampu, langsir, perabot dan pembersihan.'], ['Lancar', 'Fotografi, panduan masuk, halaman Airbnb dan serahan operasi.']], scopeTitle: 'Semakan Serahan', scope: [['Prestasi gambar', 'Setiap sudut ada pandangan utama dan titik ingatan.'], ['Perjalanan tetamu', 'Daftar masuk, parkir, kunci, pintu dan WiFi jelas.'], ['Efisien penyelenggaraan', 'Barang guna, pembersihan dan titik baiki mudah disemak.'], ['Laporan pemilik', 'Bajet, progres, isu dan status boleh dijejak.']] },
    mm2h: { eyebrow: 'MM2H', title: 'Membantu keluarga jangka panjang menyesuaikan diri dengan lebih cepat.', copy: 'Home Empire membantu pelanggan MM2H dan tinggal lama memahami kawasan Kuala Lumpur, pilihan sewaan, persediaan masuk dan komunikasi harian.', cards: [['Padanan Kawasan', 'Pilih kawasan mengikut sekolah, perjalanan, bajet dan gaya hidup.'], ['Sokongan Lawatan', 'Susun keadaan unit, perkara sewa dan nota masuk.'], ['Persediaan Masuk', 'Perabot, pembersihan, internet, utiliti dan keperluan asas.']] },
    about: { eyebrow: 'Tentang Kami', title: 'Home Empire mengurus ruang dan kepercayaan.', copy: 'Bermula daripada hartanah, ubah suai dan operasi sewa pendek di Kuala Lumpur, kami membantu pemilik menjadikan aset ruang yang stabil dan mudah diurus.', values: [['Jelas', 'Sebut harga, skop, progres dan status serahan mudah difahami.'], ['Stabil', 'Operasi berterusan, bukan kerja sekali sahaja.'], ['Pengalaman', 'Butiran tetamu menjadi ulasan, tempahan ulang dan keyakinan pemilik.']] },
    contact: { eyebrow: 'Hubungi', title: 'Beritahu kami tentang unit anda dan kami akan balas terus.', copy: 'Tanya tentang pengurusan hartanah, Airbnb, pakej ubah suai, MM2H atau tempahan sewa pendek.', form: ['Nama', 'Telefon atau WeChat', 'Jenis pertanyaan', 'Apa yang ingin ditanya?', 'Hantar WhatsApp'], types: ['Pengurusan hartanah', 'Pengurusan Airbnb', 'Ubah suai', 'MM2H', 'Pertanyaan menginap'] },
    legal: { privacyTitle: 'Polisi Privasi', privacyCopy: 'Kami menggunakan nama, maklumat hubungan dan mesej pertanyaan hanya untuk membalas, mengatur servis dan susulan.', termsTitle: 'Terma Servis', termsCopy: 'Maklumat laman adalah untuk pemahaman awal. Harga akhir, unit, skop ubah suai dan terma pengurusan bergantung pada pengesahan bertulis.', notFoundTitle: 'Halaman Tidak Dijumpai', notFoundCopy: 'Halaman ini tidak wujud. Anda boleh kembali ke laman utama atau hubungi kami.' }
  }
};

const navPaths = ['/', '/services/', '/spaces/', '/renovation/', '/mm2h/', '/about/', '/contact/'];
const properties = [
  { name: 'Skyline KL Suite', area: 'KL City View', img: '/images/skyline2-living1.jpg', price: 'RM 288', guests: 4, bed: 2, bath: 1, tags: ['City view', 'Pool', 'WiFi'] },
  { name: 'Belfield Residence', area: 'Kuala Lumpur', img: '/images/belfield-living1.jpg', price: 'RM 238', guests: 3, bed: 1, bath: 1, tags: ['New setup', 'Kitchen', 'Workspace'] },
  { name: 'YOLO Comfort Stay', area: 'KL / Ampang', img: '/images/yolo2-living.jpg', price: 'RM 198', guests: 2, bed: 1, bath: 1, tags: ['Clean', 'Easy check-in', 'Near transit'] }
];

function langFromUrl() {
  const url = new URL(location.href);
  const fromQuery = url.searchParams.get('lang');
  const saved = localStorage.getItem('homeEmpireLang');
  const browser = navigator.language && navigator.language.toLowerCase().startsWith('ms') ? 'ms' : navigator.language && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'zh';
  return LANGS.includes(fromQuery) ? fromQuery : LANGS.includes(saved) ? saved : browser;
}

let currentLang = langFromUrl();
let currentPage = resolvePage();
let activePack = 'standard';

function resolvePage() {
  const path = trimSlash(location.pathname) || '/';
  return routes[path] || 'notFound';
}

function trimSlash(value) {
  return value.length > 1 && value.endsWith('/') ? value.slice(0, -1) : value;
}

function t() {
  return { ...base[currentLang], ...content[currentLang] };
}

function setMeta(page, text) {
  const seo = text.seo[page] || text.seo.home;
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang === 'ms' ? 'ms' : 'en';
  document.title = seo[0];
  const desc = document.querySelector(`meta[name='description']`);
  if (desc) desc.setAttribute('content', seo[1]);
}

function html(strings, ...vals) {
  return strings.map((s, i) => s + (vals[i] ?? '')).join('');
}

function header(text) {
  return html`
    <header class='site-header'>
      <div class='container header-inner'>
        <a class='brand' href='/?lang=${currentLang}'>
          <img src='/images/logo-transparent.png' alt='Home Empire' />
          <span class='brand-text'><span class='brand-name'>HOME EMPIRE</span><span class='brand-sub'>${text.common.brandSub}</span></span>
        </a>
        <nav class='nav'>${text.nav.map((n, i) => `<a class='${trimSlash(navPaths[i]) === trimSlash(location.pathname) || (i === 0 && currentPage === 'home') ? 'is-active' : ''}' href='${navPaths[i]}?lang=${currentLang}'>${n}</a>`).join('')}</nav>
        <div class='header-actions'>
          <div class='lang-switch'>${LANGS.map(l => `<button class='lang-btn ${l === currentLang ? 'is-active' : ''}' data-lang='${l}'>${LANG_LABELS[l]}</button>`).join('')}</div>
          <button class='menu-btn' type='button' aria-label='${text.common.menu}'><span class='menu-lines'></span></button>
        </div>
      </div>
    </header>`;
}

function hero(page, data, primaryHref, secondaryHref) {
  const text = t();
  const img = heroImages[page] || heroImages.home;
  const proofs = data.proofs || [['KL', text.common.location], ['24/7', text.common.whatsapp], ['HE', text.common.company]];
  return html`
    <section class='hero'>
      <div class='wide hero-grid'>
        <div>
          <div class='eyebrow'>${data.eyebrow}</div>
          <h1>${data.title}</h1>
          <p class='lead'>${data.copy}</p>
          <div class='hero-actions'>
            <a class='btn primary' href='${primaryHref}'>${text.common.enquire}</a>
            <a class='btn ghost' href='${secondaryHref}'>${text.common.learn}</a>
          </div>
        </div>
        <div class='hero-media'>
          <div class='hero-card'><img src='${img}' alt='Home Empire' /></div>
          <div class='proof-card'>${proofs.map(p => `<div class='proof-row'><strong>${p[0]}</strong><span>${p[1]}</span></div>`).join('')}</div>
          <div class='hero-badge'><strong>${data.badgeTitle || text.common.company}</strong><span>${data.badgeText || text.common.companyNo}</span></div>
        </div>
      </div>
    </section>`;
}

function card(title, copy, tags = []) {
  return `<article class='card pad'><h3>${title}</h3><p>${copy}</p>${tags.length ? `<div class='tags'>${tags.map(x => `<span class='tag'>${x}</span>`).join('')}</div>` : ''}</article>`;
}

function propertyCards(limit = 3) {
  const text = t();
  return properties.slice(0, limit).map(p => html`
    <article class='card property-card'>
      <img src='${p.img}' alt='${p.name}' />
      <div class='property-body'>
        <h3>${p.name}</h3>
        <p>${p.area}</p>
        <div class='property-meta'><span>${p.guests} ${text.common.guests}</span><span>${p.bed} ${text.common.bedrooms}</span><span>${p.bath} ${text.common.bathrooms}</span></div>
        <div class='tags'>${p.tags.map(x => `<span class='tag'>${x}</span>`).join('')}</div>
        <div class='price'>${text.common.from} ${p.price} ${text.common.perNight}</div>
        <div class='actions'><a class='btn primary' href='${AIRBNB_URL}' target='_blank' rel='noopener'>${text.common.book}</a><a class='btn' href='${WHATSAPP_URL}' target='_blank' rel='noopener'>${text.common.whatsapp}</a></div>
      </div>
    </article>`).join('');
}

function homePage(text) {
  const d = text.home;
  return hero('home', d, `/services/?lang=${currentLang}`, `/spaces/?lang=${currentLang}`) + html`
    <section class='section alt'>
      <div class='container feature-board'>
        <div class='card'>
          ${d.steps.map((s, i) => `<div class='step'><div class='step-num'>${String(i + 1).padStart(2, '0')}</div><div><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`).join('')}
        </div>
        <div class='card pad'><div class='eyebrow'>${d.boardTitle}</div><h2>${d.boardNoteTitle}</h2><p>${d.boardNoteText}</p><p>${d.boardCopy}</p></div>
      </div>
    </section>
    <section class='section'>
      <div class='container'>
        <div class='section-head'><div><div class='eyebrow'>${d.featuredTitle}</div><h2>${d.featuredTitle}</h2></div><p>${d.featuredCopy}</p></div>
        <div class='grid three'>${propertyCards(3)}</div>
      </div>
    </section>`;
}

function servicesPage(text) {
  const d = text.services;
  return hero('services', d, `${WHATSAPP_URL}`, `/renovation/?lang=${currentLang}`) + html`
    <section class='section alt'><div class='container grid four'>${d.cards.map(c => card(c[0], c[1], c[2])).join('')}</div></section>
    <section class='section dark'><div class='container section-head'><div><div class='eyebrow'>${d.flowTitle}</div><h2>${d.flowTitle}</h2></div><p>${d.flowCopy}</p></div></section>`;
}

function spacesPage(text) {
  const d = text.spaces;
  return hero('spaces', d, AIRBNB_URL, `${WHATSAPP_URL}`) + html`
    <section class='section alt'>
      <div class='container'><div class='section-head'><div><div class='eyebrow'>${d.introTitle}</div><h2>${d.introTitle}</h2></div><p>${d.introCopy}</p></div><div class='grid three'>${propertyCards(3)}</div></div>
    </section>`;
}

function renovationPage(text) {
  const d = text.renovation;
  const pack = d.packs[activePack];
  return hero('renovation', d, `${WHATSAPP_URL}`, AIRBNB_URL) + html`
    <section class='section alt'>
      <div class='container'>
        <div class='section-head'><div><div class='eyebrow'>${d.packagesTitle}</div><h2>${d.packagesTitle}</h2></div><p>${d.packagesCopy}</p></div>
        <div class='tabs'>${Object.entries(d.packs).map(([key, val]) => `<button class='tab ${key === activePack ? 'is-active' : ''}' data-pack='${key}'>${val[0]}</button>`).join('')}</div>
        <div class='package-view'>
          <div class='package-main'><div class='eyebrow'>${pack[1]}</div><h2>${pack[0]}</h2><p>${pack[2]}</p><ul class='check-list'>${pack[3].map(x => `<li>${x}</li>`).join('')}</ul></div>
          <div class='image-strip'><img src='/images/skyline2-living1.jpg' alt='Living room' /><img src='/images/skyline2-bedroom1.jpg' alt='Bedroom' /></div>
        </div>
      </div>
    </section>
    <section class='section'><div class='container'><div class='section-head'><div><div class='eyebrow'>${d.roomTitle}</div><h2>${d.roomTitle}</h2></div></div><div class='grid four'>${d.rooms.map(r => card(r[0], r[1])).join('')}</div></div></section>
    <section class='section alt'><div class='container'><div class='section-head'><div><div class='eyebrow'>${d.processTitle}</div><h2>${d.processTitle}</h2></div></div><div class='grid timeline'>${d.process.map(p => card(p[0], p[1])).join('')}</div></div></section>
    <section class='section'><div class='container'><div class='section-head'><div><div class='eyebrow'>${d.scopeTitle}</div><h2>${d.scopeTitle}</h2></div></div><div class='grid four'>${d.scope.map(s => card(s[0], s[1])).join('')}</div></div></section>`;
}

function simpleCardsPage(key, text) {
  const d = text[key];
  const cards = d.cards || d.values || [];
  return hero(key, d, `${WHATSAPP_URL}`, `/contact/?lang=${currentLang}`) + `<section class='section alt'><div class='container grid three'>${cards.map(c => card(c[0], c[1])).join('')}</div></section>`;
}

function contactPage(text) {
  const d = text.contact;
  return hero('contact', d, `${WHATSAPP_URL}`, AIRBNB_URL) + html`
    <section class='section alt'>
      <div class='container contact-layout'>
        <div class='card pad'>
          <form class='form'>
            <input name='name' placeholder='${d.form[0]}' />
            <input name='contact' placeholder='${d.form[1]}' />
            <select name='type'>${d.types.map(x => `<option>${x}</option>`).join('')}</select>
            <textarea name='message' placeholder='${d.form[3]}'></textarea>
            <button class='btn primary' type='submit'>${d.form[4]}</button>
          </form>
        </div>
        <div class='contact-list'>
          <a href='${WHATSAPP_URL}' target='_blank' rel='noopener'><strong>WhatsApp</strong><span>+60 10-826 6243</span></a>
          <a href='https://www.facebook.com/share/1BNwwGBTE8/?mibextid=wwXIfr' target='_blank' rel='noopener'><strong>Facebook</strong><span>Home Empire</span></a>
          <span><strong>${text.common.wechat}</strong><span>Henry_9618</span></span>
          <span><strong>${text.common.location}</strong><span>${text.common.companyNo}</span></span>
        </div>
      </div>
    </section>`;
}

function legalPage(kind, text) {
  const l = text.legal;
  const title = kind === 'privacy' ? l.privacyTitle : kind === 'terms' ? l.termsTitle : l.notFoundTitle;
  const copy = kind === 'privacy' ? l.privacyCopy : kind === 'terms' ? l.termsCopy : l.notFoundCopy;
  return `<section class='section'><div class='container'><div class='eyebrow'>Home Empire</div><h1>${title}</h1><p class='lead'>${copy}</p><div class='actions'><a class='btn primary' href='/?lang=${currentLang}'>Home</a><a class='btn' href='${WHATSAPP_URL}' target='_blank' rel='noopener'>${text.common.whatsapp}</a></div></div></section>`;
}

function footer(text) {
  return html`
    <footer class='site-footer'>
      <div class='container'>
        <div class='footer-grid'>
          <div><img class='footer-logo' src='/images/logo-transparent.png' alt='Home Empire' /><p>${text.common.company}</p><p>${text.common.companyNo}</p></div>
          <div class='footer-links'>${navPaths.slice(0, 4).map((p, i) => `<a href='${p}?lang=${currentLang}'>${text.nav[i]}</a>`).join('')}</div>
          <div class='footer-links'>${navPaths.slice(4).map((p, i) => `<a href='${p}?lang=${currentLang}'>${text.nav[i + 4]}</a>`).join('')}</div>
          <div class='footer-links'><a href='${WHATSAPP_URL}' target='_blank' rel='noopener'>+60 10-826 6243</a><span>${text.common.wechat}: Henry_9618</span><span>${text.common.location}</span></div>
        </div>
        <div class='footer-bottom'><span>© 2026 ${text.common.company}</span><span><a href='/privacy/?lang=${currentLang}'>${text.common.privacy}</a> · <a href='/terms/?lang=${currentLang}'>${text.common.terms}</a></span></div>
      </div>
    </footer>`;
}

function render() {
  const text = t();
  setMeta(currentPage, text);
  const pages = {
    home: homePage,
    services: servicesPage,
    spaces: spacesPage,
    renovation: renovationPage,
    mm2h: x => simpleCardsPage('mm2h', x),
    about: x => simpleCardsPage('about', x),
    contact: contactPage,
    privacy: x => legalPage('privacy', x),
    terms: x => legalPage('terms', x),
    notFound: x => legalPage('notFound', x)
  };
  const mount = document.getElementById('app') || document.getElementById('root');
  mount.innerHTML = header(text) + (pages[currentPage] || pages.notFound)(text) + footer(text);
  bind();
}

function bind() {
  document.querySelector('.menu-btn')?.addEventListener('click', () => document.body.classList.toggle('menu-open'));
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('homeEmpireLang', currentLang);
    const url = new URL(location.href);
    url.searchParams.set('lang', currentLang);
    history.replaceState(null, '', url);
    render();
  }));
  document.querySelectorAll('[data-pack]').forEach(btn => btn.addEventListener('click', () => {
    activePack = btn.dataset.pack;
    render();
    document.querySelector('.tabs')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }));
  document.querySelector('.form')?.addEventListener('submit', evt => {
    evt.preventDefault();
    const form = new FormData(evt.currentTarget);
    const msg = `Home Empire enquiry%0AName: ${encodeURIComponent(form.get('name') || '')}%0AContact: ${encodeURIComponent(form.get('contact') || '')}%0AType: ${encodeURIComponent(form.get('type') || '')}%0AMessage: ${encodeURIComponent(form.get('message') || '')}`;
    window.open(`${WHATSAPP_URL}?text=${msg}`, '_blank', 'noopener');
  });
}

render();
