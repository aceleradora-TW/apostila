module.exports = {
  title: 'Apostila Aceleradora',
  cache: false,
  plugins: ['vuepress-plugin-export'],
  markdown: {
    toc: {
      includeLevel: [1, 2, 3, 4]
    }
  }
  themeConfig: {
    navbar: true,
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
