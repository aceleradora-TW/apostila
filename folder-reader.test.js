const folderReader = require('./folder-reader')

const rootDir = __dirname
const targetFolder = 'test-directory-structure'

describe('Folder Reader', () => {
  const expectedReadingResult = [
    {
      isDirectory: false,
      path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/README.md'
    },
    {
      isDirectory: true,
      path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec',
      children: [
        {
          isDirectory: true,
          path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-1/',
          children: [
            {
              isDirectory: false,
              path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-1/nv1.md'
            },
            {
              isDirectory: true,
              path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-1/nivel-2',
              children: [
                {
                  isDirectory: false,
                  path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-1/nivel-2/nv2.md',
                },
                {
                  isDirectory: true,
                    path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-1/nivel-2/nivel-3',
                    children: [
                      {
                        isDirectory: false,
                        path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-1/nivel-2/nivel-3/nv3.md',
                      }
                    ]
                }
              ]
            },
            {
              isDirectory: true,
              path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-11/',
              children: [
                {
                  isDirectory: false,
                  path: '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-11/nv11.md',
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  it('Reads folders recursively', () => {
    const result = folderReader(rootDir)(targetFolder)

    const utils = require('util')

    // console.log(utils.inspect(result, {depth: null}))

    expect(result[0]).toEqual(expectedReadingResult[0])
    expect(result[1].path).toEqual(expectedReadingResult[1].path)
    expect(result[1].children.path).toEqual(expectedReadingResult[1].children[0].path)

    // kexpect(result).toEqual(expectedReadingResult)
  })
})


const flattenedStructure = [
  '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/README.md',
  '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-1/nv1.md',
  '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-1/nivel-2/nv2.md',
  '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-1/nivel-2/nivel-3/nv3.md',
  '/Users/yrachid/wspace/aceleradora/apostila-vuepress/test-directory-structure/teste-rec/nivel-11/nv11.md'
]

const urlList = [
  'http://localhost:3030/test-directory-structure/index.html',
  'http://localhost:3030/test-directory-structure/teste-rec/nivel-1/nv1.html',
  'http://localhost:3030/test-directory-structure/teste-rec/nivel-1/nivel-2/nv2.html',
  'http://localhost:3030/test-directory-structure/teste-rec/nivel-1/nivel-2/nivel-3/nv3.html',
  'http://localhost:3030/test-directory-structure/teste-rec/nivel-11/nv11.html'
]
