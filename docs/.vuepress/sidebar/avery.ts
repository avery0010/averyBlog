import { defineSidebarConfig } from "vuepress-theme-hope";

export const avery = defineSidebarConfig({
  "/": [
    "",
    "home",
    {
      text: "前端知识点",
      icon: "note",
      prefix: "willbe/",
      link: "willbe/Vue/Vue",
      collapsable: true,//可折叠
        children: [
        {
          text: "Vue",
          collapsable: true,
          prefix: "Vue/",
          children: "structure",
        },
        {
          text: "React",
          collapsable: true,
          prefix: "React/",
          children: "structure",
        },
        {
          text: "零碎的知识点",
          collapsable: true,
          prefix: "article/",
          children: "structure",
        }
      ],
    },
    {
      text: "个人项目",
      icon: "creative",
      prefix: "project/",
      link: "project/",
      collapsable: true,
      children: "structure",
    },
    // {
    //   text: "遇到的坑",
    //   icon: "layout",
    //   prefix: "project/",
    //   link: "project/",
    //   collapsable: true,
    //   children: "structure",
    // },
     
    // {
    //   text: "文章",
    //   icon: "note",
    //   prefix: "posts/",
    //   children: [
    //     {
    //       text: "文章 1-4",
    //       icon: "note",
    //       collapsable: true,
    //       prefix: "article/",
    //       children: ["article1", "article2", "article3", "article4"],
    //     },
    //     {
    //       text: "文章 5-12",
    //       icon: "note",
    //       children: [
    //         {
    //           text: "文章 5-8",
    //           icon: "note",
    //           collapsable: true,
    //           prefix: "article/",
    //           children: ["article5", "article6", "article7", "article8"],
    //         },
    //         {
    //           text: "文章 9-12",
    //           icon: "note",
    //           children: ["article9", "article10", "article11", "article12"],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
});
