const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class CategoriesController {
  async index(request, response) {
    const categories = await knex('items').select('category').distinct()
    if (!categories) {
      throw new AppError('Não possui categorias cadastradas.')
    }

    return response.json(categories)
  }
}

module.exports = CategoriesController
