module.exports = {
  title: 'Apostila Aceleradora',
  cache: false,
  plugins: [
    [
      'mathjax', {
        target: 'chtml',
        macros: {
          '*': '\\times',
        },
      }
    ],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' }
    ],
    sidebarDepth: 2,
    sidebar: [
      ['/', 'Sumário'],
      ['ferramentas-indispensaveis/comandos-basicos-git.md', 'Introdução ao Git'],
      ['java/introducao-ao-java.md', 'Introdução ao Java'],
      ['java/orientacao-a-objetos-com-java.md', 'Orientação a Objetos com Java']
    ]
  }
}
