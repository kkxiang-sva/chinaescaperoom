// Shared data, i18n, and room-rendering helpers for index.html and room.html
  const CITY_ROOMS = {
    guangzhou: ['不可名状','溃烂缪斯','Dream','暂放的绽放','污秽','幻觉游戏','这没有游戏','纸人回魂'],
    shanghai: ['HAVEN','INSANE II','GATEMAN','REVIVER','白夜','Cindy死了九次','WUKONG','SOUL HOUSE','Undeveloped Memory','昆仑寒宫2','找到你了2','Strike it! Rich!','溃烂缪斯','INSANE','AFTERLIFE','复原'],
    hangzhou: ['坏机器','镇灵村','不可名状','溃烂缪斯','萨乌达德'],
    chongqing: ['太岁','活神仙','逢魔时'],
    chengdu: ['朝圣','神佑','安乐','Lily',"Dolls' House",'再见黛安娜','玛雅','观落阴'],
    beijing: ['诺亚','女屋','艾洛拉','神话','VISAGE','ENOLA','SINNER','楼兰古墓2']
  };
  const CITY_ORDER = ['beijing','shanghai','guangzhou','hangzhou','chengdu','chongqing'];
  const TOP30 = [
    '不可名状','溃烂缪斯','太岁','INSANE II',"Dolls' House",'SOUL HOUSE','Dream','REVIVER','Cindy死了九次','HAVEN',
    '坏机器','Lily','女屋','安乐','INSANE','GATEMAN','诺亚','ENOLA','朝圣','复原',
    '污秽','神佑','玛雅','白夜','艾洛拉','逢魔时','观落阴','神话','WUKONG','纸人回魂'
  ];
  const NAME_EN = {
    '不可名状': 'Unnameable',
    '溃烂缪斯': 'Corrupt Muse',
    '诺亚': 'Noah',
    '女屋': 'Witch House',
    '朝圣': 'Pilgrimage',
    '坏机器': 'Bad Machine',
    'Cindy死了九次': 'Cindy Died 9 Times',
    '太岁': 'Tai Sui',
    '安乐': 'Cosy Nest',
    '白夜': 'White Night',
    '玛雅': 'Maya',
    '昆仑寒宫2': 'Frozen Palace 2',
    '污秽': 'Filthy',
    '纸人回魂': "The Paper Spirit's Return",
    '艾洛拉': 'Aurora',
    '神佑': 'Divine Blessing',
    '逢魔时': 'Witching Hour',
    '观落阴': 'Descent to the Netherworld',
    '神话': 'Myth',
    'WUKONG': 'WuKong',
    '复原': 'ABEILLE'
  };
  function displayName(name){
    if(currentLang === 'en' && NAME_EN[name]) return NAME_EN[name];
    return name;
  }

  // ---------- i18n ----------
  const translations = {
    en: {
      'meta.title': 'China Escape Room Guide',
      'nav.logo': 'Escape Guide',
      'nav.games': 'Top Games',
      'nav.booking': 'How to Book',
      'nav.why': 'Why Us',
      'nav.faq': 'FAQ',
      'nav.cta': 'Book Now',
      'hero.eyebrow': 'THE ULTIMATE ESCAPE ROOM GUIDE IN CHINA',
      'hero.title': "Unlock China's Best<br>Escape Room Adventures",
      'hero.sub': "Playing escape rooms in China has become a rising trend among international travelers — and it's easy to see why. Expect large-scale mechanical sets, immersive live-actor interaction, and film-quality production design you won't find anywhere else. Come experience it for yourself. Not sure how to book? You're already in the right place.",
      'console.label': 'SYSTEM · CHALLENGE TIMER',
      'console.status': 'STATUS: LOCKED',
      'hero.cta1': 'Browse Top Games →',
      'hero.cta2': 'How to Book',
      'stat.cities': 'Cities Covered',
      'stat.rooms': 'Curated Rooms',
      'stat.rating': 'Average Rating',
      'stat.assist': 'Booking Assistance',
      'games.title': "All-Time Top Picks",
      'games.note': 'All room info available in English',
      'games.desc': "Ranked using real play data from Chinese and international players who've actually experienced these rooms — not sponsored placements. Full write-ups for each room are coming soon.",
      'game.viewMore': 'View Details →',
      'game.modal.cta': 'Ask About Booking →',
      'game.modal.comingSoon': "Full details for this room are coming soon. In the meantime, reach out and we'll help you book it directly.",
      'game.modal.topRank': 'All-Time Top 30 · #',
      'game.comingSoon': 'Full details coming soon',
      'room.horror': 'Fear Level',
      'room.enYes': 'English Available',
      'room.enNo': 'Chinese Only',
      'room.min': ' min',
      'room.players': ' players',
      'room.by': 'By ',
      'edit.button': 'Edit',
      'edit.addImage': '+ Add Photo',
      'edit.type': 'Type / Genre',
      'edit.horror': 'Fear Level (0-5)',
      'edit.hasEnglish': 'English Version?',
      'edit.hasEnglishUnset': '— Leave as is —',
      'edit.yes': 'Yes',
      'edit.no': 'No',
      'edit.price': 'Price (RMB)',
      'edit.duration': 'Duration (min)',
      'edit.players': 'Players (e.g. 4-6)',
      'edit.storeName': 'Store Name',
      'edit.address': 'Address',
      'edit.hours': 'Business Hours',
      'edit.phone': 'Phone',
      'edit.bookingInfo': 'Booking Info',
      'edit.videoUrl': 'Trailer Video URL',
      'edit.videoHint': 'Add a trailer URL above in the edit form.',
      'edit.addReview': '+ Add Comment',
      'edit.reviewText': 'Quote from a player...',
      'edit.reviewAuthor': 'Name / handle (optional)',
      'edit.save': 'Save',
      'edit.cancel': 'Cancel',
      'edit.reset': 'Reset to Original',
      'edit.hasCustomInfo': '✓ Custom info added',
      'auth.title': 'Sign In to Edit',
      'auth.email': 'Email',
      'auth.password': 'Password',
      'auth.submit': 'Sign In',
      'auth.signOut': 'Sign Out',
      'crop.title': 'Adjust Photo',
      'crop.hint': 'Drag to reposition, use the slider to zoom',
      'crop.confirm': 'Use This Photo',
      'room.back': '← All Rooms',
      'room.gallery': 'More Photos',
      'room.video': 'Trailer',
      'room.watchTrailer': '▶ Watch Trailer',
      'room.viewReview': '▶ View Player Review',
      'room.reviews': 'Player Comments',
      'room.bookingInfo': 'Booking & Address',
      'room.bookingCta': 'Click Here to Go to Booking App →',
      'room.bookingRules': 'Booking Rules',
      'edit.addBookingRules': '+ Add Photo',
      'edit.changeBookingRules': 'Change Photo',
      'edit.bookingRulesTextPlaceholder': 'Type the booking rules in English...',
      'edit.bookingRulesLink': 'Translation Service Booking Link',
      'room.bookingRulesLinkCta': 'Source from →',
      'room.moreInCity': 'More rooms in ',
      'games.more': 'Browse More by City →',
      'booking.title': 'How to Book an Escape Room in China',
      'booking.desc': "Most rooms take bookings through local platforms — mainly Dianping and Meituan — rather than their own website. This site is an information hub, not a booking platform: browse and pick a room here, then book directly on one of the platforms below. Can't use the Chinese apps? Contact KK and she'll book it for you.",
      'step1.title': 'Choose a Room & Time',
      'step1.desc': 'Browse our picks and confirm the city, duration and open sessions.',
      'step2.title': 'Book on a Local Platform',
      'step2.desc': "Complete payment on Dianping or Meituan — the two platforms most venues actually use. A few venues also have a WeChat Mini Program, but it's rarely the main channel.",
      'step3.title': 'Get Language Help',
      'step3.desc': "Hit a language barrier? Contact us and we'll help confirm details with the venue.",
      'step4.title': 'Arrive & Play',
      'step4.desc': 'Show up 15 minutes early, present your booking confirmation, and start your escape.',
      'channel1.name': 'Dianping',
      'channel1.desc': 'The main booking channel for most venues, with real player reviews and ratings',
      'channel2.name': 'Meituan',
      'channel2.desc': 'Group deals and real-time session availability',
      'channel3.name': 'WeChat Mini Program',
      'channel3.desc': 'A few venues use this, but far less common than Dianping/Meituan',
      'channel4.name': 'Phone / Walk-in',
      'channel4.desc': 'Good for popular time slots or group bookings',
      'why.title': 'Why Use This Guide',
      'feature1.title': 'Curated, Not a Directory',
      'feature1.desc': 'Every pick is vetted for story, set design and immersion — no filler, no cookie-cutter rooms.',
      'feature2.title': 'Bridging the Language Gap',
      'feature2.desc': 'From booking to on-site clues, we help international players get past the Chinese-only barrier.',
      'feature3.title': 'Always Up to Date',
      'feature3.desc': 'Sessions, pricing and availability are continually verified so you never show up to a closed door.',
      'founder.role': 'TERPECA China Ambassador · Escape Room Creator & Designer',
      'founder.bio': "Hi, I'm KK — TERPECA's China Ambassador and one of China's most-followed escape room creators. I've played over 1,000 immersive experiences around the world, and I'm also a set designer myself, which gives me a builder's eye for what actually makes a room great. Years in the scene have earned me real relationships with China's top studios — connections I put to work getting you into the country's best rooms. I want the world to see what Chinese design can really do. Reach out — I'll personally help you experience China's finest escape rooms.",
      'founder.social': 'Xiaohongshu & Douyin',
      'founder.cta': 'Get in Touch →',
      'faq.title': 'Frequently Asked Questions',
      'faq1.q': 'What kind of experience are Chinese escape rooms?',
      'faq1.a': 'Chinese escape rooms are mostly immersive, story-driven experiences rather than pure puzzle rooms. Leave the "solve the puzzle" mindset at the door — let yourself fully sink into the story, become part of it, and enjoy interacting with it.',
      'faq2.q': 'Will live actors touch players?',
      'faq2.a': "Most rooms are performance-focused, and a few themes include light physical contact. If that's a concern, just tell the staff clearly before your session starts that you'd prefer no physical contact.",
      'faq3.q': "Can I play if I don't speak Chinese?",
      'faq3.a': 'Some rooms offer an English translation service or fully English audio clues. We recommend choosing rooms marked "English Available," or contacting the venue through us in advance to confirm.',
      'faq4.q': 'How far in advance should I book?',
      'faq4.a': "Book popular rooms 3-7 days ahead, and about two weeks ahead for holidays or in-demand sessions — off-peak slots are often available same-day. If you'll need the venue's translation service, please book at least 7 days ahead.",
      'faq5.q': "Can I join a group if I don't have enough players?",
      'faq5.a': "Most venues allow joining another group, but if you need translation service, book a private session instead so it doesn't affect your experience or that of the other players — exact policy depends on the venue. If you're a few players short but still want to play, you can usually just pay for the minimum required number of tickets and go ahead.",
      'faq6.q': 'How do I cancel or reschedule?',
      'faq6.a': "Cancellation policies vary by venue. Most platforms allow free rescheduling within a certain window before your session — read the terms before booking.",
      'faq7.q': "The translation service page on Dianping shows a high price like ¥999 or ¥888, even though it's supposed to be free — why?",
      'faq7.a': "That's just a placeholder price to keep the listing visible — it's not meant for you to actually book at that price. If you'd like to book the free translation service, please contact the venue directly or reach out to KK.",
      'cta.title': 'Ready to Take on the Challenge?',
      'cta.desc': "Browse our curated rooms and find the puzzle adventure that's right for you.",
      'cta.btn': 'Start Exploring →',
      'footer.desc': "Curated recommendations and booking assistance for international players exploring China's escape rooms.",
      'footer.explore': 'Explore',
      'footer.citiesHead': 'Cities',
      'footer.contact': 'Contact',
      'footer.wechat': 'WeChat',
      'footer.copyright': '© 2026 China Escape Room Guide',
      'footer.disclaimer': 'For reference only — please confirm details with each venue',
      'city.beijing': 'Beijing',
      'city.shanghai': 'Shanghai',
      'city.hangzhou': 'Hangzhou',
      'city.chengdu': 'Chengdu',
      'city.guangzhou': 'Guangzhou',
      'city.chongqing': 'Chongqing',
      'nav.cities': 'Cities',
      'cities.title': 'Explore by City',
      'cities.desc': 'Pick a city to see our top-recommended rooms there.',
      'cities.room': 'recommended room',
      'cities.rooms': 'recommended rooms',
      'toast.label': 'Achievement',
      'toast.games': 'Unlocked: Top Games',
      'toast.booking': 'Unlocked: How to Book',
      'toast.why': 'Unlocked: Why Us',
      'toast.faq': 'Unlocked: FAQ',
      'toast.secret': 'Secret Unlocked: Konami Master'
    },
    zh: {
      'meta.title': '中国密室指南 · China Escape Room Guide',
      'nav.logo': '密室指南',
      'nav.games': '精选密室',
      'nav.booking': '预定方式',
      'nav.why': '为什么选择我们',
      'nav.faq': '常见问题',
      'nav.cta': '立即预定',
      'hero.eyebrow': '中国密室导览 · 面向国际玩家',
      'hero.title': '解锁真实的<br>中国密室体验',
      'hero.sub': '来中国玩密室，正在成为越来越多外国玩家的新潮流——这并非偶然。这里有大型机械装置、沉浸式真人互动演绎，以及电影级别的场景制作，都是别处难以复制的体验。诚挚欢迎你来亲身感受。不知道怎么预定？这个网站就是为你准备的。',
      'console.label': 'SYSTEM · 挑战倒计时',
      'console.status': '状态：待解锁',
      'hero.cta1': '浏览精选密室 →',
      'hero.cta2': '查看预定方式',
      'stat.cities': '覆盖城市',
      'stat.rooms': '精选密室主题',
      'stat.rating': '玩家平均评分',
      'stat.assist': '中文预定协助',
      'games.title': '全部精选密室',
      'games.note': '全部密室信息均提供英文介绍',
      'games.desc': '本榜单基于中国及国际玩家的真实体验大数据生成，非商业推广排名。每个主题的详细介绍即将上线。',
      'game.viewMore': '查看详情 →',
      'game.modal.cta': '咨询预定 →',
      'game.modal.comingSoon': '这间密室的详细介绍即将上线。如果你现在就想预定，欢迎联系我们，我们会直接协助你完成预定。',
      'game.modal.topRank': '全部精选密室 · 第',
      'game.comingSoon': '详细介绍即将上线',
      'room.horror': '恐怖程度',
      'room.enYes': '提供英文版',
      'room.enNo': '仅中文',
      'room.min': '分钟',
      'room.players': '人',
      'room.by': '出品：',
      'edit.button': '编辑',
      'edit.addImage': '+ 添加图片',
      'edit.type': '类型 / 题材',
      'edit.horror': '恐怖程度 (0-5)',
      'edit.hasEnglish': '是否有英文版？',
      'edit.hasEnglishUnset': '— 保持不变 —',
      'edit.yes': '有',
      'edit.no': '没有',
      'edit.price': '价格 (RMB)',
      'edit.duration': '时长 (分钟)',
      'edit.players': '人数（例如 4-6）',
      'edit.storeName': '门店名称',
      'edit.address': '地址',
      'edit.hours': '营业时间',
      'edit.phone': '联系电话',
      'edit.bookingInfo': '预定方式',
      'edit.videoUrl': '宣传片视频链接',
      'edit.videoHint': '在上方编辑框中填写宣传片链接。',
      'edit.addReview': '+ 添加评论',
      'edit.reviewText': '玩家的评价内容...',
      'edit.reviewAuthor': '姓名 / 网名（可选）',
      'edit.save': '保存',
      'edit.cancel': '取消',
      'edit.reset': '恢复原始数据',
      'edit.hasCustomInfo': '✓ 已添加自定义信息',
      'auth.title': '登录后才能编辑',
      'auth.email': '邮箱',
      'auth.password': '密码',
      'auth.submit': '登录',
      'auth.signOut': '退出登录',
      'crop.title': '调整图片',
      'crop.hint': '拖动调整位置，滑动条可缩放',
      'crop.confirm': '使用这张照片',
      'room.back': '← 返回全部密室',
      'room.gallery': '更多图片',
      'room.video': '宣传片',
      'room.watchTrailer': '▶ 观看宣传片',
      'room.viewReview': '▶ 查看玩家评价',
      'room.reviews': '玩家评价',
      'room.bookingInfo': '预定方式与地址',
      'room.bookingCta': '点击这里跳转到 Booking App →',
      'room.bookingRules': '预订规则',
      'edit.addBookingRules': '+ 添加图片',
      'edit.changeBookingRules': '更换图片',
      'edit.bookingRulesTextPlaceholder': '输入英文预订规则...',
      'edit.bookingRulesLink': '翻译服务预定链接',
      'room.bookingRulesLinkCta': '来源 →',
      'room.moreInCity': '更多推荐 · ',
      'games.more': '按城市探索更多 →',
      'booking.title': '如何预定中国密室',
      'booking.desc': '大多数中国密室主要通过本地平台预定——主要是大众点评和美团，而非门店自己的官网。本网站是信息中心，并不提供预定功能：先在这里挑选主题，再前往下方平台直接预定。如果你无法使用中国的App预定，也可以联系KK，由她代为预定。',
      'step1.title': '选择密室与场次',
      'step1.desc': '浏览本页精选主题，确认城市、时长与开放场次。',
      'step2.title': '通过平台下单',
      'step2.desc': '在大众点评或美团完成在线预定与付款——这是大多数门店实际使用的平台，少数门店也有微信小程序，但并非主流预定渠道。',
      'step3.title': '获取中文协助',
      'step3.desc': '如遇语言障碍，可联系我们协助沟通门店与确认信息。',
      'step4.title': '抵达店铺体验',
      'step4.desc': '提前15分钟到店，出示预定凭证，开始你的解谜之旅。',
      'channel1.name': '大众点评',
      'channel1.desc': '大部分门店的主要预定入口，可查看真实点评与门店评分',
      'channel2.name': '美团',
      'channel2.desc': '团购优惠与场次实时查询',
      'channel3.name': '微信小程序',
      'channel3.desc': '少数门店使用，远不如大众点评/美团常见',
      'channel4.name': '电话 / 到店预约',
      'channel4.desc': '适合热门场次或团体预定',
      'why.title': '为什么选择这份指南',
      'feature1.title': '精选而非罗列',
      'feature1.desc': '所有推荐均按剧情、机关设计与沉浸感严格筛选，拒绝流水线内容。',
      'feature2.title': '跨越语言障碍',
      'feature2.desc': '从预定沟通到现场提示，帮助国际玩家跨越中文语言门槛。',
      'feature3.title': '信息实时更新',
      'feature3.desc': '场次、价格与开放状态持续核实，避免扑空或信息过时。',
      'founder.role': 'TERPECA 中国区大使 · 密室博主 & 设计师',
      'founder.bio': '大家好，我是 KK —— TERPECA 中国区大使，中国最具影响力的密室博主之一。我在全世界体验过超过 1000 个沉浸式主题，同时自己也是一名主题设计师，所以看密室的角度不只是玩家，更懂"好设计"背后的逻辑。多年深耕这个行业，让我在国内密室圈积累了扎实的人脉与口碑，也因此能帮你拿到最好的体验资源。我希望让世界看到中国主题的真正实力——欢迎随时联系我，我会尽全力带你体验到中国最顶尖的密室。',
      'founder.social': '小红书 / 抖音',
      'founder.cta': '联系我 →',
      'faq.title': '常见问题',
      'faq1.q': '中国的密室是什么类型的体验？',
      'faq1.a': '中国的密室大多以沉浸式演绎为主，而非纯解谜类型。建议不要抱着"解题"的心态进入密室，而是让自己完全沉浸在故事里，成为故事的一部分，尽情投入、互动、享受其中。',
      'faq2.q': '密室里会有真人演员接触玩家吗？',
      'faq2.a': '绝大多数密室以演绎为主，部分主题会有轻微的肢体接触。如果介意，可以在进场前明确告知店家不希望有肢体接触。',
      'faq3.q': '不会中文可以体验吗？',
      'faq3.a': '部分主题提供英文翻译服务或全英文语音线索，建议优先选择标注"English Available"的主题，或提前通过我们联系门店确认。',
      'faq4.q': '需要提前多久预定？',
      'faq4.a': '热门主题建议提前3-7天预定，节假日或热门场次建议提前两周；冷门时段通常可当天预定。如需门店提供翻译服务，请提前至少七天预定。',
      'faq5.q': '人数不够可以拼场吗？',
      'faq5.a': '大部分门店支持拼场，但如需翻译服务建议包场，以免影响自己或同场中国玩家的体验，具体以门店规则为准。如果人数不够但仍想体验，通常可以按最低起玩人数支付票价，即使人数不足也能游玩。',
      'faq6.q': '如何取消或改期？',
      'faq6.a': '退改政策因门店而异，多数平台支持开场前一定时限内免费改期，建议下单前仔细阅读相关条款。',
      'faq7.q': '为什么点进点评的翻译服务界面，明明说是免费，但都显示很贵的价钱比如999或者888？',
      'faq7.a': '那是防拍价，不是为了让你在这里下单预定，而是为了让这个服务展示出来、让大家看见。如果真的需要预定免费翻译服务，请联络门店或者KK。',
      'cta.title': '准备好接受挑战了吗？',
      'cta.desc': '浏览精选密室，找到属于你的那场解谜冒险。',
      'cta.btn': '开始探索 →',
      'footer.desc': '为国际玩家提供中国密室逃脱的精选推荐与中文预定协助。',
      'footer.explore': '探索',
      'footer.citiesHead': '城市',
      'footer.contact': '联系我们',
      'footer.wechat': '微信公众号',
      'footer.copyright': '© 2026 中国密室指南',
      'footer.disclaimer': '内容仅供参考，具体以门店信息为准',
      'city.beijing': '北京',
      'city.shanghai': '上海',
      'city.hangzhou': '杭州',
      'city.chengdu': '成都',
      'city.guangzhou': '广州',
      'city.chongqing': '重庆',
      'nav.cities': '城市',
      'cities.title': '按城市探索',
      'cities.desc': '选择一座城市，查看我们在当地推荐的密室主题。',
      'cities.room': '个推荐主题',
      'cities.rooms': '个推荐主题',
      'toast.label': '成就达成',
      'toast.games': '解锁成就：精选密室',
      'toast.booking': '解锁成就：预定方式',
      'toast.why': '解锁成就：为什么选择我们',
      'toast.faq': '解锁成就：常见问题',
      'toast.secret': '隐藏成就：密室高手'
    }
  };

  let currentLang = 'en';
  try{ currentLang = localStorage.getItem('escapeGuideLang') || 'en'; }catch(e){}

  function citiesForName(name){
    return Object.keys(CITY_ROOMS).filter(city => CITY_ROOMS[city].includes(name));
  }
  function slugify(name){
    return (name || '').toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-').replace(/^-+|-+$/g, '') || 'room';
  }
  function cityLabel(cityKeys){
    const dict = translations[currentLang] || translations.en;
    return (cityKeys || []).map(k => dict['city.' + k] || k).join(' · ');
  }
  function cityLabelFirst(cityKeys){
    return cityLabel((cityKeys || []).slice(0, 1));
  }

  // Per-room extra details, keyed by the canonical name used in TOP30 / CITY_ROOMS.
  // priceRMB/hasEnglish collected from KK directly; other fields fill in as they're provided.
  const ROOM_INFO = {
    '诺亚': { priceRMB: 338, hasEnglish: true, duration: 100, company: 'MRX', type: '科幻，精神病院，大型机关', typeEn: 'Sci-Fi, Mental Asylum, Large-Scale Mechanisms', players: '4-8', bookingRulesImage: 'images/mrx-booking-rules.jpg', storeName: 'X先生·沉浸密室 (悠唐购物中心店)', address: '朝外南街悠唐购物中心商场西区B1层（博纳影院左侧）', addressEn: 'B1F, West Zone, Youtang Shopping Center, Chaowai South Street (next to Broadway Cinema)', hours: '10:00-次日03:00', hoursEn: '10:00–03:00 (next day)', phone: '+86 155 0101 7536', bookingInfo: 'https://m.dianping.com/shopshare/jVUxlaILqoaxwbvv?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=5RNlZyRN4s_1789393007', bookingRulesLink: 'http://dpurl.cn/Vj1UrhDz' },
    '女屋': { hasEnglish: true, duration: 100, company: 'The Second World', type: '美式恐怖酒店', typeEn: 'American Horror, Hotel', priceRMB: 328, players: '4-6', reviews: [{ url: 'https://escaperoomers.de/escape-room/witch-house/' }], bookingRulesImage: 'images/mrx-booking-rules.jpg', storeName: '屋有岛深度体验密室 (三里屯店)', address: '工人体育场北路13号茂业广场三楼', addressEn: '3F, Maoye Plaza, No.13 Gongti North Road', hours: '10:00-次日02:00', hoursEn: '10:00–02:00 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/l80TjF2yYGgvcrCE?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=c5da7SvWho_1789392919', phone: '+86 185 1062 7974', bookingRulesLink: 'http://dpurl.cn/Vj1UrhDz' },
    '艾洛拉': { priceRMB: 288, hasEnglish: true, duration: 100, company: 'MRX', type: '中世纪童趣，非恐解密', typeEn: 'Medieval Whimsy, Non-Horror Puzzle', players: '4-7', bookingRulesImage: 'images/mrx-booking-rules.jpg', storeName: '屋有岛深度体验密室 (三里屯店)', address: '工人体育场北路13号茂业广场二楼', addressEn: '2F, Maoye Plaza, No.13 Gongti North Road', hours: '10:00-次日02:00', hoursEn: '10:00–02:00 (next day)', phone: '+86 185 1917 5314', bookingInfo: 'https://m.dianping.com/shopshare/k8ymyWikxRcIXQ2S?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=KTethKMzL1_1789412927' },
    '神话': { priceRMB: 298, hasEnglish: true, duration: 90, company: 'The Second World', type: '海底盗墓，中式神话，非恐解密', typeEn: 'Underwater Tomb Raiding, Chinese Mythology, Non-Horror Puzzle', players: '4-6', bookingRulesImage: 'images/mrx-booking-rules.jpg', storeName: '屋有岛·沉浸密室 (悠唐购物中心店)', address: '朝外街道悠唐购物中心4层（商场西侧，聚宝源隔壁）', addressEn: '4F, Youtang Shopping Center, Chaowai Subdistrict (west side of the mall, next to Juebaoyuan)', hours: '10:00-次日03:00', hoursEn: '10:00–03:00 (next day)', phone: '+86 132 6104 8043', bookingInfo: 'https://m.dianping.com/shopshare/l6mEW8tnesNRWiL9?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=zTR7P1es8A_1789393523', bookingRulesLink: 'http://dpurl.cn/Vj1UrhDz' },
    'VISAGE': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', players: '4-6', bookingRulesImage: 'images/umeplay-booking-rules.jpg', bookingRulesLink: 'https://www.instagram.com/p/DanCS6vG4dF/?stkn=b3JpNHQ0dmpvZDVt' },
    'ENOLA': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', players: '4-6', type: '苏联背景，惊悚玩偶', typeEn: 'Soviet Setting, Horror Dolls', bookingRulesImage: 'images/umeplay-booking-rules.jpg', storeName: 'UMEPLAY逃脱艺术 (朝阳店)', address: '高碑店村东店国际文化艺术园区西门', addressEn: 'West Gate, International Culture & Art Zone, Gaobeidian Village East', hours: '09:30-24:00', hoursEn: '09:30–24:00', phone: '+86 132 6104 8045', bookingInfo: 'https://m.dianping.com/shopshare/G2NB6u064zAWbma5?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=wxkTIy01hh_1789393329', bookingRulesLink: 'https://www.instagram.com/p/DanCS6vG4dF/?stkn=b3JpNHQ0dmpvZDVt' },
    'SINNER': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', players: '4-6', bookingRulesImage: 'images/umeplay-booking-rules.jpg', bookingRulesLink: 'https://www.instagram.com/p/DanCS6vG4dF/?stkn=b3JpNHQ0dmpvZDVt' },
    '楼兰古墓2': { priceRMB: 328, hasEnglish: false, duration: 90, company: '301 Immersive', type: '中国古墓盗墓，机关，解谜', typeEn: 'Tomb Raiding, Mechanisms, Puzzle' },
    'HAVEN': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', type: '末日废土，大型机关', typeEn: 'Post-Apocalyptic, Large-Scale Mechanisms', players: '4-6', reviews: [{ url: 'https://escaperoomers.de/escape-room/haven/' }], bookingRulesImage: 'images/umeplay-booking-rules.jpg', storeName: 'UMEPLAY逃脱艺术 (杨浦店)', address: '黄兴路221号互联宝地D2栋1层', addressEn: '1F, Building D2, Internet Valley, No.221 Huangxing Road', hours: '9:30-24:00', hoursEn: '09:30–24:00', bookingInfo: 'https://m.dianping.com/shopshare/H8n5885SslucCwHY?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=c7I8smPvsu_1789392482', phone: '+86 131 6717 7476', bookingRulesLink: 'https://www.instagram.com/p/DanCS6vG4dF/?stkn=b3JpNHQ0dmpvZDVt' },
    'INSANE II': { hasEnglish: true, duration: 75, company: 'UMEPLAY', type: '悬疑探案，美式恐怖', typeEn: 'Mystery/Detective, American Horror', players: '4-6', reviews: [{ url: 'https://escaperoomers.de/escape-room/insane-2/' }], bookingRulesImage: 'images/umeplay-booking-rules.jpg', storeName: 'UMEPLAY多感官实景游戏 (天安千树店)', address: '莫干山路600号千树3楼301室', addressEn: 'Room 301, 3F, Qianshu, No.600 Moganshan Road', hours: '9:30-次日02:30', hoursEn: '09:30–02:30 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H48qL3VvlrFyKgsU?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=poMIC2cV54_1789392077', phone: '+86 131 2241 7031', bookingRulesLink: 'https://www.instagram.com/p/DanCS6vG4dF/?stkn=b3JpNHQ0dmpvZDVt' },
    'GATEMAN': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', type: '战争和历史，死亡与遗忘', typeEn: 'War & History, Death and Forgetting', players: '4-6', reviews: [{ url: 'https://escaperoomers.de/escape-room/gateman/' }], bookingRulesImage: 'images/umeplay-booking-rules.jpg', storeName: 'UMEPLAY多感官实景游戏 (天安千树店)', address: '莫干山路600号千树3楼301室', addressEn: 'Room 301, 3F, Qianshu, No.600 Moganshan Road', hours: '9:30-次日02:30', hoursEn: '09:30–02:30 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H48qL3VvlrFyKgsU?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=poMIC2cV54_1789392077', phone: '+86 131 2241 7031', bookingRulesLink: 'https://www.instagram.com/p/DanCS6vG4dF/?stkn=b3JpNHQ0dmpvZDVt' },
    'REVIVER': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', type: '废弃医院，探灵纪实', typeEn: 'Abandoned Hospital, Paranormal Investigation', players: '4-6', bookingRulesImage: 'images/umeplay-booking-rules.jpg', storeName: 'UMEPLAY逃脱艺术 (杨浦店)', address: '黄兴路221号互联宝地D2栋1层', addressEn: '1F, Building D2, Internet Valley, No.221 Huangxing Road', hours: '9:30-24:00', hoursEn: '09:30–24:00', bookingInfo: 'https://m.dianping.com/shopshare/H8n5885SslucCwHY?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=c7I8smPvsu_1789392482', phone: '+86 131 6717 7476', bookingRulesLink: 'https://www.instagram.com/p/DanCS6vG4dF/?stkn=b3JpNHQ0dmpvZDVt' },
    '白夜': { priceRMB: 298, hasEnglish: true, duration: 90, company: 'The Second World', type: '日式校园怪谈', typeEn: 'Japanese School Horror', players: '4-8', storeName: '屋有岛沉浸游戏旗舰店 (中山公园店)', address: '宣化路300号华宁弘基生活广场5楼501', addressEn: 'Room 501, 5F, Huaning Hongji Life Plaza, No.300 Xuanhua Road', hours: '09:30-次日01:30', hoursEn: '09:30–01:30 (next day)', phone: '+86 132 4831 9607', bookingInfo: 'https://m.dianping.com/shopshare/H9tCJR8dy5CTRxh3?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=0dsQg8dYxs_1789393368' },
    'Cindy死了九次': { priceRMB: 360, hasEnglish: true, duration: 120, company: 'Cubic Escape - 6min', type: '温情感人，非恐抉择互动', typeEn: 'Heartwarming, Non-Horror Choice-Driven Interaction', players: '4-12', reviews: [{ url: 'https://escaperoomers.de/escape-room/cindy-died-9-times/' }], storeName: '魔方密室·6MINS (我格广场店)', address: '长寿路街道武宁路101号我格广场5层501室，123室-03室', addressEn: 'Room 501 (123-03), 5F, Wo Ge Plaza, No.101 Wuning Road, Changshou Road Subdistrict', hours: '9:30-22:30', hoursEn: '09:30–22:30', bookingInfo: 'https://m.dianping.com/shopshare/H76FzFo5hsC1W6Cy?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=tC4BkpveZN_1789392611', phone: '+86 131 6717 8047' },
    'WUKONG': { priceRMB: 328, hasEnglish: false, duration: 90, company: 'MRX', type: '中国神话，非恐解密', typeEn: 'Chinese Mythology, Non-Horror Puzzle', players: '5-8', storeName: 'X先生MRX沉浸娱乐 (外滩店)', address: '豫园街道河南南路489号M2香港名都F3', addressEn: 'F3, M2 Hong Kong Mingdu, No.489 Henan South Road, Yuyuan Subdistrict', hours: '10:00-次日01:00', hoursEn: '10:00–01:00 (next day)', phone: '+86 130 4411 0920', bookingInfo: 'https://m.dianping.com/shopshare/H6QgMCLxCp8vSDOn?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=B8I5iB42Qa_1789393464' },
    'SOUL HOUSE': { priceRMB: 288, hasEnglish: true, duration: 65, company: 'UMEPLAY x INS', type: '沉浸式演绎酒吧体验', typeEn: 'Immersive Live-Actor Bar Experience', players: '4-8', reviews: [{ url: 'https://escaperoomers.de/escape-room/soul-house/' }], storeName: 'SOUL HOUSE By INS新乐园沉浸式鸡尾酒吧', address: '瑞金二路街道复兴中路521号2-3楼', addressEn: '2-3F, No.521 Fuxing Middle Road, Ruijin 2nd Road Subdistrict', hours: '18:30-次日01:00', hoursEn: '18:30–01:00 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H2gS8f63m2iE5ckb?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=WsGd303iEY_1789392333', phone: '+86 131 6704 3068' },
    'Undeveloped Memory': { hasEnglish: true, duration: 5, company: 'KK x UMEPLAY x INS', type: '微型体验装置，情感', typeEn: 'Micro Experience, Emotional' },
    '昆仑寒宫2': { priceRMB: 328, hasEnglish: false, duration: 90, company: 'E+', type: '冰窟解密，零下13度盗墓体验', typeEn: 'Ice Cave Puzzle, -13°C Tomb Raiding', reviews: [{ url: 'https://www.instagram.com/reel/DcVEPIhoCVq/?stkn=NGZncngweTh2eWoy' }] },
    '找到你了2': { priceRMB: 298, hasEnglish: false, duration: 90, company: 'MRX', type: '哥特惊悚', typeEn: 'Gothic Horror' },
    'Strike it! Rich!': { priceRMB: 179, hasEnglish: true, duration: 60, company: 'WOW!BOXX', type: '港风欢乐，团队对抗', typeEn: 'Hong Kong-Style Comedy, Team Competition' },
    '溃烂缪斯': { priceRMB: 298, hasEnglish: true, duration: 90, company: 'Dreamland Traveller', type: '美式恐怖酒店，大型机关', typeEn: 'American Horror, Hotel, Large-Scale Mechanisms', players: '4-7', reviews: [{ url: 'https://escaperoomers.de/escape-room/corrupt-muse/' }], storeName: '梦境旅人·沉浸式电影密室 (北京路店)', address: '文明路61号3层 310室-360室-370室-386室', addressEn: '3F, No.61 Wenming Road, Rooms 310-360-370-386', hours: '12:00-次日00:30', hoursEn: '12:00–00:30 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/G22Xb6Hwd8ycXwAE?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=hpFboGDuBk_1789391448', phone: '+86 186 8943 2839', bookingRulesLink: 'http://dpurl.cn/8lDWy9lz' },
    'INSANE': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', players: '4-6', type: '闹鬼房屋，真实感恐惧', typeEn: 'Haunted House, Visceral Horror', bookingRulesImage: 'images/umeplay-booking-rules.jpg', storeName: 'UMEPLAY多感官实景游戏 (天安千树店)', address: '莫干山路600号千树3楼301室', addressEn: 'Room 301, 3F, Qianshu, No.600 Moganshan Road', hours: '9:30-次日02:30', hoursEn: '09:30–02:30 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H48qL3VvlrFyKgsU?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=poMIC2cV54_1789392077', phone: '+86 131 2241 7031', bookingRulesLink: 'https://www.instagram.com/p/DanCS6vG4dF/?stkn=b3JpNHQ0dmpvZDVt' },
    'AFTERLIFE': { hasEnglish: true, duration: 75, company: 'UMEPLAY', priceRMB: 298, players: '4-6', bookingRulesImage: 'images/umeplay-booking-rules.jpg', bookingRulesLink: 'https://www.instagram.com/p/DanCS6vG4dF/?stkn=b3JpNHQ0dmpvZDVt' },
    '不可名状': { priceRMB: 278, hasEnglish: true, duration: 90, company: 'Dreamland Traveller', type: '泰式惊悚，民俗仪式，大型机关', typeEn: 'Thai Horror, Folk Ritual, Large-Scale Mechanisms', players: '4-7', reviews: [{ url: 'https://escaperoomers.de/escape-room/unnamable/' }], storeName: '梦境旅人·沉浸式电影密室(永庆坊店)', address: '恩宁路265-1号', addressEn: 'No.265-1 Enning Road', hours: '13:00-次日01:30', hoursEn: '13:00–01:30 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H4I3kYjg6Sw0ROez?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=YwFzdQI6NM_1789391419', phone: '+86 186 6483 4062', bookingRulesLink: 'http://dpurl.cn/8lDWy9lz' },
    'Dream': { priceRMB: 298, hasEnglish: false, duration: 90, company: 'V Factory', type: '盗梦空间，大型机关，催眠', typeEn: 'Inception-Style Dream Heist, Large-Scale Mechanisms, Hypnosis', players: '4-6', reviews: [{ url: 'https://escaperoomers.de/escape-room/dream/' }], storeName: 'V厂沉浸式剧场 (天河店)', address: '黄埔大道西74号花城汇北区D116号铺（近黄埔大道地铁站，时尚天河，天环广场）', addressEn: 'Shop D116, North Zone, Huachenghui, No.74 Huangpu Avenue West (near Huangpu Avenue Metro Station, Fashion Tianhe, Grandview Plaza)', hours: '12:00-次日03:00', hoursEn: '12:00–03:00 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/G5BPCGrBf1C2f7Kg?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=2pGgI93KiU_1789391475', phone: '+86 186 1319 2974' },
    '暂放的绽放': { hasEnglish: true, duration: 15, company: 'KK x Dreamland Traveller', type: '微型体验装置，情感', typeEn: 'Micro Experience, Emotional', priceRMB: 19.9 },
    '污秽': { priceRMB: 278, hasEnglish: false, duration: 90, company: 'Dreamland Traveller', type: '新中式恐怖，邪教，大型机关', typeEn: 'Chinese Horror, Cult, Large-Scale Mechanisms', players: '4-7', storeName: '梦境旅人·沉浸式电影密室(永庆坊店)', address: '恩宁路265-1号', addressEn: 'No.265-1 Enning Road', hours: '13:00-次日01:30', hoursEn: '13:00–01:30 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H4I3kYjg6Sw0ROez?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=YwFzdQI6NM_1789391419', phone: '+86 186 6483 4062' },
    '幻觉游戏': { priceRMB: 178, hasEnglish: false, duration: 135, company: 'The Lost Planet', type: '探案解密', typeEn: 'Detective, Puzzle' },
    '这没有游戏': { priceRMB: 138, hasEnglish: false, duration: 90, company: 'The Lost Planet' },
    '纸人回魂': { priceRMB: 198, hasEnglish: false, duration: 75, company: 'Dreamland Traveller', type: '中式民俗，肢体表演，中式祭祀', typeEn: 'Chinese Folklore, Physical Performance, Chinese Ritual', players: '4-6', storeName: '梦境旅人·沉浸式电影密室(永庆坊店)', address: '恩宁路265-1号', addressEn: 'No.265-1 Enning Road', hours: '13:00-次日01:30', hoursEn: '13:00–01:30 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H4I3kYjg6Sw0ROez?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=YwFzdQI6NM_1789391419', phone: '+86 186 6483 4062' },
    '坏机器': { priceRMB: 298, hasEnglish: true, duration: 90, company: 'Free City', type: '玩具工厂，怪诞角色，强互动', typeEn: 'Toy Factory, Bizarre Characters, High Interaction', players: '6-7', reviews: [{ url: 'https://escaperoomers.de/escape-room/bad-machine/' }], storeName: '自由城·超级密室 (大象城店)', address: '翠苑街道文一路294号3楼317店铺', addressEn: 'Shop 317, 3F, No.294 Wenyi Road, Cuiyuan Subdistrict', hours: '10:00-次日04:00', hoursEn: '10:00–04:00 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/G7cMPCbjfMJ6bpF0?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=xTGScpHFNs_1789392691', bookingRulesLink: 'http://dpurl.cn/DxOXDkXz' },
    '镇灵村': { priceRMB: 268, hasEnglish: false, duration: 90, company: 'MRX' },
    '萨乌达德': { priceRMB: 238, hasEnglish: true, duration: 90, company: 'Free City', type: '情感演绎互动，家庭', typeEn: 'Emotional Live-Actor Interaction, Family' },
    '朝圣': { priceRMB: 288, hasEnglish: true, duration: 80, company: 'Witch Travel Agency', type: '赛博朋克，游戏感', typeEn: 'Cyberpunk, Game-like', players: '5-8', reviews: [{ url: 'https://escaperoomers.de/escape-room/pilgrimage/' }], bookingRulesImage: 'images/witch-travel-agency-booking-rules.jpg', storeName: '魔女旅行社·不思议之旅', address: '五桂路阳光100米娅中心负一层571号', addressEn: 'Shop 571, B1F, Sunshine 100 Mia Center, Wugui Road', hours: '13:30-次日02:00', hoursEn: '13:30–02:00 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H8Yv9C6nXvzvqjTP?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=LqpgqQoZhI_1789392812', phone: '+86 184 2892 3934', bookingRulesLink: 'http://dpurl.cn/RE2uangz' },
    '神佑': { priceRMB: 298, hasEnglish: true, duration: 90, company: 'Witch Travel Agency', type: '东方赛博朋克，奇幻神话', typeEn: 'Eastern Cyberpunk, Fantasy Mythology', players: '6-8', reviews: [{ url: 'https://escaperoomers.de/escape-room/devine-blessing/' }], bookingRulesImage: 'images/witch-travel-agency-booking-rules.jpg', storeName: '魔女旅行社·不思议之旅', address: '五桂路阳光100米娅中心负一层571号', addressEn: 'Shop 571, B1F, Sunshine 100 Mia Center, Wugui Road', hours: '13:30-次日02:00', hoursEn: '13:30–02:00 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H8Yv9C6nXvzvqjTP?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=LqpgqQoZhI_1789392812', phone: '+86 184 2892 3934', bookingRulesLink: 'http://dpurl.cn/RE2uangz' },
    '安乐': { priceRMB: 268, hasEnglish: true, duration: 80, company: 'Witch Travel Agency', type: '日式规则怪谈，奇幻世界', typeEn: 'Japanese Rule-Horror, Fantasy World', players: '5-6', bookingRulesImage: 'images/witch-travel-agency-booking-rules.jpg', storeName: '魔女旅行社·不思议之旅', address: '五桂路阳光100米娅中心负一层571号', addressEn: 'Shop 571, B1F, Sunshine 100 Mia Center, Wugui Road', hours: '13:30-次日02:00', hoursEn: '13:30–02:00 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H8Yv9C6nXvzvqjTP?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=LqpgqQoZhI_1789392812', phone: '+86 184 2892 3934', bookingRulesLink: 'http://dpurl.cn/RE2uangz' },
    'Lily': { priceRMB: 268, hasEnglish: true, duration: 80, company: 'Witch Travel Agency', type: '哥特恐怖，暗黑美学', typeEn: 'Gothic Horror, Dark Aesthetics', players: '5-6', reviews: [{ url: 'https://escaperoomers.de/escape-room/lily/' }], bookingRulesImage: 'images/witch-travel-agency-booking-rules.jpg', storeName: '魔女旅行社·不思议之旅', address: '五桂路阳光100米娅中心负一层571号', addressEn: 'Shop 571, B1F, Sunshine 100 Mia Center, Wugui Road', hours: '13:30-次日02:00', hoursEn: '13:30–02:00 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H8Yv9C6nXvzvqjTP?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=LqpgqQoZhI_1789392812', phone: '+86 184 2892 3934', bookingRulesLink: 'http://dpurl.cn/RE2uangz' },
    "Dolls' House": { priceRMB: 258, hasEnglish: false, duration: 80, company: 'Lostland', type: '惊悚玩偶，梦想与现实', typeEn: 'Horror Dolls, Dreams vs Reality', players: '5-6', reviews: [{ url: 'https://escaperoomers.de/escape-room/dolls-house/' }], storeName: 'Lostland交互式沉浸剧场', address: '水碾河南37号U37创意仓库8栋3楼', addressEn: '3F, Building 8, U37 Creative Warehouse, No.37 Shuinianhe South Road', hours: '12:00-次日03:30', hoursEn: '12:00–03:30 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/G1Q7odvfXom3SbX4?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=GF5cvRUTrR_1789391945', phone: '+86 155 2841 0314' },
    '再见黛安娜': { priceRMB: 258, hasEnglish: false, duration: 80, company: 'Grey Raven', type: '情感交互，剧情感人', typeEn: 'Emotional Interaction, Touching Story' },
    '玛雅': { priceRMB: 348, hasEnglish: false, duration: 140, company: 'Brain Storm Lab', type: '大型机关，盗墓，机械解密', typeEn: 'Large-Scale Mechanisms, Tomb Raiding, Mechanical Puzzles', players: '4-8', reviews: [{ url: 'https://escaperoomers.de/escape-room/maya/' }], address: '机投桥街道草金路29号蓝光金双楠2期', addressEn: 'Bluetown Jinshuangnan Phase 2, No.29 Caojin Road, Jitouqiao Subdistrict', hours: '11:00-24:00', hoursEn: '11:00–24:00', storeName: '脑洞实验室 (永康路店)', phone: '+86 185 9994 3463', bookingInfo: 'https://m.dianping.com/shopshare/G99jpeVTTWaT83PH?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=XKFLdDf4EJ_1789413173' },
    '观落阴': { priceRMB: 268, hasEnglish: false, duration: 100, company: 'Spiritual Investigation Bureau', type: '大型机关，中式奇幻', typeEn: 'Large-Scale Mechanisms, Chinese Fantasy', players: '5-7', storeName: '灵调局实景娱乐体验馆', address: '一环路北四段108号附6号银海中心商业楼2楼220-225号', addressEn: 'Rooms 220-225, 2F, Yinhai Center Commercial Building, No.108-6 Yihuan Road North Section 4', hours: '13:00-次日02:00', hoursEn: '13:00–02:00 (next day)', phone: '+86 155 8344 4141', bookingInfo: 'https://m.dianping.com/shopshare/G7dz4rqMTE25TRd1?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=Erlv3s9uS2_1789393429' },
    '太岁': { priceRMB: 238, hasEnglish: true, duration: 90, company: 'RE.Creature', type: '中式民俗，大型', typeEn: 'Chinese Folklore, Large-Scale', players: '6-10', reviews: [{ url: 'https://escaperoomers.de/escape-room/tai-sue/' }], storeName: '产物重塑感官密室', address: '九龙坡区-龙腾大道201号附3号（马路旁）', addressEn: 'No.201-3 Longteng Avenue, Jiulongpo District (roadside)', hours: '12:00-次日02:00', hoursEn: '12:00–02:00 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/l3luFMVJoQdrvqxJ?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=7quNqLyZR4_1789391791', phone: '+86 132 2409 1433', bookingRulesLink: 'http://dpurl.cn/x4uwJn5z' },
    '活神仙': { priceRMB: 238, hasEnglish: false, duration: 105, company: 'Dragon Gallery', type: '独栋密室，中式民俗', typeEn: 'Standalone Building, Chinese Folklore' },
    '逢魔时': { priceRMB: 198, hasEnglish: false, duration: 75, company: 'City of Fantasy', type: '日式汤泉，大型机关，日式怪物', typeEn: 'Japanese Hot Spring, Large-Scale Mechanisms, Japanese Monsters', players: '4-7', storeName: '幻城密室 (iBOX店)', address: '建新北路iBOX商场1楼1-2号商铺', addressEn: 'Shops 1-2, 1F, iBOX Mall, Jianxin North Road', hours: '24小时（13:00-次日06:00）', hoursEn: '24 Hours (13:00–06:00 next day)', phone: '+86 131 9312 0204', bookingInfo: 'https://m.dianping.com/shopshare/l1eOwPTFGQo5TFiM?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=uUUj5TQFP9_1789393582' },
    '复原': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', players: '4-6', type: '情感演绎，视觉特效', typeEn: 'Emotional Performance, Visual Effects', bookingRulesImage: 'images/umeplay-booking-rules.jpg', storeName: 'UMEPLAY多感官实景游戏 (天安千树店)', address: '莫干山路600号千树3楼301室', addressEn: 'Room 301, 3F, Qianshu, No.600 Moganshan Road', hours: '9:30-次日02:30', hoursEn: '09:30–02:30 (next day)', bookingInfo: 'https://m.dianping.com/shopshare/H48qL3VvlrFyKgsU?msource=Appshare2021&utm_source=shop_share&shoptype=30&shopcategoryid=2754&isoversea=0&shareid=poMIC2cV54_1789392077', phone: '+86 131 2241 7031', bookingRulesLink: 'https://www.instagram.com/p/DanCS6vG4dF/?stkn=b3JpNHQ0dmpvZDVt' }
  };
  // ---------- cloud edits (Firebase + Cloudinary) ----------
  // Lets KK add a poster / tweak fields right on the room page. Text fields save to
  // Firestore; photos upload to Cloudinary (Firebase Storage needs a paid Blaze plan,
  // Cloudinary's free tier doesn't) and the resulting URL is what's saved in Firestore.
  // Either way it's live for every visitor within seconds — not just on her own device.
  // Reading is open to everyone; writing requires being signed in (see the sign-in
  // modal wired up in room.html).
  const CLOUDINARY_CLOUD_NAME = 'zmzqssuw';
  const CLOUDINARY_UPLOAD_PRESET = 'chinaescaperoom';
  function uploadToCloudinary(dataUrl){
    const formData = new FormData();
    formData.append('file', dataUrl);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    return fetch('https://api.cloudinary.com/v1_1/' + CLOUDINARY_CLOUD_NAME + '/image/upload', {
      method: 'POST', body: formData
    }).then(res => {
      if(!res.ok) return res.text().then(t => { throw new Error('Cloudinary upload failed (' + res.status + '): ' + t); });
      return res.json();
    }).then(data => data.secure_url);
  }

  let cloudEdits = {}; // slug -> Firestore doc data, cached in memory after the initial load
  let postersReadyResolve;
  const postersReady = new Promise(res => { postersReadyResolve = res; });

  fsDB.collection('rooms').get().then(snapshot => {
    snapshot.forEach(doc => { cloudEdits[doc.id] = doc.data(); });
    postersReadyResolve();
  }).catch(err => {
    console.error('Failed to load room edits from Firestore:', err);
    postersReadyResolve(); // still let the page render with just the static ROOM_INFO
  });

  // Returns a Promise<boolean> — true once the write has actually been saved.
  function setLocalEdit(name, patch){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    const clean = {};
    Object.keys(patch).forEach(k => { if(patch[k] !== undefined) clean[k] = patch[k]; });
    if(!Object.keys(clean).length) return Promise.resolve(true);
    return fsDB.collection('rooms').doc(slug).set(clean, { merge: true }).then(() => {
      cloudEdits[slug] = Object.assign({}, cloudEdits[slug] || {}, clean);
      return true;
    }).catch(err => { console.error('setLocalEdit failed:', err); return false; });
  }

  // Poster is a photo, not a small text field — upload it to Cloudinary, then point
  // the Firestore doc's `poster` field at the resulting URL.
  function setPoster(name, dataUrl){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    return uploadToCloudinary(dataUrl)
      .then(url => fsDB.collection('rooms').doc(slug).set({ poster: url }, { merge: true }).then(() => {
        cloudEdits[slug] = Object.assign({}, cloudEdits[slug] || {}, { poster: url });
        return true;
      }))
      .catch(err => { console.error('setPoster failed:', err); return false; });
  }

  // Note: this only removes the Firestore record — it doesn't delete the image files
  // from Cloudinary (that needs a signed request, which means a server; not worth it
  // for how rarely "Reset to Original" gets used, and Cloudinary's free tier is generous).
  function clearLocalEdit(name){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    return fsDB.collection('rooms').doc(slug).delete()
      .then(() => { delete cloudEdits[slug]; return true; })
      .catch(err => { console.error('clearLocalEdit failed:', err); return false; });
  }

  function hasLocalEdit(name){
    return !!cloudEdits[slugify(name)];
  }

  // ---------- extra photo gallery (Cloudinary) ----------
  function addGalleryImage(name, dataUrl){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    return uploadToCloudinary(dataUrl)
      .then(url => fsDB.collection('rooms').doc(slug).set(
        { gallery: firebase.firestore.FieldValue.arrayUnion(url) }, { merge: true }
      ).then(() => {
        const rec = cloudEdits[slug] || {};
        rec.gallery = (rec.gallery || []).concat([url]);
        cloudEdits[slug] = rec;
        return true;
      }))
      .catch(err => { console.error('addGalleryImage failed:', err); return false; });
  }
  function removeGalleryImage(name, index){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    const rec = cloudEdits[slug];
    if(!rec || !rec.gallery) return Promise.resolve(true);
    const newGallery = rec.gallery.filter((_, i) => i !== index);
    return fsDB.collection('rooms').doc(slug).set({ gallery: newGallery }, { merge: true })
      .then(() => { rec.gallery = newGallery; return true; })
      .catch(err => { console.error('removeGalleryImage failed:', err); return false; });
  }

  // ---------- translated booking-rules photo (Cloudinary) ----------
  // A photo of the venue's own booking-rules sheet, translated to English — shown
  // only on rooms marked hasEnglish, since that's who it's for.
  function setBookingRulesImage(name, dataUrl){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    return uploadToCloudinary(dataUrl)
      .then(url => fsDB.collection('rooms').doc(slug).set({ bookingRulesImage: url }, { merge: true }).then(() => {
        cloudEdits[slug] = Object.assign({}, cloudEdits[slug] || {}, { bookingRulesImage: url });
        return true;
      }))
      .catch(err => { console.error('setBookingRulesImage failed:', err); return false; });
  }

  // ---------- player review quotes (Firestore) ----------
  function addReview(name, review){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    return fsDB.collection('rooms').doc(slug).set(
      { reviews: firebase.firestore.FieldValue.arrayUnion(review) }, { merge: true }
    ).then(() => {
      const rec = cloudEdits[slug] || {};
      rec.reviews = (rec.reviews || []).concat([review]);
      cloudEdits[slug] = rec;
      return true;
    }).catch(err => { console.error('addReview failed:', err); return false; });
  }
  function removeReview(name, index){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    const rec = cloudEdits[slug];
    if(!rec || !rec.reviews) return Promise.resolve(true);
    const newReviews = rec.reviews.filter((_, i) => i !== index);
    return fsDB.collection('rooms').doc(slug).set({ reviews: newReviews }, { merge: true })
      .then(() => { rec.reviews = newReviews; return true; })
      .catch(err => { console.error('removeReview failed:', err); return false; });
  }

  function roomInfo(name){
    const base = ROOM_INFO[name] || {};
    const cloud = cloudEdits[slugify(name)];
    const merged = cloud ? Object.assign({}, base, cloud) : Object.assign({}, base);
    // reviews come from two places (hardcoded in ROOM_INFO + added live via the edit
    // form into Firestore) — concatenate instead of letting one silently hide the other
    const baseReviews = base.reviews || [];
    const cloudReviews = (cloud && cloud.reviews) || [];
    if(baseReviews.length || cloudReviews.length) merged.reviews = baseReviews.concat(cloudReviews);
    return merged;
  }

  function buildHorrorPips(level){
    const wrap = document.createElement('span');
    wrap.className = 'horror-pips';
    for(let i = 1; i <= 5; i++){
      const pip = document.createElement('span');
      pip.className = 'pip' + (i <= level ? ' on' : '');
      wrap.appendChild(pip);
    }
    return wrap;
  }

  function typeLabels(info){
    const typeStr = currentLang === 'zh' ? info.type : (info.typeEn || info.type);
    if(!typeStr) return [];
    return typeStr.split(/[,，]/).map(s => s.trim()).filter(Boolean);
  }

  function buildMediaCaption(info){
    const labels = typeLabels(info);
    if(!labels.length) return null;
    const el = document.createElement('div');
    el.className = 'game-type-label';
    labels.forEach(label => {
      const tag = document.createElement('span');
      tag.className = 'game-type-tag';
      tag.textContent = label;
      el.appendChild(tag);
    });
    return el;
  }

  function buildRoomTags(info){
    const bits = [];
    const dict = translations[currentLang] || translations.en;
    if(info.horror !== undefined){
      const h = document.createElement('span');
      h.className = 'game-tag game-tag-horror';
      const label = document.createElement('span');
      label.textContent = dict['room.horror'] || 'Fear Level';
      h.appendChild(label);
      h.appendChild(buildHorrorPips(info.horror));
      bits.push(h);
    }
    if(info.hasEnglish !== undefined){
      const e = document.createElement('span');
      e.className = 'game-tag game-tag-en' + (info.hasEnglish ? '' : ' off');
      e.textContent = info.hasEnglish ? (dict['room.enYes'] || 'English Available') : (dict['room.enNo'] || 'Chinese Only');
      bits.push(e);
    }
    if(!bits.length) return null;
    const wrap = document.createElement('div');
    wrap.className = 'game-tags';
    bits.forEach(b => wrap.appendChild(b));
    return wrap;
  }

  function buildRoomFacts(info){
    const dict = translations[currentLang] || translations.en;
    const parts = [];
    if(info.priceRMB) parts.push('¥' + info.priceRMB);
    if(info.duration) parts.push(info.duration + (dict['room.min'] || ' min'));
    if(info.players) parts.push(info.players + (dict['room.players'] || ' players'));
    if(!parts.length) return null;
    const el = document.createElement('div');
    el.className = 'game-facts';
    el.textContent = parts.join(' · ');
    return el;
  }

  function buildRoomCompany(info){
    if(!info.company) return null;
    const dict = translations[currentLang] || translations.en;
    const el = document.createElement('div');
    el.className = 'game-company';
    el.textContent = (dict['room.by'] || 'By ') + info.company;
    return el;
  }
