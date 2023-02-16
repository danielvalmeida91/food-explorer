const { Router } = require('express')

const ItemsController = require('../controllers/ItemsController')

const itemsRoutes = Router()

const itemsController = new ItemsController()

itemsRoutes.post('/items', itemsController.create)

module.exports = itemsRoutes
