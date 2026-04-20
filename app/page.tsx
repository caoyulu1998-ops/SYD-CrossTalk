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

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 md:px-6 md:pt-10">
        <div className="mb-8 flex items-center justify-end md:mb-10">
          <LanguageToggle language={language} onChange={setLanguage} />
        </div>

        <section className="mb-8 rounded-3xl border border-syd-border bg-syd-surface/75 p-6 shadow-glass backdrop-blur md:mb-12 md:p-10">
          <p className="text-sm text-syd-muted">{copy.heroStatLine}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{copy.sections[0].title}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-syd-text/85 md:text-lg">{copy.sections[0].body}</p>
        </section>

        <div className="grid gap-6 md:gap-8">
          {copy.sections.map((section, idx) => (
            <SectionCard key={section.id} section={section} featured={idx === 0} />
          ))}
        </div>
      </div>

      <footer className="border-t border-syd-border/70 px-4 py-8 text-center text-xs text-syd-muted md:text-sm">
        {copy.footer}
      </footer>
    </main>
  );
}
