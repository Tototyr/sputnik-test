export type Lang = 'en' | 'ru';
export type LangTitle = 'Русский' | 'English';
export type LangsMap = { [key in Lang]?: Lang };
export type LangsConfig = {
  [key in Lang]?: {
    key: Lang;
    title: LangTitle;
  };
};
