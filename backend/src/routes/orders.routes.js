const { Router } = require('express')

const OrdersController = require('../controllers/OrdersController')

const ordersRoutes = Router()

const ordersController = new OrdersController()

ordersRoutes.post('/:user_id', ordersController.create)
ordersRoutes.get('/:order_id', ordersController.show)

module.exports = ordersRoutes