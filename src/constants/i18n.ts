import type { Lang, LangTitle } from '@/types/i18n';

export const DEFAULT_LANG: Lang = 'ru';
export const DEFAULT_NS = 'common';
export const NO_TRANSLATION_PHRASE = '...';

export const LANGS: { [key in Lang]: Lang } = {
  en: 'en',
  ru: 'ru',
} as const;

export const LANGS_CONFIG: {
  [key in Lang]: {
    key: Lang;
    title: LangTitle;
  };
} = {
  ru: { key: LANGS.ru, title: 'Русский' },
  en: { key: LANGS.en, title: 'English' },
};
