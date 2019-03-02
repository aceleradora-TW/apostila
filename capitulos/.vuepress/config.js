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
        mergedFilePath: path.join(__dirname, 'dist', 'apostila.pdf')
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
    search: false,
    sidebarDepth: 3,
    sidebar: [
      ['/', 'Sumário'],
      ['ferramentas-indispensaveis/comandos-basicos-linux.md', 'Introdução ao Linux'],
      ['ferramentas-indispensaveis/comandos-basicos-git.md', 'Introdução ao Git'],
      ['java/introducao-ao-java.md', 'Introdução ao Java'],
      ['java/orientacao-a-objetos-com-java.md', 'Orientação a Objetos com Java'],
      ['banco-de-dados/postgresql.md', 'Começando com PostgreSQL'],
      ['banco-de-dados/migracoes.md', 'Migrações de banco de dados'],
      ['banco-de-dados/hibernate.md', 'Hibernate'],
      ['mvc-http-e-spring/http.md', 'HTTP: Como funciona a Web'],
      ['mvc-http-e-spring/padrao-mvc.md', 'O padrão MVC'],
      ['mvc-http-e-spring/introducao-ao-spring.md', 'Introdução ao Spring'],
      ['front-end/html.md', 'HTML'],
      ['front-end/css.md', 'CSS'],
      ['front-end/javascript.md', 'JavaScript'],
      ['front-end/thymeleaf.md', 'Thymeleaf'],
      ['front-end/bulma.md', 'Bulma']
    ]
  }
}
