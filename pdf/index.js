const puppeteer = require('puppeteer')

const vuePressConfig = require('../capitulos/.vuepress/config.js')
const serverSetup = require('./server')
const pdfOperations = require('./operations')(vuePressConfig)

const baseServerUrl = `http://localhost:${vuePressConfig.apostila.pdf.serverPort}${vuePressConfig.base}`

const isSummaryPage = (resource) => resource === '/'

const toUrl = ([resource]) => isSummaryPage(resource)
  ? `${baseServerUrl}${vuePressConfig.base}`
  : `${baseServerUrl}${resource.replace(/\.md/, '.html')}`

const endpoints = vuePressConfig
  .themeConfig
  .sidebar
  .map(toUrl)

console.log('::: Static files prefix: ' + vuePressConfig.base)
console.log('::: Static files path: ' + vuePressConfig.apostila.pdf.assetsPath)
console.log('::: Calls ')
endpoints.forEach(endpoint => console.log('\t', endpoint))

const startBrowser = async () => {

  console.log('::: Browser starting')
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  })

  for (const [idx, endpoint] of endpoints.entries()) {

    console.log('::: New page')
    const page = await browser.newPage()

    await page.setViewport({
      height: 1080,
      width: 1920,
      isMobile: false,
      hasTouch: false
    })

    console.log('::: Accessing ' + endpoint)
    // await page.goto(endpoint, { waitUntil: ['domcontentloaded', 'networkidle0', 'load'] })
    await page.goto(endpoint)

    const tempPagePath = pdfOperations.generateTemporaryPagePath()

    console.log(`::: Generating PDF ${tempPagePath}`)

    await page.pdf({
      path: tempPagePath,
      ...vuePressConfig.apostila.pdf.printOptions
    })
  }

  console.log('::: Closing browser')
  await browser.close()

}


/*

First steps for decent code

TODO:

  - DONE Write server logic into separate module
  - DONE Write a module that wraps PDF operations (merge only?) into Promises
  - Write browser logic into separate module
  - Use new modules with async/await to maximize code karma and get along with code goddessess:

 const server = await setupServer(vuePressConfig)
 const generatedPages = await runBrowser()

  try {
   // merge module should probably be wrapped into a promise
   await pdfOperations.merge(generatedPages, output.mergedFilePath)
  } catch (error) {
    // log
  }

 server.close()

*/

const generate = async() => {
  const server = await serverSetup(vuePressConfig)

  // await startBrowser(endpoints, vuePressConfig)
  await startBrowser()

  console.log('::: Closing rendering server')
  server.close()

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

const invalidOption = (message) => () => console.log(message)

const main = async (cliArgs) => {
  const options = {
    generate
  }

  const option = options[Object.keys(options).find(op => cliArgs[2] === op)] || invalidOption(
    `::: Error:
    Invalid Option '${cliArgs[2]}'.

    Try any of the following:
    ${Object.keys(options).map(option => '  - ' + option).join('\n  - ')}
    `
  )

  option()
}

main(process.argv)
