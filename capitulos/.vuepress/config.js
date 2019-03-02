const path = require('path')

const base = '/apostila-vuepress/'

console.log('::::::: Base', base)

module.exports = {
  base,
  title: 'Apostila Aceleradora',
  description: 'Primeiros passos na Aceleradora Ágil',
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
  apostila: {
    pdf: {
      output: {
        renderDir: path.join(__dirname, '.pdf-output'),
        mergedFilePath: path.join(__dirname, 'dist', 'assets', 'apostila.pdf')
      },
      serverPort: 3030,
      assetsPath: path.join(__dirname, 'dist'),
      printOptions: {
        format: 'A4',
        scale: 0.8,
        displayHeaderFooter: false,
        margin: {
          top: '10mm',
          bottom: '25mm',
          left: '25mm',
          right: '25mm'
        }
      }
    }
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
