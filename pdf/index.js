const vuePressConfig = require('../capitulos/.vuepress/config.js')

const server = require('./server')(vuePressConfig)
const pdfOperations = require('./operations')(vuePressConfig)
const browser = require('./browser')(pdfOperations, vuePressConfig)

console.log('::: Static files prefix: ' + vuePressConfig.base)
console.log('::: Static files path: ' + vuePressConfig.apostila.pdf.assetsPath)
console.log('::: PDF chapters temporary output directory: ' + vuePressConfig.apostila.pdf.output.renderDir)

const generate = async() => {

  const baseUrl = `http://localhost:${vuePressConfig.apostila.pdf.serverPort}${vuePressConfig.base}`

  const isSummaryPage = (resource) => resource === '/'

  const toUrl = ([resource]) => isSummaryPage(resource)
    ? `${baseUrl}`
    : `${baseUrl}${resource.replace(/\.md/, '.html')}`

  const endpoints = vuePressConfig
    .themeConfig
    .sidebar
    .map(toUrl)

  console.log('::: Calls ')
  endpoints.forEach(endpoint => console.log('\t', endpoint))

  const runningServer = await server.createAndStart()

  await browser.printPagesAsPdf(endpoints)

  console.log('::: Closing rendering server')
  runningServer.close()

  const pages = pdfOperations.generatedPages()
  console.log('::: PDF Pages generated: ')

  pages.forEach(page => console.log('\t', page))

  try {
    console.log('::: Merging pages into ' + vuePressConfig.apostila.pdf.output.mergedFilePath)
    await pdfOperations.merge(pages)
    console.log(':::::::: Merge succeeded')
  } catch(mergeError) {
      console.error('::::::::: Error while merging pdf pages: ' + mergeError)
      process.exit(1)
  }
}

const clean = async () => {
  try {
    await pdfOperations.clearGeneratedPages()
    console.log('::: Output directory successfully cleaned')
  } catch (error) {
      console.error('::::::::: Error while deleting generated pages: ' + error)
      process.exit(1)
  }
}

const invalidOption = (message) => () => console.log(message)

const main = async (cliArgs) => {
  const options = {
    generate,
    clean
  }

  const option = options[Object.keys(options).find(op => cliArgs[2] === op)] || invalidOption(
    `::: Error:
    Invalid Option '${cliArgs[2]}'.

    Try any of the following:
    ${Object.keys(options).map(option => '  - ' + option).join('\n    ')}
    `
  )

  option()
}

main(process.argv)
