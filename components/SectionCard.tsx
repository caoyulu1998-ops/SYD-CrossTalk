import { Section } from '@/data/content';
import { SafeImage } from './SafeImage';

type SectionCardProps = {
  section: Section;
  featured?: boolean;
};

export function SectionCard({ section, featured = false }: SectionCardProps) {
  const imageVariant =
    section.id === 'cards' ? 'cards' : section.id === 'coins' ? 'coins' : section.id === 'how-it-works' ? 'flow' : 'panel';

  return (
    <section
      id={section.id}
      className={`rounded-[1.75rem] border border-white/12 bg-gradient-to-b from-white/[0.07] to-syd-surface/70 p-7 shadow-glass backdrop-blur-xl md:p-10 ${
        featured ? 'md:p-12' : ''
      }`}
    >
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">{section.title}</h2>
        {section.subtitle ? <p className="text-base text-syd-accent md:text-xl">{section.subtitle}</p> : null}
        <p className="max-w-4xl text-sm leading-relaxed text-syd-text/90 md:text-lg">{section.body}</p>

        {section.bullets ? (
          <ul className="space-y-2.5 text-sm text-syd-muted md:space-y-3 md:text-base">
            {section.bullets.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-syd-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {section.cta ? (
          <button className="mt-1 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm text-syd-text transition hover:bg-white/15 md:text-base">
            {section.cta}
          </button>
        ) : null}

        {section.id === 'coins' ? (
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4 md:p-5">
            <div className="flex gap-2.5 md:gap-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="h-8 w-8 rounded-full border border-amber-200/70 bg-gradient-to-br from-amber-200/75 to-amber-500/60 shadow-[0_0_18px_rgba(245,158,11,0.35)] md:h-10 md:w-10"
                />
              ))}
            </div>
          </div>
        ) : null}

        {section.image ? <SafeImage src={section.image} alt={section.title} variant={imageVariant} /> : null}
      </div>
    </section>
  );
}
