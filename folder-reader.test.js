const path = require('path')
const utils = require('util')
const folderReader = require('./folder-reader')

const rootDir = '.'
const targetFolder = 'simpler-test-directory-structure'

describe('Folder Reader', () => {
  /*
   * The file tree:
   *
   * simpler-test-directory-structure/
   * ├── .a-hidden-file
   * ├── README.md
   * ├── empty-child-folder
   * │   └── .keep
   * └── not-empty-child-folder
   *     ├── child-1
   *     |      └── a-file.md
   *     └── file.md
   */
  it('Reads folders recursively', () => {
    const result = folderReader(rootDir)(targetFolder)

    expect(result[0].isDirectory).toEqual(false)
    expect(result[0].path).toEqual('simpler-test-directory-structure/README.md')
    expect(result[0].children).toEqual(undefined)

    expect(result[1].isDirectory).toEqual(true)
    expect(result[1].path).toEqual('simpler-test-directory-structure/empty-child-folder')
    expect(result[1].children).toEqual([])

    expect(result[2].isDirectory).toEqual(true)
    expect(result[2].path).toEqual('simpler-test-directory-structure/not-empty-child-folder')
    expect(result[2].children[0]).toEqual({
      isDirectory: true,
      path: 'simpler-test-directory-structure/not-empty-child-folder/child-1',
      children: [
        {
          isDirectory: false,
          path: 'simpler-test-directory-structure/not-empty-child-folder/child-1/a-file.md',
        }
      ]
    })
    expect(result[2].children[1]).toEqual({
      isDirectory: false,
      path: 'simpler-test-directory-structure/not-empty-child-folder/file.md'
    })
  })
})

const flattenedStructure = [
  'simpler-test-directory-structure/README.md',
  'simpler-test-directory-structure/not-empty-child-folder/child-1/a-file.md',
  'simpler-test-directory-structure/not-empty-child-folder/file.md'
]

const urlList = [
  'http://localhost:3030/index.html',
  'http://localhost:3030/not-empty-child-folder/child-1/a-file.html',
  'http://localhost:3030/not-empty-child-folder/file.html'
]
