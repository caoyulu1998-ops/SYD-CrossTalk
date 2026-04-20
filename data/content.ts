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
  designerLine: string;
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
      body: 'A card-and-coin-based practice product for Chinese international students in Sydney, designed to build confidence in campus, daily life, and social interactions.',
      primaryCta: 'Start',
      secondaryCta: 'How It Works',
      statLine: 'Cards · Point Coins · Guided Practice'
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
        body: 'Prepare the card decks, choose a play mode, and follow one round at a time. SYD CrossTalk is designed for face-to-face practice with physical cards and point coins.',
        cta: 'Begin a round'
      },
      {
        id: 'modes',
        title: 'Modes',
        body: 'Choose a mode that matches your group size and practice focus.',
        bullets: [
          '2-Player Mode: One player completes the communication task. The other player acts as the responder and gives light feedback. Players take turns.',
          'Group Mode (3–5 players): One player completes the task, one player responds, and the remaining players give short feedback from different perspectives such as clarity, tone, body language, and task completion.'
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
          'Guided Practice: clear flow, mode selection, and reflection support'
        ],
        image: '/images/card-system.jpg'
      },
      {
        id: 'cards',
        title: 'Cards',
        body: 'Scene Cards: define the situation and communication task.',
        bullets: [
          'Expression Cards: provide verbal, non-verbal, and tone resources.',
          'Twist Cards: add misunderstanding, noise, time pressure, or cultural conditions.',
          'Feedback Cards: provide encouragement or adjustment prompts.',
          'Rule Cards: help users quickly understand how to play.'
        ],
        image: '/images/packaging.jpg'
      },
      {
        id: 'coins',
        title: 'Point Coins',
        body: 'Each time a player successfully completes a communication task, they receive one point coin. Failed attempts do not remove coins. Players can use feedback and try again. The first player to collect five point coins wins.',
        image: '/images/point-coins.jpg'
      },
      {
        id: 'reflection',
        title: 'Reflection',
        body: 'After each round, users record what they tried, what felt challenging, and what improved. Reflection transforms practice into long-term communication progress.'
      }
    ],
    footer: 'SYD CrossTalk | Cross-cultural communication practice product',
    designerLine: 'Designed by Yulu Cao'
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
      statLine: '实体卡牌 · 积分币 · 引导练习'
    },
    sections: [
      {
        id: 'about',
        title: '为真实沟通时刻而设计',
        body: '很多沟通障碍并不只来自词汇或语法，还包括信心、时机、语气、肢体表达、误解与文化适应。SYD CrossTalk 提供低压力的练习空间，让悉尼中国留学生在进入真实生活场景前，先完成可重复的情境演练。'
      },
      {
        id: 'start',
        title: '开始',
        body: '准备卡牌，选择游戏模式，然后按照每轮流程开始练习。SYD CrossTalk 适合面对面的卡牌互动，并通过积分币记录沟通任务的完成情况。',
        cta: '开始一轮'
      },
      {
        id: 'modes',
        title: '模式',
        body: '根据参与人数选择模式，保持练习节奏清晰且可执行。',
        bullets: [
          '双人模式：一名玩家完成沟通任务，另一名玩家扮演回应者并给出轻量反馈，双方轮流练习。',
          '小组模式（3–5 人）：一名玩家完成任务，一名玩家回应，其余玩家从清晰度、语气、身体语言和任务完成度等角度给出简短反馈。'
        ]
      },
      {
        id: 'how-it-works',
        title: '使用方式',
        subtitle: '一个完整联动的练习系统',
        body: 'SYD CrossTalk 通过三个互相支持的触点，帮助用户持续练习并建立沟通信心。',
        bullets: ['实体卡牌：情境卡、提示卡与回应策略卡', '积分币：用可见进度鼓励持续练习', '引导练习：提供流程引导、模式切换与复盘支持'],
        image: '/images/card-system.jpg'
      },
      {
        id: 'cards',
        title: '卡牌系统',
        body: '场景卡：定义本轮情境和沟通任务。',
        bullets: [
          '表达卡：提供语言、非语言和语气资源。',
          '变化卡：加入误解、噪音、时间压力或文化条件。',
          '反馈卡：提供鼓励或调整提示。',
          '规则卡：帮助用户快速理解玩法。'
        ],
        image: '/images/packaging.jpg'
      },
      {
        id: 'coins',
        title: '积分币',
        body: '玩家每成功完成一次沟通任务，即可获得 1 枚积分币。未成功不会扣除已有积分币，玩家可以根据反馈再次尝试。率先获得 5 枚积分币的玩家获胜。',
        image: '/images/point-coins.jpg'
      },
      {
        id: 'reflection',
        title: '复盘',
        body: '每轮结束后记录“我做了什么、哪里卡住、下一次如何更好”，把一次练习转化为长期沟通能力成长。'
      }
    ],
    footer: 'SYD CrossTalk｜跨文化沟通练习产品',
    designerLine: 'Designed by Yulu Cao'
  }
};
