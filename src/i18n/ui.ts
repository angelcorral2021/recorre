export const languages = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.descubre': 'Descubre',
    'nav.planifica': 'Planifica',
    'nav.inspiracion': 'Inspiración',
    'nav.ayuda': 'Ayuda',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'nav.home': 'Home',
    'nav.descubre': 'Discover',
    'nav.planifica': 'Plan',
    'nav.inspiracion': 'Inspiration',
    'nav.ayuda': 'Help',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    'nav.home': 'Início',
    'nav.descubre': 'Descubra',
    'nav.planifica': 'Planejar',
    'nav.inspiracion': 'Inspiração',
    'nav.ayuda': 'Ajuda',
    'footer.rights': 'Todos os direitos reservados.',
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
