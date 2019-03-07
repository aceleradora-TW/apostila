const express = require('express')

const notFoundMiddleware = (req, res) => {
  console.log('::::::: Unavailable resource ', req.url)
  res.sendStatus(404)
}

const createAndStart = (config) => async () => express()
  .use(config.base, express.static('capitulos/.vuepress/dist'))
  .use(notFoundMiddleware)
  .listen(config.apostila.pdf.serverPort, () => {
    console.log('::: Rendering server up on port ', config.apostila.pdf.serverPort)
  })


module.exports = (config) => ({
  createAndStart: createAndStart(config)
})
