const express = require('express')
const puppeteer = require('puppeteer')

const startBrowser = async (callback) => {
  console.log('::: Browser starting')
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  console.log('::: Accessing index')
  await page.goto('http://localhost:3030/java/introducao-ao-java.html')

  console.log('::: Generating PDF')
  await page.pdf({path: 'beep.pdf', format: 'A4'})

  console.log('::: Browser closing')
  await browser.close()

  console.log('::: Closing server')
  callback()
}

const server = express()
  .use(express.static('capitulos/.vuepress/dist'))
  .listen(3030, () => {
    console.log(':::  Print server up')

    startBrowser(() => console.log('::: AAAA'))
  })
