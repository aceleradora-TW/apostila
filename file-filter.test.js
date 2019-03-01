const filter = require('./file-filter')

describe('File Filter', () => {
  it('Traverses the mapped folders leaving only files', () => {

    const directoryStructure = [
      {
        isDirectory: false,
        path: 'root-folder/README.md'
      },
      {
        isDirectory: true,
        path: 'root-folder/empty-folder',
        children: []
      },
      {
        isDirectory: true,
        path: 'root-folder/backend',
        children: [
          {
            isDirectory: false,
            path: 'root-folder/backend/intro-to-web.md'
          },
          {
            isDirectory: true,
            path: 'root-folder/backend/java',
            children: [
              {
                isDirectory: false,
                path: 'root-folder/backend/java/oop.md'
              }
            ]
          }
        ]
      }
    ]


    const result = filter(directoryStructure)

    expect(result).toEqual([
      'root-folder/README.md',
      'root-folder/backend/intro-to-web.md',
      'root-folder/backend/java/oop.md'
    ])

  })
})

