// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "geralch";
const projectName = "wiki";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Geraldine Caicedo's Wiki",
  tagline: "Geraldine Caicedo's personal wiki.",
  url: `https://${organizationName}.github.io`,
  baseUrl: `/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/icon.ico",
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
      defaultMode: "light",
      disableSwitch: false,
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
        src: "img/icon.ico",
      },
      items: [
        {
          href: 'https://github.com/geralch',
          'aria-label': 'GitHub',
          position: 'right',
          html: '<i class="fa fa-github"></i>',
        },
        {
          href: 'https://www.linkedin.com/in/geraldinecaicedohidalgo/',
          'aria-label': 'Linkedin',
          position: 'right',
          html: '<i class="fa fa-linkedin" aria-hidden="true"></i>',
        },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} GERALCH.DEV. All rights reserved. Built with Docusaurus.`,
    },
  },
};

module.exports = config;
