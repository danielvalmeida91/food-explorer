const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class DishesController {
  async create(request, response) {
    const { name, description, price } = request.body

    if (!name || !description || !price) {
      throw new AppError('Todos os campos são obrigatórios.')
    }

    await knex('dishes').insert({
      name,
      description,
      price
    })

    response.json({ message: 'Prato cadastrado com sucesso!' })
  }

  async update(request, response) {
    const { name, description, price } = request.body
    const { id } = request.params

    const dishe = await knex('dishes').where('id', id).first()

    if (!dishe) {
      throw new AppError('Prato não cadastrado')
    }

    dishe.name = name ?? dishe.name
    dishe.description = description ?? dishe.description
    dishe.price = price ?? dishe.price

    await knex('dishes').update(dishe).where({ id })

    response.json(dishe)
  }

  async show(request, response) {
    const dishe = await knex('dishes')

    response.json(dishe)
  }

  async index(request, response) {
    const { id } = request.params

    const dishe = await knex('dishes').where('id', id).first()

    if (!dishe) {
      throw new AppError('Prato não cadastrado')
    }
    response.json(dishe)
  }

  async delete(request, response) {
    const { id } = request.params

    const isOK = await knex('dishes').delete().where({ id })
    if (isOK) {
      response.json({ message: 'Prato excluído com sucesso!' })
    }

    throw new AppError('Prato não encontrado.')
  }
}

module.exports = DishesController
