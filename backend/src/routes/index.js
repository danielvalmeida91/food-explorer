const { Router } = require('express')

const usersRoutes = require('./users.routes')
const itemsRoutes = require('./items.routes')

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/', itemsRoutes)

module.exports = routes
