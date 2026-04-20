import { Content } from '@/data/content';

type SiteHeaderProps = {
  content: Content;
};

export function SiteHeader({ content }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-syd-border/45 bg-syd-bg/50 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-lg font-semibold tracking-wide md:text-xl">SYD CrossTalk</p>
          <p className="text-xs text-syd-muted md:text-sm">{content.brandLine}</p>
        </div>
        <nav className="overflow-x-auto pb-1 md:pb-0">
          <ul className="flex min-w-max gap-3 text-xs text-syd-muted md:gap-5 md:text-sm">
            {content.navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
