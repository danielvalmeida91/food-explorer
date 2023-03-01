const { Router } = require('express')

const usersRoutes = require('./users.routes')
const itemsRoutes = require('./items.routes')
const sessionsRoutes = require('./sessions.routes')
const ordersRoutes = require('./orders.routes')
const ingredientsRoutes = require('./ingredients.routes')
const categoriesRoutes = require('./categories.routes')

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/items', itemsRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/orders', ordersRoutes)
routes.use('/ingredients', ingredientsRoutes)
routes.use('/categories', categoriesRoutes)

module.exports = routes
