import Link from 'next/link';
import { Language } from '@/data/content';

type LanguageToggleProps = {
  language: Language;
  currentPath: string;
};

export function LanguageToggle({ language, currentPath }: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full bg-white p-1 text-xs font-medium shadow-sm ring-1 ring-slate-200">
      <Link
        href={`/en${currentPath}`}
        className={`rounded-full px-3 py-1.5 transition ${
          language === 'en' ? 'bg-sky-500 text-white' : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        EN
      </Link>
      <Link
        href={`/zh${currentPath}`}
        className={`rounded-full px-3 py-1.5 transition ${
          language === 'zh' ? 'bg-sky-500 text-white' : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        中文
      </Link>
    </div>
  );
}
