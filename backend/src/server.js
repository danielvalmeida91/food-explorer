const fastify = require('fastify')({
  logger: false
})

fastify.register(require('./users.routes.js'))

fastify.listen({ port: 3333 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
