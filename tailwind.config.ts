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
        'syd-bg': '#090A0F',
        'syd-surface': '#11131B',
        'syd-border': '#2B3140',
        'syd-text': '#E9EDF5',
        'syd-muted': '#A6ADBB',
        'syd-accent': '#75C3FF',
        'syd-accent-2': '#A88BFF'
      },
      boxShadow: {
        glass: '0 20px 45px rgba(4, 10, 20, 0.4)'
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(circle at 20% 20%, rgba(117,195,255,0.18), transparent 48%), radial-gradient(circle at 80% 0%, rgba(168,139,255,0.22), transparent 42%), linear-gradient(160deg, #090A0F 10%, #11131B 95%)'
      }
    }
  },
  plugins: []
};

export default config;
