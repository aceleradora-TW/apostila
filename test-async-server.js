const config = require('./capitulos/.vuepress/config')
const setupServer = require('./server')

const main = async () => {
  console.log('::: Trying to start async server')

  const server = await setupServer(config)

  console.log('::: Post start')

  console.log('::: Closing server')
  server.close()

  console.log('::: Hot Damn!')
}

main()
