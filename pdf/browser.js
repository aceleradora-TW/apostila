const puppeteer = require('puppeteer')

const DOCKER_COMPATIBLE_PUPPETEER_CONFIG = {
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox'
  ]
}

const FULL_HD_DESKTOP_VIEWPORT = {
  height: 1080,
  width: 1920,
  isMobile: false,
  hasTouch: false
}

const pdfPagePath = (outputDirectory) =>
  path.join(outputDirectory, `page-${new Date().getTime().toString()}.pdf`)

const printPagesAsPdf = (pdfOperations, config) => async (urls) => {
  console.log('::: Browser starting')
  const browser = await puppeteer.launch(DOCKER_COMPATIBLE_PUPPETEER_CONFIG)

  for (const url of urls) {

    console.log('::: New page')
    const page = await browser.newPage()

    await page.setViewport(FULL_HD_DESKTOP_VIEWPORT)

    console.log('::: Accessing ' + url)
    // await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0', 'load'] })
    await page.goto(url)

    const pagePath = pdfOperations.generateTemporaryPagePath()

    console.log(`::: Generating PDF ${pagePath}`)

    await page.pdf({
      path: pagePath,
      ...config.apostila.pdf.printOptions
    })
  }

  console.log('::: Closing browser')
  await browser.close()
}

module.exports = (pdfOperations, config) => ({
  printPagesAsPdf: printPagesAsPdf(pdfOperations, config)
})
