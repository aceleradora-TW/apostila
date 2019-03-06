const path = require('path')
const fs = require('fs')
const pdfMerge = require('easy-pdf-merge')
const express = require('express')
const puppeteer = require('puppeteer')

const vuePressConfig = require('./capitulos/.vuepress/config.js')
const { output, serverPort, printOptions } = vuePressConfig.apostila.pdf

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

const startBrowser = async (callback) => {

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

  callback()
}

console.log('::: Static files prefix: ' + vuePressConfig.base)
console.log('::: Static files path: ' + vuePressConfig.apostila.pdf.assetsPath)

const server = express()
  .use(vuePressConfig.base, express.static(vuePressConfig.apostila.pdf.assetsPath))
  .use((req, res) => {
    console.log('::::::: Unavailable resource ', req.url)
    res.sendStatus(404)
  })
  .listen(serverPort, () => {
    console.log('::: Rendering server up')

    startBrowser(() => {
      console.log('::: Closing rendering server')
      server.close()

      const pages = listGeneratedPdfPages()
      console.log('::: PDF Pages generated: ')

      pages.forEach(page => console.log('\t', page))

      console.log('::: Merging pages into ' + output.mergedFilePath)

      pdfMerge(pages, output.mergedFilePath, (error) => {
        if (error) {
          console.log('ERROR ::::: ' + error)
          process.exit(1)
        }

        console.log(':::::::: Merge succeeded')
      })
    })
  })
