export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.descubre': 'Descubre',
    'nav.planifica': 'Planifica',
    'nav.inspiracion': 'Inspiración',
    'nav.ayuda': 'Ayuda',
    'nav.home': 'Inicio',
    'nav.search': 'Buscar',
    'nav.saved': 'Guardados',
    'currency.select': 'Moneda',
  },
  en: {
    'nav.descubre': 'Discover',
    'nav.planifica': 'Plan',
    'nav.inspiracion': 'Inspiration',
    'nav.ayuda': 'Help',
    'nav.home': 'Home',
    'nav.search': 'Search',
    'nav.saved': 'Saved',
    'currency.select': 'Currency',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
