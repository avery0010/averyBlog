import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/",
  title: "Avery",//默认信息
  description: "Avery",//默认信息

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  //   //被搜索引擎搜索标签
  //   [
  //     "meta",
  //     {
  //       name: 'keywords',
  //       content: '',
  //     }
  //   ],
  //   //添加百度站长的自动推送代码
  //   [
  //     "script",
  //     {
  //       src: "/assets/js/autopush-baidu.js"
  //     }
  //   ],  
  //   //360站长的验证代码
  //   [
  //     "meta",
  //     {
  //       name: "360-site-verification",
  //       content: "63b223c45248d2ea87cb9b1042148dda",
  //     },
  //   ],
  //   // 添加360站长的自动推送代码
  //   [
  //     "script",
  //     {
  //       src: "/assets/js/autopush-360.js",
  //     },
  //   ],
  //   ['script', {},
  //     `
  //     var _hmt = _hmt || [];
  //     (function() {
  //       var hm = document.createElement("script");
  //       hm.src = "https://hm.baidu.com/hm.js?469aa022c0181622bdf0357a8ca0fd9a";
  //       var s = document.getElementsByTagName("script")[0]; 
  //       s.parentNode.insertBefore(hm, s);
  //     })();
  //     `
  //  ],
  //  [
  //    "script",
  //    {
  //       "data-ad-client": "ca-pub-2817465101828721",
  //       async: true,
  //       src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
  //       crossorigin: "anonymous"
  //    }
  //  ]
  ],
  // <meta name="360-site-verification" content="63b223c45248d2ea87cb9b1042148dda" />

  
  

  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     title: "Theme Demo",
  //     description: "A demo for vuepress-theme-hope",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "主题演示",
  //     description: "vuepress-theme-hope 的演示",
  //   },
  // },

  themeConfig,
});
