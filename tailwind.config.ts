import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'syd-bg': '#F6F8FC',
        'syd-surface': '#FFFFFF',
        'syd-border': '#D6DEEB',
        'syd-text': '#0F172A',
        'syd-muted': '#64748B',
        'syd-accent': '#0EA5E9',
        'syd-accent-2': '#8B5CF6'
      },
      boxShadow: {
        glass: '0 12px 28px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.18), transparent 46%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.18), transparent 42%), linear-gradient(160deg, #f8fbff 10%, #ffffff 95%)'
      }
    }
  },
  plugins: []
};

export default config;
