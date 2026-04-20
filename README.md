# SYD CrossTalk — Product Website Prototype

SYD CrossTalk is a **cross-cultural communication practice product** for Chinese international students in Sydney.  
This repository contains the website prototype built with **Next.js + TypeScript + Tailwind CSS**.

> Positioning: This is a **product website** (not a portfolio and not only an exhibition page).

## Product System Scope

SYD CrossTalk combines:
- Physical practice cards
- Point coins for progress tracking
- This website as the main digital entry point

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- No backend, no database, no login, no CMS

## Implemented First-Version Sections

1. Home
2. About
3. Start
4. Modes
5. How to Play
6. Cards
7. Coins
8. Reflection
9. Exhibition Info

## Features

- Responsive layout for mobile, iPad, and desktop
- English / Chinese language switch
- Dark premium Apple-inspired visual direction
- Graceful image handling with elegant dark fallback placeholders when image assets are missing

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── LanguageToggle.tsx
│   ├── SafeImage.tsx
│   ├── SectionCard.tsx
│   └── SiteHeader.tsx
├── data/
│   └── content.ts
├── public/
│   └── images/
│       └── .gitkeep
└── README.md
```

## Local Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Then open: `http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

## Deployment

### Option A: Vercel (recommended)

1. Push this repository to GitHub
2. Import repository in Vercel
3. Keep default build settings:
   - Build command: `npm run build`
   - Output: `.next`
4. Deploy

### Option B: Any Node.js hosting platform

1. Ensure Node.js 18.17+ (or newer LTS)
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Start server: `npm run start`

## Notes

- The UI intentionally references these image paths:
  - `/images/hero-card.jpg`
  - `/images/card-system.jpg`
  - `/images/point-coins.jpg`
  - `/images/packaging.jpg`
  - `/images/exhibition-photo.jpg`
- No binary image files are required for this prototype.
- If an image path is missing, the UI automatically shows a dark CSS gradient placeholder instead of a broken image block.
