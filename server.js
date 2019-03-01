const express = require('express')

const server = express()
  .use(express.static('capitulos/.vuepress/dist'))
  .use((req, res) => {
    console.log('::::::: Page unavailable ', req.url)
    res.sendStatus(404)
  })
  .listen(3030, () => {
    console.log(':::  Rendering server up')
  })
