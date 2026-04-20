export type Language = 'en' | 'zh';

export type Section = {
  id: 'about' | 'start' | 'modes' | 'how-it-works' | 'cards' | 'coins' | 'reflection';
  title: string;
  subtitle?: string;
  body: string;
  bullets?: string[];
  cta?: string;
  image?: string;
};

export type Content = {
  brandLine: string;
  navigation: Array<{ id: 'home' | Section['id']; label: string }>;
  hero: {
    title: string;
    headline: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    statLine: string;
  };
  sections: Section[];
  footer: string;
  exhibitionNote: string;
};

export const content: Record<Language, Content> = {
  en: {
    brandLine: 'Cross-cultural communication practice for Chinese international students in Sydney',
    navigation: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'start', label: 'Start' },
      { id: 'modes', label: 'Modes' },
      { id: 'how-it-works', label: 'How It Works' },
      { id: 'cards', label: 'Cards' },
      { id: 'coins', label: 'Coins' },
      { id: 'reflection', label: 'Reflection' }
    ],
    hero: {
      title: 'SYD CrossTalk',
      headline: 'Practice cross-cultural communication through play.',
      body: 'A card-and-coin based practice product for Chinese international students in Sydney, designed to build confidence in campus, daily life, and social interactions.',
      primaryCta: 'Start',
      secondaryCta: 'How It Works',
      statLine: 'Physical Cards · Point Coins · Product Website'
    },
    sections: [
      {
        id: 'about',
        title: 'Built for real communication moments',
        body: 'Many language barriers are not only about vocabulary or grammar. They also involve confidence, timing, tone, body language, misunderstanding, and cultural adaptation. SYD CrossTalk creates a low-pressure practice space where Chinese international students can rehearse real interactions before facing them in daily life.'
      },
      {
        id: 'start',
        title: 'Start',
        body: 'Choose a weekly communication mission, prepare your card set, and follow the step-by-step prompts on the website. Every completed interaction earns point coins and unlocks the next challenge level.',
        cta: 'Begin your first mission'
      },
      {
        id: 'modes',
        title: 'Modes',
        body: 'Switch modes based on confidence and social setting, so practice always feels achievable.',
        bullets: [
          'Solo Mode: self-guided warm-up before real conversations',
          'Pair Mode: role-play with one partner for focused feedback',
          'Group Circle: rotating prompts for dynamic speaking practice'
        ]
      },
      {
        id: 'how-it-works',
        title: 'How It Works',
        subtitle: 'One connected practice system',
        body: 'SYD CrossTalk combines three touchpoints to support repeated learning and confidence growth across real-life situations.',
        bullets: [
          'Physical Cards: scenario, prompt, and response strategy cards',
          'Point Coins: visible progress that rewards consistency',
          'Product Website: guided flow, mode selection, and reflection support'
        ],
        image: '/images/card-system.jpg'
      },
      {
        id: 'cards',
        title: 'Cards',
        body: 'The card set helps users quickly move from uncertainty to action by turning everyday communication moments into clear, repeatable speaking tasks.',
        image: '/images/packaging.jpg'
      },
      {
        id: 'coins',
        title: 'Point Coins',
        body: 'Point coins make growth visible. Users collect coins after each session and track momentum as they build communication confidence over time.',
        image: '/images/point-coins.jpg'
      },
      {
        id: 'reflection',
        title: 'Reflection',
        body: 'After each mission, users record what they tried, what felt challenging, and what improved. Reflection transforms practice into long-term communication progress.'
      }
    ],
    footer: 'SYD CrossTalk · Cross-cultural communication practice product',
    exhibitionNote: 'Course and exhibition context available upon request.'
  },
  zh: {
    brandLine: '服务悉尼中国留学生的跨文化沟通练习产品',
    navigation: [
      { id: 'home', label: '首页' },
      { id: 'about', label: '关于' },
      { id: 'start', label: '开始' },
      { id: 'modes', label: '模式' },
      { id: 'how-it-works', label: '使用方式' },
      { id: 'cards', label: '卡牌' },
      { id: 'coins', label: '积分币' },
      { id: 'reflection', label: '复盘' }
    ],
    hero: {
      title: 'SYD CrossTalk',
      headline: '通过游戏化方式练习跨文化沟通。',
      body: '这是一款面向悉尼中国留学生的卡牌与积分币沟通练习产品，帮助用户在校园、日常生活和社交互动中建立表达信心。',
      primaryCta: '开始',
      secondaryCta: '使用方式',
      statLine: '实体卡牌 · 积分币 · 产品网站'
    },
    sections: [
      {
        id: 'about',
        title: '为真实沟通时刻而设计',
        body: '很多沟通障碍并不只来自词汇或语法，还包括信心、时机、语气、肢体表达、误解与文化适应。SYD CrossTalk 提供低压力的练习空间，让中国留学生在进入真实生活场景前，先完成可重复的情境演练。'
      },
      {
        id: 'start',
        title: '开始',
        body: '选择每周沟通任务，准备卡组，打开网站跟随步骤提示进行练习。每次完成互动都会获得积分币，并逐步解锁更高阶段情境。',
        cta: '开启第一次任务'
      },
      {
        id: 'modes',
        title: '模式',
        body: '根据当前状态选择练习方式，让表达训练循序渐进。',
        bullets: ['单人模式：先完成低压力热身', '双人模式：通过角色演练获得反馈', '多人圈练：在轮换挑战中训练临场表达']
      },
      {
        id: 'how-it-works',
        title: '使用方式',
        subtitle: '一个完整联动的练习系统',
        body: 'SYD CrossTalk 通过三个互相支持的触点，帮助用户持续练习并建立沟通信心。',
        bullets: ['实体卡牌：情境卡、提示卡与回应策略卡', '积分币：用可见进度鼓励持续练习', '产品网站：提供流程引导、模式切换与复盘支持'],
        image: '/images/card-system.jpg'
      },
      {
        id: 'cards',
        title: '卡牌系统',
        body: '卡牌把真实交流场景拆解为可执行任务，帮助用户从“紧张不知道怎么说”快速进入“知道下一步怎么回应”。',
        image: '/images/packaging.jpg'
      },
      {
        id: 'coins',
        title: '积分币',
        body: '积分币记录每次练习成果，让成长路径更清晰，帮助用户持续积累表达稳定性与沟通信心。',
        image: '/images/point-coins.jpg'
      },
      {
        id: 'reflection',
        title: '复盘',
        body: '每次任务后记录“我做了什么、哪里卡住、下一次如何更好”，把一次练习转化为长期沟通能力成长。'
      }
    ],
    footer: 'SYD CrossTalk · 跨文化沟通练习产品',
    exhibitionNote: '课程与展陈信息可在页脚查看。'
  }
};
