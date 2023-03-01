const DiskStorage = require('../providers/DiskStorage')
const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class ItemPictureController {
  async update(request, response) {
    const { item_id } = request.params
    const pictureFilename = request.file.filename

    const diskStorage = new DiskStorage()

    const item = await knex('items').where('id', item_id).first()

    if (!item) {
      throw new AppError('Item não encontrado')
    }

    if (item.picture) {
      await diskStorage.deleteFile(item.picture)
    }

    const filename = await diskStorage
    saveFile(pictureFilename)
    item.picture = filename

    await knex('items').update(item).where('id', item_id)

    return response.json(item)
  }
}

module.exports = ItemPictureController
