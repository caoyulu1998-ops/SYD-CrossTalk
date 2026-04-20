import { content, Language, Section } from '@/data/content';

const languages: Language[] = ['en', 'zh'];

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function getSectionById(language: Language, sectionId: string): Section | undefined {
  return content[language].sections.find((section) => section.id === sectionId);
}
