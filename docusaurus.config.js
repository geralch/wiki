// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "geralch";
const projectName = "wiki";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Geralch Wiki",
  tagline: "Dinosaurs are cool",
  url: `https://${organizationName}.github.io`,
  baseUrl: `/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "slackmojis/meow_party.gif",
  // GitHub Pages adds a trailing slash by default that I don't want
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    navbar: {
      title: "All I Know",
      logo: {
        alt: "My Site Logo",
        src: "slackmojis/meow_party.gif",
      },
      items: [
        {
          href: 'https://github.com/geralch',
          'aria-label': 'GitHub',
          position: 'right',
          html: '<i class="fa fa-github"></i>',
        },
        {
          href: 'https://www.twitch.tv/geralchdev',
          'aria-label': 'Twitch',
          position: 'right',
          html: '<i class="fa fa-twitch"></i>',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Social Media",
          items: [
            {
              label: "GitHub",
              href: 'https://github.com/geralch',
            },
            {
              label: "Twitch",
              href: 'https://www.twitch.tv/geralchdev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Geraldine Caicedo. Built with Docusaurus.`,
    },
  },
};

module.exports = config;
