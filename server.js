const path = require('path')
const fs = require('fs')
const pdfMerge = require('easy-pdf-merge')
const express = require('express')
const puppeteer = require('puppeteer')

const vuePressConfig = require('./capitulos/.vuepress/config.js')

const SERVER_PORT = 3030
const PDF_OUTPUT_PATH = path.join(__dirname, '.pdf-output')
const PDF_MERGE_OUTPUT = path.join(PDF_OUTPUT_PATH, 'apostila.pdf')

const url = (path) => `http://localhost:${SERVER_PORT}/${path}`
const pdfPagePath = (pageIndex) => path.join(PDF_OUTPUT_PATH, `page-${pageIndex}.pdf`)

const listGeneratedPdfPages = () => fs
  .readdirSync(PDF_OUTPUT_PATH)
  .filter(file => file.endsWith('.pdf'))
  .map(pdfPage => path.join(PDF_OUTPUT_PATH, pdfPage))

const toEndpoint = ([path]) => path === '/'
  ? path
  : path.replace(/\.md/, '.html')

const endpoints = vuePressConfig
  .themeConfig
  .sidebar
  .map(toEndpoint)

console.log(':::: Endpoints ', endpoints)

const startBrowser = async (callback) => {

  console.log('::: Browser starting')
  const browser = await puppeteer.launch()

  console.log('::: New page')
  const page = await browser.newPage()

  for (const [idx, endpoint] of endpoints.entries()) {

    console.log('::: Accessing ' + endpoint)
    await page.goto(url(endpoint))

    console.log(`::: Generating PDF ${pdfPagePath(idx + 1)}`)
    await page.pdf({ path: pdfPagePath(idx + 1), format: 'A4' })
  }

  console.log('::: Closing browser')
  await browser.close()

  callback()
}

const server = express()
  .use(express.static('capitulos/.vuepress/dist'))
  .listen(SERVER_PORT, () => {
    console.log(':::  Rendering server up')

    startBrowser(() => {
      console.log('::: Closing rendering server')
      server.close()

      const pages = listGeneratedPdfPages()
      console.log('::: PDF Pages generated: ')

      pages.forEach(page => console.log('\t', page))

      console.log('::: Merging pages into ' + PDF_MERGE_OUTPUT)

      pdfMerge(pages, PDF_MERGE_OUTPUT, (error) => {
        if (error) {
          console.err('ERROR ::::: ' + error)
          process.exit(1)
        }

        console.log(':::::::: Merge succeeded')
        process.exit(0)
      })
    })
  })
