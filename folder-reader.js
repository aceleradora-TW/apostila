const fs = require('fs')
const util = require('util')
const path = require('path')

const noHiddenFiles = (file) => !file.startsWith('.')

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

    const childrenFileNames = fs
      .readdirSync(folderPath)
      .filter(noHiddenFiles)

    return {
      isDirectory,
      path: folderPath,
      children: childrenFileNames
      .filter(noHiddenFiles)
      .map(file => readFolders(path.join(folderPath, file)))
    }
  }

  return firstLevelDir
    .filter(noHiddenFiles)
    .map(file => readFolders(path.join(basePath, file)))
}
