// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const babelConfig = require('./babel.config');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MSMP",
  tagline: "MaplefallSurvivalMultiPlayer",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  url: "https://www.mspx.tk",
  baseUrl: "/",
  // organizationName: "maincore_tech.", // Usually your GitHub org/user name.
  // projectName: "docs", // Usually your repo name.
  //trailingSlash: false,
  
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl: "",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: 'hourly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "MSMP",
        logo: {
          alt: "Your Muffin",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          /**{
            href: "",
            label: "Blog",
            position: "left",
          },*/
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      footer: {
        //style: 'dark',
		    links: [
          {
            title: "Community",
            items: [
              {
                label: 'about',
                href: '/docs/intro',
              },
              /*{
                label: 'blog',
                href: '/docs/intro',
              },*/
            ],
          },
          {
            title: "友链",
            items: [
              {
                label: 'SPcraft',
                href: 'https://spcraft.ml',
              },
              {
                label: "XiaMoHuaHuo_CN's Blog",
                href: 'https://blog.1l1.icu',
              },
              
            ],
          },
          {
            title: "More" ,
            items: [
              {
                html: `
                  <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                  </a>
                `,
              },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.7rem" src="/img/buildwith.png" /><a/>`,
              },
            ],
          },
        ],
        copyright: `By maincore-tech. Modified from flatifycss`,
      },
    }),
  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        removeDefaultStemmer: true,
        highlightSearchTermsOnTargetPage: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      }),
    ],
  ],
  plugins: [
    'plugin-image-zoom',
    'docusaurus-plugin-sass',
  ],
};

module.exports = config;