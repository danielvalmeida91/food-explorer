const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const ItemsController = require('../controllers/ItemsController')
const ItemPictureController = require('../controllers/ItemPictureController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const itemsRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const itemsController = new ItemsController()
const itemPicutureController = new ItemPictureController()

itemsRoutes.use(ensureAuthenticated)

itemsRoutes.post('/', upload.single('picture'), itemsController.create)
itemsRoutes.put('/:id', upload.single('picture'), itemsController.update)
itemsRoutes.get('/', itemsController.show)
itemsRoutes.get('/:id', itemsController.index)
itemsRoutes.delete('/:id', itemsController.delete)
itemsRoutes.patch(
  '/picture',
  upload.single('picture'),
  itemPicutureController.update
)

module.exports = itemsRoutes
