import { defineNavbarConfig } from "vuepress-theme-hope";

export const avery = defineNavbarConfig([
  "",
  "/home",
  { text: "项目", icon: "creative", link: "/project/ui" },
  {
    text: "前端知识点",
    icon: "edit",
     link: "/willbe/Vue/Fetch" 
  },
  {
    text: "关于我",
    icon: "note",
    link: "/me/",
  },
]);
