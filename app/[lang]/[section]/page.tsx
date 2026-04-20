import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LanguageToggle } from '@/components/LanguageToggle';
import { SectionCard } from '@/components/SectionCard';
import { SiteHeader } from '@/components/SiteHeader';
import { content } from '@/data/content';
import { getSectionById, isLanguage } from '@/lib/siteContent';

type Props = {
  params: { lang: string; section: string };
};

export default async function SectionPage({ params }: Props) {
  const { lang, section: sectionId } = params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const section = getSectionById(lang, sectionId);

  if (!section) {
    notFound();
  }

  const copy = content[lang];

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <SiteHeader content={copy} language={lang} />

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 md:px-6 md:pt-10">
        <div className="mb-8 flex items-center justify-between gap-4 md:mb-12">
          <Link href={`/${lang}`} className="text-sm text-slate-500 transition hover:text-sky-600">
            {lang === 'zh' ? '← 返回首页' : '← Back to Home'}
          </Link>
          <LanguageToggle language={lang} currentPath={`/${sectionId}`} />
        </div>

        <SectionCard section={section} featured />
      </div>
    </main>
  );
}
