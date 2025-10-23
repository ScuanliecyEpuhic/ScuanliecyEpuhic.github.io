import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://scuanliecyepuhic.github.io',  //你网站的URL
  favicon: "/images/favicon.png",	// 网页图标链接
  lang: 'zh-CN',  //默认语言
  title: "ᖰ⌯'▾'⌯ᖳ~~♥",  //网站标题
  subtitle: 'Try to be better.',//网站副标题
  author: {
    name: '咲之花',//博主名称
    avatar: "/images/avatar.png",	//头像链接
    status: {
      emoji: '😉'	// 头像旁边的emoji
    },
  },
  description: '梦想成为pwn糕手的半二次元人 .',  //简介
  social: [
    {name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/ScuanliecyEpuhic',  //GitHub地址
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/22189728',  //BiliBili地址
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
  ],

  search: {
    enable: true,
    type: 'fuse'
  },
  fuse: {
    /**
     * 设置搜索的文件路径
     */
   pattern: '/posts/**/*.md',
   options: {
      keys: ['title', 'tags', 'categories', 'content'],
      /**
       * @default 0.1
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
      threshold: 0.1,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    },
  },
  comment: {
    enable: true
  },
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  sponsor: {
    enable: false,
  },
})
