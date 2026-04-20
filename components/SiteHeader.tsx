import Link from 'next/link';
import { Content, Language } from '@/data/content';

type SiteHeaderProps = {
  content: Content;
  language: Language;
};

export function SiteHeader({ content, language }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <Link href={`/${language}`} className="text-lg font-semibold tracking-wide text-slate-900 md:text-xl">
            SYD CrossTalk
          </Link>
          <p className="text-xs text-slate-500 md:text-sm">{content.brandLine}</p>
        </div>
        <nav className="overflow-x-auto pb-1 md:pb-0">
          <ul className="flex min-w-max gap-3 text-xs text-slate-500 md:gap-5 md:text-sm">
            {content.navigation.map((item) => {
              const href = item.id === 'home' ? `/${language}` : `/${language}/${item.id}`;
              return (
                <li key={item.id}>
                  <Link href={href} className="transition hover:text-sky-600">
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
