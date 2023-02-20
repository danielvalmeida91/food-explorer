const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class ItemsController {
  async create(request, response) {
    const { name, description, price, ingredients, categories } = request.body

    if (!name || !description || !price) {
      throw new AppError('Todos os campos são obrigatórios.')
    }

    const item_id = await knex('items').insert({
      name,
      description,
      price
    })

    const ingredientsInsert = ingredients.map(ingredient => {
      return {
        item_id,
        name: ingredient
      }
    })

    const categoriesInsert = categories.map(category => {
      return {
        item_id,
        name: category
      }
    })

    await knex('ingredients').insert(ingredientsInsert)
    await knex('categories').insert(categoriesInsert)

    return response.json({ message: 'Item cadastrado com sucesso!' })
  }

  async update(request, response) {
    const { name, description, price } = request.body
    const { id } = request.params

    const item = await knex('items').where('id', id).first()

    if (!item) {
      throw new AppError('Item não cadastrado')
    }

    item.name = name ?? item.name
    item.description = description ?? item.description
    item.price = price ?? item.price

    await knex('items').update(item).where({ id })

    return response.json(item)
  }

  async index(request, response) {
    const item = await knex('items')

    return response.json(item)
  }

  async show(request, response) {
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
