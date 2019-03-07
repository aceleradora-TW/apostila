const fs = require('fs')
const path = require('path')
const pdfMerge = require('easy-pdf-merge')

const generateTemporaryPagePath = (outputDirectory) => () =>
  path.join(outputDirectory, `page-${new Date().getTime().toString()}.pdf`)

const generatedPages = (renderDir) => () => fs
  .readdirSync(renderDir)
  .filter(file => file.endsWith('.pdf'))
  .map(pdfPage => path.join(renderDir, pdfPage))

const merge = (outputPath) => (pages) => new Promise((resolve, reject) =>
  pdfMerge(pages, outputPath, (error) => error
    ? reject(error)
    : resolve()))

module.exports = (config) => ({
  merge: merge(config.apostila.pdf.output.mergedFilePath),
  generatedPages: generatedPages(config.apostila.pdf.output.renderDir),
  generateTemporaryPagePath: generateTemporaryPagePath(config.apostila.pdf.output.renderDir)
})
