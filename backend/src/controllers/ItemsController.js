const DiskStorage = require('../providers/DiskStorage')
const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class ItemsController {
  async create(request, response) {
    const data = request.body.data
    const { name, description, price, ingredients, category } = JSON.parse(data)
    const picture = request.file.filename

    const diskStorage = new DiskStorage()

    const filename = await diskStorage.saveFile(picture)

    if (!name || !description || !price) {
      throw new AppError('Todos os campos são obrigatórios.')
    }

    const item_id = await knex('items').insert({
      name,
      description,
      price,
      category,
      picture: filename
    })

    const ingredientsInsert = ingredients.map(ingredient => {
      return {
        item_id,
        name: ingredient
      }
    })

    await knex('ingredients').insert(ingredientsInsert)

    return response.json('Item cadastrado com sucesso!')
  }

  async update(request, response) {
    const data = request.body.data
    const picWasUpdated = request.body.picStatus
    const { name, description, price, category, ingredients } = JSON.parse(data)
    const { id } = request.params

    const item = await knex('items').where('id', id).first()

    if (!item) {
      throw new AppError('Item não cadastrado')
    }

    const diskStorage = new DiskStorage()

    const filename = item.picture

    if (picWasUpdated === false) {
      const picture = request.file.filename
      await diskStorage.deleteFile(item.picture)
      filename = await diskStorage.saveFile(picture)
    }

    // return console.log(item, filename)
    await knex('items').where({ id }).update({
      name,
      price,
      description,
      category,
      picture: filename
    })

    if (ingredients) {
      await knex('ingredients').where('item_id', id).delete()

      const ingredientsToInsert = ingredients.map(ingredient => {
        return {
          item_id: id,
          name: ingredient
        }
      })

      await knex('ingredients').insert(ingredientsToInsert)
    }

    return response.json(item)
  }

  async show(request, response) {
    const item = await knex('items')

    return response.json(item)
  }

  async index(request, response) {
    const { id } = request.params

    const item = await knex('items').where('id', id).first()

    if (!item) {
      throw new AppError('Item não cadastrado')
    }
    return response.json(item)
  }

  async delete(request, response) {
    const { id } = request.params

    const isOK = await knex('items').delete().where({ id })
    if (isOK) {
      return response.json({ message: 'Item excluído com sucesso!' })
    }

    throw new AppError('Item não encontrado.')
  }
}

module.exports = ItemsController
