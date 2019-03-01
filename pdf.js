const path = require('path')
const fs = require('fs')
const pdfMerge = require('easy-pdf-merge')
const express = require('express')
const puppeteer = require('puppeteer')

const vuePressConfig = require('./capitulos/.vuepress/config.js')

const { output, serverPort, printOptions } = vuePressConfig.apostila.pdf

const url = (endpoint) => endpoint === vuePressConfig.base
  ? `http://localhost:${serverPort}${vuePressConfig.base}`
  : `http://localhost:${serverPort}${vuePressConfig.base}${endpoint}`

const pdfPagePath = (pageIndex) => path.join(output.renderDir, `page-${pageIndex}.pdf`)

const listGeneratedPdfPages = () => fs
  .readdirSync(output.renderDir)
  .filter(file => file.endsWith('.pdf'))
  .map(pdfPage => path.join(output.renderDir, pdfPage))

const toEndpoint = ([path]) => path === '/'
  ? vuePressConfig.base
  : path.replace(/\.md/, '.html')

const endpoints = vuePressConfig
  .themeConfig
  .sidebar
  .map(toEndpoint)

console.log(':::: Endpoints ', endpoints)

const startBrowser = async (callback) => {

  console.log('::: Browser starting')
  const browser = await puppeteer.launch()

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
    await page.goto(url(endpoint), { waitUntil: ['domcontentloaded', 'networkidle0', 'load'] })

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

const server = express()
  .use(vuePressConfig.base, express.static('capitulos/.vuepress/dist'))
  .use((req, res) => {
    console.log('::::::: Resource unavailable ', req.url)
    res.sendStatus(404)
  })
  .listen(serverPort, () => {
    console.log(':::  Rendering server up')

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
