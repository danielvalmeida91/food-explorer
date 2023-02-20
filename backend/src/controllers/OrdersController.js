const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class OrdersController {
  async create(request, response) {
    const { value, status } = request.query
    const { items_order } = request.body
    const { user_id } = request.params

    const order_id = await knex('orders').insert({
      user_id,
      value,
      status
    })

    const itemQueries = items_order.map(item => {
      const { item_id } = item

      return knex('items')
        .where('id', item_id)
        .then(rows => {
          if (rows.length > 0) {
            const { price } = rows[0]
            const orderId = order_id[0]
            const value_total = price * item.qtd
            return {
              ...item,
              order_id: orderId,
              value_unit: price,
              value_total,
              status: 'OK'
            }
          } else {
            throw new AppError('Item não encontrado!')
          }
        })
    })

    Promise.all(itemQueries)
      .then(items => {
        return knex('items_order').insert(items)
      })
      .catch(error => {
        console.log(error)
      })

    return response.json({ message: 'Pedido registrado com sucesso!' })
  }

  async show(request, response) {
    const { order_id } = request.params

    const order = await knex('items_order').where({ order_id })

    return response.json(order)
  }
}

module.exports = OrdersController
