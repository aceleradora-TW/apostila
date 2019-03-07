const pdfMerge = require('easy-pdf-merge')

const merge = (pages, output) => new Promise((resolve, reject) =>
  pdfMerge(pages, output.mergedFilePath, (error) => error
    ? reject(error)
    : resolve())
)

module.exports = { merge }
