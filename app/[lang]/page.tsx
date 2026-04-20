import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LanguageToggle } from '@/components/LanguageToggle';
import { SiteHeader } from '@/components/SiteHeader';
import { content } from '@/data/content';
import { isLanguage } from '@/lib/siteContent';

type Props = {
  params: { lang: string };
};

export default async function HomePage({ params }: Props) {
  const { lang } = params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const copy = content[lang];

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <SiteHeader content={copy} language={lang} />

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 md:px-6 md:pt-10">
        <div className="mb-8 flex items-center justify-end md:mb-12">
          <LanguageToggle language={lang} currentPath="" />
        </div>

        <section className="mb-12 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200/70 md:mb-16 md:p-14">
          <p className="text-sm tracking-wide text-slate-500">{copy.hero.title}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl md:leading-[1.05]">
            {copy.hero.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-xl">{copy.hero.body}</p>

          <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
            <Link
              href={`/${lang}/start`}
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-600 md:px-6 md:py-3 md:text-base"
            >
              {copy.hero.primaryCta}
            </Link>
            <Link
              href={`/${lang}/how-it-works`}
              className="rounded-full bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200 md:px-6 md:py-3 md:text-base"
            >
              {copy.hero.secondaryCta}
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-500 md:mt-10">{copy.hero.statLine}</p>
        </section>
      </div>

      <footer className="border-t border-slate-200 px-4 py-8 text-center md:px-6 md:py-10">
        <p className="text-sm text-slate-500">{copy.footer}</p>
        <p className="mt-2 text-xs text-slate-400">{copy.designerLine}</p>
      </footer>
    </main>
  );
}
