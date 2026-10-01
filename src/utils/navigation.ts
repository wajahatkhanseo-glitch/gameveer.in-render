import { NavTab } from '../types';

export const routeMap: Record<NavTab, string> = {
  home: '/',
  register: '/veergame-register',
  login: '/veergame-login',
  download: '/veergame-download',
  'responsible-gaming': '/responsible-gaming',
  'about-us': '/about-us',
  'contact-us': '/contact-us',
  'terms-and-conditions': '/terms-and-conditions',
  'privacy-policy': '/privacy-policy',
  '404': '/404',
};

export const pathToTabMap: Record<string, NavTab> = {
  '/': 'home',
  '': 'home',
  '/veergame-register': 'register',
  '/veergame-register/': 'register',
  '/register': 'register',
  '/register/': 'register',
  '/veergame-login': 'login',
  '/veergame-login/': 'login',
  '/login': 'login',
  '/login/': 'login',
  '/veergame-download': 'download',
  '/veergame-download/': 'download',
  '/download': 'download',
  '/download/': 'download',
  '/apk-download': 'download',
  '/veergame-apk': 'download',
  '/responsible-gaming': 'responsible-gaming',
  '/responsible-gaming/': 'responsible-gaming',
  '/about-us': 'about-us',
  '/about-us/': 'about-us',
  '/contact-us': 'contact-us',
  '/contact-us/': 'contact-us',
  '/terms-and-conditions': 'terms-and-conditions',
  '/terms-and-conditions/': 'terms-and-conditions',
  '/terms': 'terms-and-conditions',
  '/privacy-policy': 'privacy-policy',
  '/privacy-policy/': 'privacy-policy',
  '/privacy': 'privacy-policy',
  '/404': '404',
};

export const getTabFromPath = (path: string, hash?: string): NavTab => {
  // Backward compatibility for hashes if present:
  if (hash) {
    const cleanHash = hash.replace(/^#/, '');
    if (cleanHash === 'veergame-register' || cleanHash === 'register') return 'register';
    if (cleanHash === 'veergame-login' || cleanHash === 'login') return 'login';
    if (cleanHash === 'veergame-download' || cleanHash === 'download') return 'download';
    if (cleanHash === '404') return '404';
  }

  const normalized = path.toLowerCase().replace(/\/$/, '') || '/';
  return pathToTabMap[normalized] || pathToTabMap[path.toLowerCase()] || '404';
};

export const navigateTo = (tab: NavTab) => {
  const path = routeMap[tab] || '/';
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
