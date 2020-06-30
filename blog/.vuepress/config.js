const path = require('path')

module.exports = {
  base: 'build',
  title: 'vuepress default theme',
  description: 'demo',
  dest: 'docs',
  theme: '@vuepress/blog',
  themeConfig: {
    logo: '/logo.png',
    // 导航
    nav: [
      { text: 'Blog', link: '/' },
      { text: 'Tag', link: '/tag/' },
      { text: 'Demo', link: '/2020/06/29/demo/', target:'_blank' }
    ],
    // 侧边栏
    // sidebarDepth: 3,
    // sidebar: [
    //   '/'
    // ],
    displayAllHeaders: true,    // 
    activeHeaderLinks: true,    // 
    lastUpdated: 'Last Updated' // 最后修改时间
  },
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets/images")
      }
    }
  }
}