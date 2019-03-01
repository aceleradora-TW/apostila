const util = require('util')
const path = require('path')
const express = require('express')
const puppeteer = require('puppeteer')
const fs = require('fs')

const basePath = path.join(__dirname, 'capitulos')
const firstLevelDir = fs.readdirSync(basePath)

const readFolders = folderPath => {
  const isDirectory = fs.lstatSync(folderPath).isDirectory()

  if (!isDirectory) {
    return {
      isDirectory,
      path: folderPath
    }
  }

  const childrenFileNames = fs.readdirSync(folderPath)

  return childrenFileNames
    .filter(file => !file.startsWith('.'))
    .map(file => readFolders(path.join(folderPath, file)))
}

const bleep = firstLevelDir
  .filter(file => !file.startsWith('.'))
  .map(file => {
    const filePath = path.join(basePath, file)
    const isDirectory = fs.lstatSync(filePath).isDirectory()

    return isDirectory
      ? {
        isDirectory,
        path: filePath,
        children: readFolders(filePath)
      }
      : {
        isDirectory,
        path: filePath
      }
  })

// console.log(util.inspect(bleep, {showHidden: false, depth: null}))

const startBrowser = async (callback) => {
  console.log('::: Browser starting')
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  console.log('::: Accessing index')
  await page.goto('http://localhost:3030/java/introducao-ao-java.html')

  console.log('::: Generating PDF')
  await page.pdf({path: 'beep.pdf', format: 'A4'})

  console.log('::: Browser closing')
  await browser.close()

  console.log('::: Closing server')
  callback()
}

const server = express()
  .use(express.static('capitulos/.vuepress/dist'))
  .listen(3030, () => {
    console.log(':::  Print server up')

    startBrowser(() => console.log('::: AAAA'))
  })

const dirStructure = [
  {
    isDirectory: false,
    path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/README.md'
  },
  {
    isDirectory: true,
    path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/banco-de-dados',
    children: [
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/banco-de-dados/hibernate.md' },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/banco-de-dados/migracoes-de-banco-de-dados.md' },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/banco-de-dados/postgresql.md'
      }
    ]
  },
  {
    isDirectory: true,
    path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/ferramentas-indispensaveis',
    children: [
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/ferramentas-indispensaveis/comandos-basicos-git.md'
      },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/ferramentas-indispensaveis/comandos-basicos-linux.md'
      }
    ]
  },
  {
    isDirectory: true,
    path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/front-end',
    children:
    [
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/front-end/bulma.md'
      },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/front-end/css.md'
      },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/front-end/html.md'
      },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/front-end/javascript.md'
      },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/front-end/thymeleaf.md'
      }
    ]
  },
  {
    isDirectory: true,
    path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/infraestrutura-integracao-e-entrega-continua',
    children: [
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/infraestrutura-integracao-e-entrega-continua/circle-ci.md'
      },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/infraestrutura-integracao-e-entrega-continua/docker.md'
      },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/infraestrutura-integracao-e-entrega-continua/heroku.md'
      }
    ]
  },
  {
    isDirectory: true,
    path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/java',
    children: [
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/java/introducao-ao-java.md'
      },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/java/orientacao-a-objetos-com-java.md'
      }
    ]
  },
  {
    isDirectory: false,
    path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/logica-de-programacao.md'
  },
  {
    isDirectory: true,
    path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/mvc-http-e-spring',
    children: [
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/mvc-http-e-spring/entendendo-http.md'
      },
      {
        isDirectory: false,
        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/mvc-http-e-spring/introducao-ao-spring.md'
      }
    ]
  },
  {
    isDirectory: true,
    path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/teste-rec',
    children: [
      [
        [
          [
            {
              isDirectory: false,
              path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/teste-rec/nivel-1/nivel-2/nivel-3/nv3.md'
            }
          ],
          {
            isDirectory: false,
            path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/teste-rec/nivel-1/nivel-2/nv2.md'
          }
        ],
        [
          {
            isDirectory: false,
            path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/teste-rec/nivel-1/nivel-21/nv21.md'
          }
        ],
        {
          isDirectory: false,
          path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/teste-rec/nivel-1/nv1.md'
        }
      ],
      [
        {
          isDirectory: false,
          path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/teste-rec/nivel-11/nv11.md'
        }
      ]
    ]
  }
]

const childrenFiles = (folder) => {
  console.log('>>>>>>> ', folder)

  return folder.children.map(child => {
    console.log('>>>>>>>>>>>>>>>>>>>>> ', child)
    return child.isDirectory
      ? child.path
      : child.path
  })
}

const flattenedStructure = dirStructure
  .map(file => {
    return !file.isDirectory
      ? file.path
      : childrenFiles(file)
  })
  .reduce((result, file) => Array.isArray(file)
    ? [...result, ...file]
    : [...result, file], []
  )


console.log(util.inspect(flattenedStructure, {depth: null}))


const expectedFlattened = [
]

// {
//   
//   isDirectory: true,
//     path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/teste-rec',
//     children: [
//       [
//         [
//           [
//             {
//               isDirectory: false,
//               path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/teste-rec/nivel-1/nivel-2/nivel-3/nv3.md'
//             }
//           ],
//           {
//             isDirectory: false,
//             path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/teste-rec/nivel-1/nivel-2/nv2.md'
//           }
//         ],
//         {
//           isDirectory: false,
//           path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/capitulos/teste-rec/nivel-1/nv1.md'
//         }
//       ]
//     ]
// }
