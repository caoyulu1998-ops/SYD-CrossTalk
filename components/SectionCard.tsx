import { Section } from '@/data/content';
import { SafeImage } from './SafeImage';

type SectionCardProps = {
  section: Section;
  featured?: boolean;
};

export function SectionCard({ section, featured = false }: SectionCardProps) {
  return (
    <section
      id={section.id}
      className={`rounded-3xl border border-syd-border/80 bg-syd-surface/75 p-6 shadow-glass backdrop-blur md:p-8 ${
        featured ? 'md:p-10' : ''
      }`}
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{section.title}</h2>
        {section.subtitle ? <p className="text-base text-syd-accent md:text-lg">{section.subtitle}</p> : null}
        <p className="text-sm leading-relaxed text-syd-text/90 md:text-base">{section.body}</p>

        {section.bullets ? (
          <ul className="space-y-2 text-sm text-syd-muted md:text-base">
            {section.bullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-syd-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {section.cta ? (
          <button className="mt-2 rounded-full border border-syd-accent/60 bg-syd-accent/10 px-4 py-2 text-sm text-syd-text transition hover:bg-syd-accent/20">
            {section.cta}
          </button>
        ) : null}

        {section.image ? <SafeImage src={section.image} alt={section.title} /> : null}
      </div>
    </section>
  );
}
