export type Language = 'en' | 'zh';

export type Section = {
  id:
    | 'home'
    | 'about'
    | 'start'
    | 'modes'
    | 'how-to-play'
    | 'cards'
    | 'coins'
    | 'reflection'
    | 'exhibition';
  title: string;
  subtitle?: string;
  body: string;
  bullets?: string[];
  cta?: string;
  image?: string;
};

export type Content = {
  brandLine: string;
  navigation: Array<{ id: Section['id']; label: string }>;
  heroStatLine: string;
  sections: Section[];
  footer: string;
};

export const content: Record<Language, Content> = {
  en: {
    brandLine: 'Cross-cultural communication practice product system in Sydney',
    navigation: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'start', label: 'Start' },
      { id: 'modes', label: 'Modes' },
      { id: 'how-to-play', label: 'How to Play' },
      { id: 'cards', label: 'Cards' },
      { id: 'coins', label: 'Coins' },
      { id: 'reflection', label: 'Reflection' },
      { id: 'exhibition', label: 'Exhibition Info' }
    ],
    heroStatLine: 'Physical Cards · Point Coins · Digital Product Website',
    sections: [
      {
        id: 'home',
        title: 'SYD CrossTalk',
        subtitle: 'The digital entry point for intercultural confidence',
        body: 'SYD CrossTalk helps Chinese international students in Sydney discover practical phrases, understand social context, and practice communication through a guided card-and-coin experience.',
        bullets: [
          'Product website prototype, not a portfolio or exhibition-only page',
          'Designed for mobile-first browsing and in-person activity support',
          'Connects physical cards, point coins, and reflection workflows'
        ],
        cta: 'Start with your first conversation mission',
        image: '/images/hero-card.jpg'
      },
      {
        id: 'about',
        title: 'About the Product',
        body: 'SYD CrossTalk is a cross-cultural communication practice system that turns uncertain social moments into learnable, repeatable steps. Students can explore scenarios before trying them in real life.',
        bullets: [
          'Audience: Chinese international students in Sydney',
          'Context: classroom, neighborhood, service spaces, social gatherings',
          'Goal: reduce anxiety and increase communication initiative'
        ]
      },
      {
        id: 'start',
        title: 'Start',
        body: 'Choose your weekly challenge, gather your card set, and open the website to follow mission prompts. Each completed interaction earns point coins and unlocks higher-level scenarios.',
        cta: 'Open the starter mission flow'
      },
      {
        id: 'modes',
        title: 'Modes',
        body: 'Switch between Solo Practice, Pair Practice, and Group Circle modes based on confidence level and social setting.',
        bullets: ['Solo: self-guided warm-up', 'Pair: role-play with a partner', 'Group: rotating challenge-based speaking rounds']
      },
      {
        id: 'how-to-play',
        title: 'How to Play',
        body: 'Scan a situation card, complete one communication action, collect point coins, and document reflection. The website keeps the process clear and motivating.',
        image: '/images/card-system.jpg'
      },
      {
        id: 'cards',
        title: 'Cards',
        body: 'Cards are categorized into context, prompt, and response strategy. This structure supports quick learning without overwhelming users.',
        image: '/images/packaging.jpg'
      },
      {
        id: 'coins',
        title: 'Point Coins',
        body: 'Point coins represent visible progress. Students track consistency and unlock confidence milestones by accumulating coins across sessions.',
        image: '/images/point-coins.jpg'
      },
      {
        id: 'reflection',
        title: 'Reflection',
        body: 'After each mission, users log what they tried, what felt difficult, and what improved. Reflection turns one-time interaction into long-term communication growth.'
      },
      {
        id: 'exhibition',
        title: 'Exhibition Info',
        body: 'The prototype can be showcased in education and design exhibitions to demonstrate the full product system and student communication outcomes.',
        image: '/images/exhibition-photo.jpg'
      }
    ],
    footer: 'SYD CrossTalk · Product Website Prototype'
  },
  zh: {
    brandLine: '悉尼跨文化沟通练习产品系统',
    navigation: [
      { id: 'home', label: '首页' },
      { id: 'about', label: '关于' },
      { id: 'start', label: '开始' },
      { id: 'modes', label: '模式' },
      { id: 'how-to-play', label: '玩法' },
      { id: 'cards', label: '卡牌' },
      { id: 'coins', label: '积分币' },
      { id: 'reflection', label: '复盘' },
      { id: 'exhibition', label: '展览信息' }
    ],
    heroStatLine: '实体卡牌 · 积分币 · 产品网站',
    sections: [
      {
        id: 'home',
        title: 'SYD CrossTalk',
        subtitle: '跨文化表达信心的数字入口',
        body: 'SYD CrossTalk 面向在悉尼的中国留学生，通过引导式卡牌与积分机制，帮助用户理解语境、练习表达并逐步建立真实沟通能力。',
        bullets: ['这是产品网站原型，不是作品集或仅展览页面', '移动端优先，兼容 iPad 与桌面端', '连接实体卡牌、积分币与线上复盘流程'],
        cta: '从第一条沟通任务开始',
        image: '/images/hero-card.jpg'
      },
      {
        id: 'about',
        title: '关于产品',
        body: 'SYD CrossTalk 是一个跨文化沟通练习系统，把“不会说、怕说错”的时刻拆解为可学习、可重复的行动步骤，帮助学生在真实生活前先完成预演。',
        bullets: ['目标用户：在悉尼生活学习的中国留学生', '应用场景：课堂、社区、服务空间、社交活动', '核心目标：降低沟通焦虑，提升开口主动性']
      },
      {
        id: 'start',
        title: '开始',
        body: '选择每周挑战，准备卡组，打开网站跟随任务提示进行互动。每次完成都可获得积分币，并逐步解锁更高级的情境挑战。',
        cta: '进入新手任务流程'
      },
      {
        id: 'modes',
        title: '模式',
        body: '根据当前状态在单人练习、双人练习、多人圈练之间切换，逐步提升表达稳定性。',
        bullets: ['单人：自我热身，快速进入状态', '双人：角色扮演，模拟真实对话', '多人：轮转挑战，训练临场表达']
      },
      {
        id: 'how-to-play',
        title: '玩法说明',
        body: '抽取情境卡并完成一次沟通动作，获得积分币并记录复盘。网站负责将流程可视化，让练习更清晰、更有动力。',
        image: '/images/card-system.jpg'
      },
      {
        id: 'cards',
        title: '卡牌系统',
        body: '卡牌由语境卡、提示卡、回应策略卡组成，让用户在高压场景中快速找到可执行的话术路径。',
        image: '/images/packaging.jpg'
      },
      {
        id: 'coins',
        title: '积分币',
        body: '积分币用于记录可见成长，帮助用户建立持续练习反馈，并解锁更高阶段的沟通任务。',
        image: '/images/point-coins.jpg'
      },
      {
        id: 'reflection',
        title: '复盘',
        body: '每次练习后记录“我尝试了什么、哪里有困难、下次如何优化”，把一次互动变成长期成长的依据。'
      },
      {
        id: 'exhibition',
        title: '展览信息',
        body: '该原型可用于教育与设计展览，展示完整产品系统及其对留学生跨文化沟通能力提升的价值。',
        image: '/images/exhibition-photo.jpg'
      }
    ],
    footer: 'SYD CrossTalk · 产品网站原型'
  }
};
