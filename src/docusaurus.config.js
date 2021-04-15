/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'twentyonepilots.wiki',
  tagline: 'we do the clicking for the clikkies',
  //url: 'https://www.twentyonepilots.wiki',
  url: 'https://twentyonepilots-wiki.web.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DiscordClique', // Usually your GitHub org/user name.
  projectName: 'twentyonepilots.wiki', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'twentyonepilots.wiki',
      logo: {
        alt: 'scaled and icy inspired dragon',
        src: 'img/dragon.png',
      },
      items: [
        {
          to: 'docs/dmaorg',
          activeBasePath: 'docs',
          label: 'dmaorg.info',
          position: 'left',
        },
        {
          to: 'docs/levelofconcern',
          activeBasePath: 'docs',
          label: 'Level of Concern',
          position: 'left',
        },
        {
          to: 'docs/scaledandicy',
          activeBasePath: 'docs',
          label: 'Scaled and Icy',
          position: 'left',
        },
        {
          to: 'https://www.discordclique.com',
          label: 'Discord Clique',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'dmaorg.info',
              to: 'docs/dmaorg',
            },
            {
              label: 'Level of Concern',
              to: 'docs/levelofconcern',
            },
            {
              label: 'Scaled and Icy',
              to: 'docs/scaledandicy',
            },
          ],
        },
        {
          title: 'Discord Clique',
          items: [
            {
              label: 'Join Discord Clique',
              href: 'https://discord.gg/twentyonepilots',
            },
            {
              label: 'Discord Clique Website',
              href: 'https://www.discordclique.com',
            },
            {
              label: 'Discord Clique on Twitter',
              href: 'http://twitter.com/discordClique/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contribute to twentyonepilots.wiki',
              href: 'https://github.com/x2110311x/twentyonepilotswiki',
            },
            {
              label: 'Our Contributors',
              to: 'docs/contributors',
            },
            {
              label: 'dmaorg Archive',
              href: 'https://www.dmaorg.site',
            },
          ],
        },
      ],
      copyright: 'DISCLAIMER: We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Twenty One Pilots, or any of its subsidiaries or its affiliates. <br>The official Twenty One Pilots website can be found at https://www.twentyonepilots.com/',
    },
    image: 'img/dragon.png',
    metadatas: [
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'description',
        content: 'we do the clicking for the clikkies'
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/x2110311x/twentyonepilotswiki/edit/main/src/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    '/scripts/gtag.js',
    {
      src:
        "https://www.googletagmanager.com/gtag/js?id=G-N1FJV4NJ8K",
      async: true,
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },
};