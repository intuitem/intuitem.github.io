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
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
      ],
    },
    {
      text: 'Ressources',
      links: [
        {
          text: 'Trial',
          href: getPermalink('/trial'),
        },
        {
          text: 'Docs',
          target: '_blank',
          href: 'https://intuitem.gitbook.io/ciso-assistant/',
          skipUrlLocalization: true,
        },
        {
          text: 'Open Source',
          target: '_blank',
          href: 'https://github.com/intuitem/',
          skipUrlLocalization: true,
        },
        {
          text: 'FAQ',
          href: getPermalink('/ciso-assistant#faq'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },

      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
      skipUrlLocalization: true,

    },
  ],
  actions: [{ text: 'Community', href: 'https://github.com/intuitem/ciso-assistant-community', target: '_blank', icon: 'tabler:brand-github' }],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'CISO Assistant', href: '/ciso-assistant' },
        { text: 'Use cases', href: '/ciso-assistant#use-cases' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Services', href: '/services' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { text: 'Trial', href: '/trial' },
        { text: 'Blog', href: '/blog' },
        { text: 'Discord', href: 'https://discord.gg/qvkaMdQ8da' },
        { text: 'Contact', href: '/contact' },
        { text: 'Contrib', href: 'https://github.com/intuitem/ciso-assistant-community' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Discord', href: 'https://discord.gg/qvkaMdQ8da' },
        { text: 'Docs', href: 'https://intuitem.gitbook.io/ciso-assistant/' },
        { text: 'FAQ', href: '/ciso-assistant#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About us', href: '/about' },
        { text: 'Diversity', href: '/diversity' },
        { text: 'References', href: '/#references' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/intuitem' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/qvkaMdQ8da' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/intuitem' },
  ],
  footNote: `
    intuitem - SARL au capital de 100 000,00€ - 8 rue des freres caudron, 78140 Vélizy-Villacoublay - SIRET 84450819200029 RCS Versailles
  `,
};
