'use client';

import { useMemo, useState } from 'react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { SectionCard } from '@/components/SectionCard';
import { SiteHeader } from '@/components/SiteHeader';
import { Language, content } from '@/data/content';

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('en');
  const copy = useMemo(() => content[language], [language]);

  return (
    <main className="min-h-screen bg-transparent text-syd-text">
      <SiteHeader content={copy} />

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 md:px-6 md:pt-10">
        <div className="mb-8 flex items-center justify-end md:mb-12">
          <LanguageToggle language={language} onChange={setLanguage} />
        </div>

        <section
          id="home"
          className="mb-12 rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 via-syd-surface/80 to-syd-surface/60 p-7 shadow-glass backdrop-blur-xl md:mb-16 md:p-14"
        >
          <p className="text-sm tracking-wide text-syd-muted">{copy.hero.title}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl md:leading-[1.05]">
            {copy.hero.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-syd-text/85 md:text-xl">{copy.hero.body}</p>

          <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
            <a
              href="#start"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:opacity-90 md:px-6 md:py-3 md:text-base"
            >
              {copy.hero.primaryCta}
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-white/35 bg-white/5 px-5 py-2.5 text-sm font-medium text-syd-text transition hover:bg-white/10 md:px-6 md:py-3 md:text-base"
            >
              {copy.hero.secondaryCta}
            </a>
          </div>

          <p className="mt-8 text-sm text-syd-muted md:mt-10">{copy.hero.statLine}</p>
        </section>

        <div className="grid gap-8 md:gap-10">
          {copy.sections.map((section) => (
            <SectionCard key={section.id} section={section} featured={section.id === 'about'} />
          ))}
        </div>
      </div>

      <footer className="border-t border-syd-border/60 px-4 py-8 text-center md:px-6 md:py-10">
        <p className="text-sm text-syd-muted">{copy.footer}</p>
        <p className="mt-2 text-xs text-syd-muted/80">{copy.designerLine}</p>
      </footer>
    </main>
  );
}
