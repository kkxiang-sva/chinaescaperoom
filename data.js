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
    '污秽','神佑','玛雅','白夜','纸人回魂','逢魔时','观落阴','神话','WUKONG','艾洛拉'
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
      'edit.address': 'Address',
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
      'room.reviews': 'Player Comments',
      'room.bookingInfo': 'Booking & Address',
      'room.moreInCity': 'More rooms in ',
      'games.more': 'Browse More by City →',
      'booking.title': 'How to Book an Escape Room in China',
      'booking.desc': "Most rooms take bookings through local platforms rather than their own website — here's the standard process.",
      'step1.title': 'Choose a Room & Time',
      'step1.desc': 'Browse our picks and confirm the city, duration and open sessions.',
      'step2.title': 'Book on a Local Platform',
      'step2.desc': 'Complete payment via WeChat Mini Program, Dianping or Meituan.',
      'step3.title': 'Get Language Help',
      'step3.desc': "Hit a language barrier? Contact us and we'll help confirm details with the venue.",
      'step4.title': 'Arrive & Play',
      'step4.desc': 'Show up 15 minutes early, present your booking confirmation, and start your escape.',
      'channel1.name': 'WeChat Mini Program',
      'channel1.desc': 'The official booking channel for most venues',
      'channel2.name': 'Dianping',
      'channel2.desc': 'Real player reviews and venue ratings',
      'channel3.name': 'Meituan',
      'channel3.desc': 'Group deals and real-time session availability',
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
      'faq1.q': 'Will actors physically touch players?',
      'faq1.a': 'Most rooms are puzzle-focused. Any live-actor or touch elements are clearly labeled on the venue listing, and you can choose a no-contact room in advance.',
      'faq2.q': "Can I play if I don't speak Chinese?",
      'faq2.a': 'Some rooms offer English hint cards or staff assistance. We recommend contacting the venue in advance through us, or choosing a session marked "international-friendly."',
      'faq3.q': 'How far in advance should I book?',
      'faq3.a': 'For popular rooms, book 3-7 days ahead; for holidays, book two weeks out. Off-peak slots are often available same-day.',
      'faq4.q': "Can I join a group if I don't have enough players?",
      'faq4.a': 'Some venues allow joining another group, but immersive narrative rooms usually require a private booking. Check the specific venue\'s policy.',
      'faq5.q': 'How do I cancel or reschedule?',
      'faq5.a': "Cancellation policies vary by venue. Most platforms allow free rescheduling within a certain window before your session — read the terms before booking.",
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
      'edit.address': '地址',
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
      'room.reviews': '玩家评价',
      'room.bookingInfo': '预定方式与地址',
      'room.moreInCity': '更多推荐 · ',
      'games.more': '按城市探索更多 →',
      'booking.title': '如何预定中国密室',
      'booking.desc': '大多数中国密室店铺主要通过本地平台接受预定，以下是标准流程与建议。',
      'step1.title': '选择密室与场次',
      'step1.desc': '浏览本页精选主题，确认城市、时长与开放场次。',
      'step2.title': '通过平台下单',
      'step2.desc': '使用微信小程序、大众点评或美团完成在线预定与付款。',
      'step3.title': '获取中文协助',
      'step3.desc': '如遇语言障碍，可联系我们协助沟通门店与确认信息。',
      'step4.title': '抵达店铺体验',
      'step4.desc': '提前15分钟到店，出示预定凭证，开始你的解谜之旅。',
      'channel1.name': '微信小程序',
      'channel1.desc': '大部分门店的官方预定入口',
      'channel2.name': '大众点评',
      'channel2.desc': '查看真实点评与门店评分',
      'channel3.name': '美团',
      'channel3.desc': '团购优惠与场次实时查询',
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
      'faq1.q': '密室里会有真人演员触碰玩家吗？',
      'faq1.a': '绝大多数密室以解谜为主，是否包含真人演绎会在门店详情中明确标注，玩家可提前选择不含接触环节的主题。',
      'faq2.q': '不会中文可以体验吗？',
      'faq2.a': '部分主题提供英文提示卡或工作人员协助，建议提前通过我们联系门店确认，或选择标注"国际玩家友好"的场次。',
      'faq3.q': '需要提前多久预定？',
      'faq3.a': '热门主题建议提前3-7天预定，节假日建议提前两周，冷门时段通常可当天预定。',
      'faq4.q': '人数不够可以拼场吗？',
      'faq4.a': '部分门店支持拼场，但沉浸式剧情类主题通常要求独立包场，具体以门店规则为准。',
      'faq5.q': '如何取消或改期？',
      'faq5.a': '退改政策因门店而异，多数平台支持开场前一定时限内免费改期，建议下单前仔细阅读条款。',
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
    '诺亚': { priceRMB: 338, hasEnglish: true, duration: 100, company: 'MRX', type: '科幻，精神病院', typeEn: 'Sci-Fi, Mental Asylum' },
    '女屋': { hasEnglish: true, duration: 100, company: 'The Second World', type: '美式恐怖酒店', typeEn: 'American Horror, Hotel', priceRMB: 328 },
    '艾洛拉': { priceRMB: 288, hasEnglish: true, duration: 100, company: 'MRX', type: '中世纪童趣，非恐解密', typeEn: 'Medieval Whimsy, Non-Horror Puzzle' },
    '神话': { priceRMB: 298, hasEnglish: true, duration: 90, company: 'The Second World', type: '海底盗墓，中式神话，非恐解密', typeEn: 'Underwater Tomb Raiding, Chinese Mythology, Non-Horror Puzzle' },
    'VISAGE': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', players: '4-6' },
    'ENOLA': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', players: '4-6', type: '苏联背景，惊悚玩偶', typeEn: 'Soviet Setting, Horror Dolls' },
    'SINNER': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', players: '4-6' },
    '楼兰古墓2': { priceRMB: 328, hasEnglish: false, duration: 90, company: '301 Immersive', type: '中国古墓盗墓，机关，解谜', typeEn: 'Tomb Raiding, Mechanisms, Puzzle' },
    'HAVEN': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', type: '末日废土，大型机关', typeEn: 'Post-Apocalyptic, Large-Scale Mechanisms', players: '4-6' },
    'INSANE II': { hasEnglish: true, duration: 75, company: 'UMEPLAY', type: '悬疑探案，美式恐怖', typeEn: 'Mystery/Detective, American Horror', players: '4-6' },
    'GATEMAN': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', type: '战争和历史，死亡与遗忘', typeEn: 'War & History, Death and Forgetting', players: '4-6' },
    'REVIVER': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', type: '废弃医院，探灵纪实', typeEn: 'Abandoned Hospital, Paranormal Investigation', players: '4-6' },
    '白夜': { priceRMB: 298, hasEnglish: true, duration: 90, company: 'The Second World', type: '日式校园怪谈', typeEn: 'Japanese School Horror' },
    'Cindy死了九次': { priceRMB: 360, hasEnglish: true, duration: 120, company: 'Cubic Escape - 6min', type: '温情感人，非恐抉择互动', typeEn: 'Heartwarming, Non-Horror Choice-Driven Interaction' },
    'WUKONG': { priceRMB: 328, hasEnglish: false, duration: 90, company: 'MRX', type: '中国神话', typeEn: 'Chinese Mythology' },
    'SOUL HOUSE': { priceRMB: 288, hasEnglish: true, duration: 65, company: 'UMEPLAY x INS', type: '沉浸式演绎酒吧体验', typeEn: 'Immersive Live-Actor Bar Experience' },
    'Undeveloped Memory': { hasEnglish: true, duration: 5, company: 'KK x UMEPLAY x INS', type: '微型体验装置，情感', typeEn: 'Micro Experience, Emotional' },
    '昆仑寒宫2': { priceRMB: 328, hasEnglish: false, duration: 90, company: 'E+', type: '冰窟解密，零下13度盗墓体验', typeEn: 'Ice Cave Puzzle, -13°C Tomb Raiding' },
    '找到你了2': { priceRMB: 298, hasEnglish: false, duration: 90, company: 'MRX', type: '哥特惊悚', typeEn: 'Gothic Horror' },
    'Strike it! Rich!': { priceRMB: 179, hasEnglish: true, duration: 60, company: 'WOW!BOXX', type: '港风欢乐，团队对抗', typeEn: 'Hong Kong-Style Comedy, Team Competition' },
    '溃烂缪斯': { priceRMB: 298, hasEnglish: true, duration: 90, company: 'Dreamland Traveller', type: '美式恐怖酒店，大型机关', typeEn: 'American Horror, Hotel, Large-Scale Mechanisms' },
    'INSANE': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', players: '4-6', type: '闹鬼房屋，真实感恐惧', typeEn: 'Haunted House, Visceral Horror' },
    'AFTERLIFE': { hasEnglish: true, duration: 75, company: 'UMEPLAY', priceRMB: 298, players: '4-6' },
    '不可名状': { priceRMB: 278, hasEnglish: true, duration: 90, company: 'Dreamland Traveller', type: '泰式惊悚，民俗仪式，大型机关', typeEn: 'Thai Horror, Folk Ritual, Large-Scale Mechanisms' },
    'Dream': { priceRMB: 298, hasEnglish: false, duration: 90, company: 'V Factory', type: '盗梦空间，大型机关，催眠', typeEn: 'Inception-Style Dream Heist, Large-Scale Mechanisms, Hypnosis' },
    '暂放的绽放': { hasEnglish: true, duration: 15, company: 'KK x Dreamland Traveller', type: '微型体验装置，情感', typeEn: 'Micro Experience, Emotional', priceRMB: 19.9 },
    '污秽': { priceRMB: 278, hasEnglish: false, duration: 90, company: 'Dreamland Traveller', type: '新中式恐怖', typeEn: 'Modern Chinese Horror' },
    '幻觉游戏': { priceRMB: 178, hasEnglish: false, duration: 135, company: 'The Lost Planet', type: '探案解密', typeEn: 'Detective, Puzzle' },
    '这没有游戏': { priceRMB: 138, hasEnglish: false, duration: 90, company: 'The Lost Planet' },
    '纸人回魂': { priceRMB: 198, hasEnglish: false, duration: 75, company: 'Dreamland Traveller', type: '中式民俗', typeEn: 'Chinese Folklore' },
    '坏机器': { priceRMB: 298, hasEnglish: true, duration: 90, company: 'Free City', type: '玩具工厂，怪诞角色，强互动', typeEn: 'Toy Factory, Bizarre Characters, High Interaction' },
    '镇灵村': { priceRMB: 268, hasEnglish: false, duration: 90, company: 'MRX' },
    '萨乌达德': { priceRMB: 238, hasEnglish: true, duration: 90, company: 'Free City', type: '情感演绎互动，家庭', typeEn: 'Emotional Live-Actor Interaction, Family' },
    '朝圣': { priceRMB: 288, hasEnglish: true, duration: 80, company: 'Witch Travel Agency', type: '赛博朋克，游戏感', typeEn: 'Cyberpunk, Game-like' },
    '神佑': { priceRMB: 298, hasEnglish: true, duration: 90, company: 'Witch Travel Agency', type: '东方赛博朋克', typeEn: 'Eastern Cyberpunk' },
    '安乐': { priceRMB: 268, hasEnglish: true, duration: 80, company: 'Witch Travel Agency', type: '日式规则怪谈，奇幻世界', typeEn: 'Japanese Rule-Horror, Fantasy World' },
    'Lily': { priceRMB: 268, hasEnglish: true, duration: 80, company: 'Witch Travel Agency', type: '哥特恐怖，暗黑美学', typeEn: 'Gothic Horror, Dark Aesthetics' },
    "Dolls' House": { priceRMB: 258, hasEnglish: false, duration: 80, company: 'Lostland', type: '惊悚玩偶，梦想与现实', typeEn: 'Horror Dolls, Dreams vs Reality' },
    '再见黛安娜': { priceRMB: 258, hasEnglish: false, duration: 80, company: 'Grey Raven', type: '情感交互，剧情感人', typeEn: 'Emotional Interaction, Touching Story' },
    '玛雅': { priceRMB: 348, hasEnglish: false, duration: 140, company: 'Brain Storm Lab', type: '大型机关，盗墓，机械解密', typeEn: 'Large-Scale Mechanisms, Tomb Raiding, Mechanical Puzzles' },
    '观落阴': { priceRMB: 268, hasEnglish: false, duration: 100, company: 'Spiritual Investigation Bureau', type: '大型机关，中式奇幻', typeEn: 'Large-Scale Mechanisms, Chinese Fantasy' },
    '太岁': { priceRMB: 238, hasEnglish: false, duration: 90, company: 'RE.Creature', type: '中式民俗，大型', typeEn: 'Chinese Folklore, Large-Scale' },
    '活神仙': { priceRMB: 238, hasEnglish: false, duration: 105, company: 'Dragon Gallery', type: '独栋密室，中式民俗', typeEn: 'Standalone Building, Chinese Folklore' },
    '逢魔时': { priceRMB: 198, hasEnglish: false, duration: 75, company: 'City of Fantasy', type: '日式汤泉，大型机关', typeEn: 'Japanese Hot Spring, Large-Scale Mechanisms' },
    '复原': { priceRMB: 398, hasEnglish: true, duration: 75, company: 'UMEPLAY', players: '4-6' }
  };
  // ---------- cloud edits (Firebase) ----------
  // Lets KK add a poster / tweak fields right on the room page. Saved to Firestore
  // (text fields) and Storage (photos), so it's live for every visitor within
  // seconds — not just on her own device. Reading is open to everyone; writing
  // requires being signed in (see the sign-in modal wired up in room.html).
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

  // Poster goes through Storage (it's a photo, not a small text field) — upload it,
  // then point the Firestore doc's `poster` field at the resulting download URL.
  function setPoster(name, dataUrl){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    return fsStorage.ref('rooms/' + slug + '/poster.jpg').putString(dataUrl, 'data_url')
      .then(snap => snap.ref.getDownloadURL())
      .then(url => fsDB.collection('rooms').doc(slug).set({ poster: url }, { merge: true }).then(() => {
        cloudEdits[slug] = Object.assign({}, cloudEdits[slug] || {}, { poster: url });
        return true;
      }))
      .catch(err => { console.error('setPoster failed:', err); return false; });
  }

  function clearLocalEdit(name){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    const deleteFolder = (path) => fsStorage.ref(path).listAll().then(res =>
      Promise.all(res.items.map(item => item.delete().catch(() => {})))
    ).catch(() => {});
    return Promise.all([
      fsDB.collection('rooms').doc(slug).delete(),
      fsStorage.ref('rooms/' + slug + '/poster.jpg').delete().catch(() => {}),
      deleteFolder('rooms/' + slug + '/gallery')
    ]).then(() => { delete cloudEdits[slug]; return true; }).catch(err => {
      console.error('clearLocalEdit failed:', err);
      return false;
    });
  }

  function hasLocalEdit(name){
    return !!cloudEdits[slugify(name)];
  }

  // ---------- extra photo gallery (Storage) ----------
  function addGalleryImage(name, dataUrl){
    if(!fsAuth.currentUser) return Promise.resolve(false);
    const slug = slugify(name);
    const path = 'rooms/' + slug + '/gallery/' + Date.now() + '-' + Math.random().toString(36).slice(2) + '.jpg';
    return fsStorage.ref(path).putString(dataUrl, 'data_url')
      .then(snap => snap.ref.getDownloadURL())
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
    const url = rec.gallery[index];
    const newGallery = rec.gallery.filter((_, i) => i !== index);
    return fsDB.collection('rooms').doc(slug).set({ gallery: newGallery }, { merge: true })
      .then(() => {
        rec.gallery = newGallery;
        if(url){ try{ fsStorage.refFromURL(url).delete().catch(() => {}); }catch(e){} }
        return true;
      }).catch(err => { console.error('removeGalleryImage failed:', err); return false; });
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
    return cloud ? Object.assign({}, base, cloud) : Object.assign({}, base);
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
