const path = require('path')
const fs = require('fs')
const puppeteer = require('puppeteer')

const vuePressConfig = require('../capitulos/.vuepress/config.js')
const { output, serverPort, printOptions } = vuePressConfig.apostila.pdf
const serverSetup = require('./server')
const { merge } = require('./operations')

const pdfPagePath = (pageIndex) =>
  path.join(output.renderDir, `page-${new Date().getTime().toString()}.pdf`)

const listGeneratedPdfPages = () => fs
  .readdirSync(output.renderDir)
  .filter(file => file.endsWith('.pdf'))
  .map(pdfPage => path.join(output.renderDir, pdfPage))

const toUrl = ([resource]) => resource === '/'
  ? `http://localhost:${serverPort}${vuePressConfig.base}`
  : `http://localhost:${serverPort}${vuePressConfig.base}${resource.replace(/\.md/, '.html')}`

const endpoints = vuePressConfig
  .themeConfig
  .sidebar
  .map(toUrl)

console.log(':::: Calls ')
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

    console.log(`::: Generating PDF ${pdfPagePath(idx + 1)}`)

    await page.pdf({
      path: pdfPagePath(idx + 1),
      ...printOptions
    })
  }

  console.log('::: Closing browser')
  await browser.close()

}

console.log('::: Static files prefix: ' + vuePressConfig.base)
console.log('::: Static files path: ' + vuePressConfig.apostila.pdf.assetsPath)

/*

First steps for decent code

TODO:

  - Write server and browser logic into separate modules
  - Write a module that wraps PDF operations (merge only?) into Promises
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

const main = async () => {
  const server = await serverSetup(vuePressConfig)

  // await startBrowser(endpoints, vuePressConfig)
  await startBrowser()

  console.log('::: Closing rendering server')
  server.close()

  const pages = listGeneratedPdfPages()
  console.log('::: PDF Pages generated: ')

  pages.forEach(page => console.log('\t', page))

  console.log('::: Merging pages into ' + output.mergedFilePath)

  try {
    await merge(pages, output.mergedFilePath)
    console.log(':::::::: Merge succeeded')
  } catch(mergeError) {
      console.error('::::::::: Error while merging pdf pages: ' + mergeError)
      process.exit(1)
  }
}

main()
