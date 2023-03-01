const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class IngredientsController {
  async index(request, response) {
    const { item_id } = request.params

    const ingredients = await knex('ingredients').where('item_id', item_id)

    if (!ingredients) {
      throw new AppError('Este item não possui ingredientes cadastrados')
    }

    return response.json(ingredients)
  }
}

module.exports = IngredientsController
