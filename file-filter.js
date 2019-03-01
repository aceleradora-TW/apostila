module.exports = (directoryStructure) => directoryStructure
  .filter(file => !file.isDirectory)
  .map(file => file.path)


