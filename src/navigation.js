import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Solutions',
      links: [
        {
          text: 'Ciso Assistant',
          href: getPermalink('/ciso-assistant'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'Ressources',
      links: [
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Docs',
          href: 'https://intuitem.gitbook.io/product-docs/',
          skipUrlLocalization: true,
        },
        {
          text: 'Open Source',
          href: 'https://github.com/intuitem/',
          skipUrlLocalization: true,
        },
        {
          text: 'FAQ',
          href: getPermalink('/faq'),
        },
        {
          text: 'Support',
          href: getPermalink('/support'),
        },

      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
      skipUrlLocalization: true,

    },
  ],
  actions: [{ text: 'Community', href: 'https://github.com/intuitem/ciso-assistant-community', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'CISO Assistant', href: '/ciso-assistant' },
        { text: 'Use cases', href: '/ciso-assistant#use-cases' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Customization', href: '/customization' },
        { text: 'Services', href: '/services' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Discord', href: '#' },
        { text: 'Contact', href: '#' },
        { text: 'Contrib', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Portal', href: '#' },
        { text: 'Docs', href: '#' },
        { text: 'Discord', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Mission', href: '#' },
        { text: 'References', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/intuitem' },
  ],
  footNote: `
    intuitem - SARL au capital de 100.000€ - 8 rue des freres caudron, 78140 Vélizy-Villacoublay - SIRET 84450819200029 RCS Versailles
  `,
};
