export type Lang = 'en' | 'ru';
export type LangTitle = 'Русский' | 'English';

export type LangsMap = { [key in Lang]?: Lang };

export type LangsConfig = {
  [key in Lang]?: {
    key: Lang;
    title: LangTitle;
  };
};

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
