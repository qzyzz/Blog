const path = require("path");
const math = require("remark-math");
const katex = require("rehype-katex");
const adsense = require("./src/plugin/remark-adsense");

module.exports = {
  title: "知非前端工程师",
  // tagline:
  //   "帮助你提升前端开发技能，分享 HTML、CSS、JavaScript、React 和 Vue 等开发实战经验",
  titleDelimiter: "-",
  url: "qzy.gaosimohu.com",
  baseUrl: "/",
  favicon: "img/logo.png",
  organizationName: "qzy", // Usually your GitHub org/user name.
  projectName: "zxuqian.cn", // Usually your repo name.
  themeConfig: {
    image: "img/logo.png",
    announcementBar: {
      id: "feature_release", // Any value that will identify this message.
      content: `更新<a href='/docs/videos/browser/js-web-animations-api'>《与 CSS Keyframes 媲美的原生 JS 高性能动画 API 教程》配套文本</a>`,
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
    },
    hideableSidebar: true,
    navbar: {
      title: "知非",
      logo: {
        alt: "知非",
        src: "img/logo.png",
        srcDark: "img/logo.png",
      },
      items: [
        // {
        //   type: "localeDropdown",
        //   position: "left",
        // },
        {
          label: "首页",
          to: "/",
          position: "right",
          items: [
            {
              label: "随笔",
              to: "lifestyle",
            },
            {
              label: "职业",
              to: "tags/职业",
            },
          ],
        },
        {
          label: "学习",
          position: "right",
          items: [
            {
              label: "技术视频",
              to: "docs/videos/",
            },
            {
              label: "CSS 完全指南",
              to: "docs/css/css-tutorial-intro",
            },
            {
              label: "资源导航",
              to: "docs/resources/",
            },
          ],
        },

        // {
        //   label: "课程",
        //   position: "right",
        //   items: [
        //     {
        //       label: "React 即时通信 UI 开发实战",
        //       to: "docs/course/react-chat-ui",
        //     },
        //   ],
        // },

        {
          label: "小工具",
          position: "right",
          to: "docs/tools/",
        },
        // {
        //   href: "https://github.com/zxuqian/zxuqian.cn",
        //   label: "本站源码",
        //   position: "right",
        // }
      ],
    },
    algolia: {
      apiKey: "fabfb0e9997e101154ed85d64b7b6a3c",
      indexName: "ZXUQIANCN",
      appId: "LIJMO3C9C4",
    },
    footer: {
      style: "light",
      links: [
        {
          title: "学习",
          items: [
            {
              label: "技术视频",
              to: "docs/videos",
            },
            {
              label: "CSS 完全指南",
              to: "docs/css/css-tutorial-intro",
            },
            {
              label: "资源导航",
              to: "docs/resources",
            },
          ],
        },
        {
          title: "社交媒体",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/qzyzz",
            },
            {
              label: "Bilibili 哔哩哔哩",
              href: "https://space.bilibili.com/62491371",
            }
          ],
        },
        {
          title: "友情链接",
          items: [
            {
              label: "峰华前端工程师",
              to: "https://github.com/zxuqian",
            },
          ],
        },
      ],
      copyright: `<p>Copyright © ${new Date().getFullYear()} qzy Built with Docusaurus.</p><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="/img/creative-commons-license-icon.png" /></a><br />本站所有内容遵循 <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans" >CC BY-NC 4.0 协议</a>，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/oceanicNext"),
      defaultLanguage: "javascript",
    },
    // googleAnalytics: {
    //   trackingID: "UA-118572241-1",
    //   anonymizeIP: true, // Should IPs be anonymized?
    // },
    gtag: {
      trackingID: "G-6PSESJX0BM",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master",
          remarkPlugins: [math, adsense],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          feedOptions: {
            type: "all",
            title: "知非前端工程师",
            copyright: `Copyright © ${new Date().getFullYear()} qzy Built with Docusaurus.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  // themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // "@docusaurus/plugin-ideal-image",
    path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
    path.resolve(__dirname, "./src/plugin/plugin-onesignal-push"),
    path.resolve(__dirname, "./src/plugin/plugin-latest-docs"),
    "docusaurus2-dotenv",
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "secret-garden",
        routeBasePath: "lifestyle",
        path: "./lifestyle",
        feedOptions: {
          type: "all",
          title: "知非前端工程师",
          copyright: `Copyright © ${new Date().getFullYear()} qzy Built with Docusaurus.`,
        },
      },
    ],
    // [
    //   "@easyops-cn/docusaurus-search-local",
    //   {
    //     hashed: true,
    //     // indexPages: true,
    //     blogRouteBasePath: "/",
    //     language: ["en", "zh"],
    //   },
    // ],
  ],
  stylesheets: [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      type: "text/css",
    },
    {
      href: "/katex/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
      type: "text/css",
      rel: "stylesheet",
    },
    // {
    //   href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
    //   type: "text/css",
    //   rel: "stylesheet",
    // },
  ],
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
    // locales: ["zh-CN", "en"],
    // localeConfigs: {
    //   "zh-CN": {
    //     label: "中文",
    //   },
    //   en: {
    //     label: "English",
    //   },
    // },
  },
};
