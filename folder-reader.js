const fs = require('fs')
const util = require('util')
const path = require('path')

module.exports = (rootDirectory) => (initialFolder) =>  {
  const basePath = path.join(rootDirectory, initialFolder)
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

    return {
      isDirectory,
      path: folderPath,
      children: childrenFileNames
      .filter(file => !file.startsWith('.'))
      .map(file => readFolders(path.join(folderPath, file)))
    }
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

  return bleep
}
