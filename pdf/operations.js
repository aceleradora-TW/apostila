/*
 * TODO: Pages are supposed to be called chapters (since they may have multiple pages)
*/

const fs = require('fs')
const util = require('util')
const path = require('path')
const pdfMerge = require('easy-pdf-merge')

const unlink = util.promisify(fs.unlink)

const generateTemporaryPagePath = (outputDirectory) => () =>
  path.join(outputDirectory, `page-${new Date().getTime().toString()}.pdf`)

const generatedPages = (renderDir) => () => fs
  .readdirSync(renderDir)
  .filter(file => file.endsWith('.pdf'))
  .map(pdfPage => path.join(renderDir, pdfPage))

const merge = (outputPath) => (pages) => new Promise(
  (resolve, reject) => pdfMerge(pages, outputPath, error => error
    ? reject(error)
    : resolve()
  )
)

const clearGeneratedPages = (outputDirectory) => async () => {
  const pages = generatedPages(outputDirectory)()

  console.log()
  console.log(':::: Deleting all pdf files at ', outputDirectory)
  console.log(`:::: ${pages.length} files will be deleted`)
  console.log()

  return Promise.all(pages.map(page => {
    console.log('::: Deleting file ', page)
    return unlink(page)
  }))
}

module.exports = (config) => ({
  merge: merge(config.apostila.pdf.output.mergedFilePath),
  generatedPages: generatedPages(config.apostila.pdf.output.renderDir),
  clearGeneratedPages: clearGeneratedPages(config.apostila.pdf.output.renderDir),
  generateTemporaryPagePath: generateTemporaryPagePath(config.apostila.pdf.output.renderDir)
})
