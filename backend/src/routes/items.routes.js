const { Router } = require('express')

const ItemsController = require('../controllers/ItemsController')

const itemsRoutes = Router()

const itemsController = new ItemsController()

itemsRoutes.post('/', itemsController.create)
itemsRoutes.put('/:id', itemsController.update)
itemsRoutes.get('/', itemsController.show)
itemsRoutes.get('/:id', itemsController.index)
itemsRoutes.delete('/:id', itemsController.delete)

module.exports = itemsRoutes
