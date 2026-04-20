import { Language } from '@/data/content';

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-syd-border bg-syd-surface/70 p-1 text-xs font-medium backdrop-blur">
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`rounded-full px-3 py-1.5 transition ${
          language === 'en' ? 'bg-syd-accent text-slate-900' : 'text-syd-muted hover:text-syd-text'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChange('zh')}
        className={`rounded-full px-3 py-1.5 transition ${
          language === 'zh' ? 'bg-syd-accent text-slate-900' : 'text-syd-muted hover:text-syd-text'
        }`}
      >
        中文
      </button>
    </div>
  );
}
