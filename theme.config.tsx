import React from "react";
import Logo from "./components/logo";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps: () => ({
    titleTemplate: "%s - Mihomo Purity - 一个更纯净的 Mihomo Party 代理客户端",
  }),
  logo: <Logo style={{ height: "24px" }} />,
  docsRepositoryBase:
    "https://github.com/mihomo-purity/mihomo-purity.github.io/edit/master",
  project: {
    link: "https://github.com/mihomo-purity/mihomo-purity",
  },
  feedback: {
    content: undefined,
  },
  editLink: {
    text: "在 GitHub 上编辑此页",
  },
  toc: {
    title: "目录",
  },
  search: {
    placeholder: "搜索文档",
  },
  themeSwitch: {
    useOptions: {
      system: "自动",
      light: "浅色",
      dark: "深色",
    },
  },
  darkMode: true,
  footer: {
    text: "GPL-3.0 © mihomo-purity.",
  },
};

export default config;
