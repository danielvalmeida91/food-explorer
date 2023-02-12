async function routes(fastify, options) {
  fastify.post('/users', (request, response) => {
    const { name, email, password } = request.body
    response.send({
      name,
      email,
      password
    })
  })
}

module.exports = routes
