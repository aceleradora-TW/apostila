const path = require('path')

const base = '/apostila/'

console.log('::::::: Base', base)

module.exports = {
  base,
  title: 'Apostila Aceleradora',
  description: 'Primeiros passos na Aceleradora Ágil',
  cache: false,
  plugins: [
    [
      'mathjax', {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      }
    ],
  ],
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
        scale: 0.9,
        displayHeaderFooter: false,
        margin: {
          top: '10mm',
          bottom: '10mm',
          left: '5mm',
          right: '5mm'
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
      ['front-end/html.md', 'HTML'],
      ['front-end/css.md', 'CSS'],
      ['front-end/javascript.md', 'JavaScript'],
      ['banco-de-dados/postgresql.md', 'Começando com PostgreSQL'],
      ['mvc-http-e-spring/http.md', 'HTTP: Como funciona a Web'],
      ['mvc-http-e-spring/introducao-ao-spring.md', 'Introdução ao Spring'],
      ['banco-de-dados/hibernate.md', 'Hibernate'],
      // ['banco-de-dados/migracoes.md', 'Migrações de banco de dados'],
      ['front-end/thymeleaf.md', 'Thymeleaf'],
      ['front-end/bulma.md', 'Bulma'],
      ['infraestrutura-integracao-e-entrega-continua/heroku.md', 'Heroku'],
      ['infraestrutura-integracao-e-entrega-continua/docker.md', 'Docker'],
      ['infraestrutura-integracao-e-entrega-continua/circle-ci.md', 'Circle CI']
    ]
  }
}
