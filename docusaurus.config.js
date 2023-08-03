const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KuronekoServer',
  tagline: 'KuronekoServer各種サービスのドキュメントサイト',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'KuronekoServer',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.webp',
          srcDark: 'img/logo-dark.webp',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'index',
            label: 'Docs',
          },
        ]
      },
      footer: {
        style: 'dark',
        copyright: `© Copyright ${new Date().getFullYear()} - <a href="https://kuroneko6423.com/">KuronekoServer</a> - All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
