const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class OrdersController {
  async create(request, response) {
    const { value, status } = request.query
    const { items_order } = request.body
    const user_id = request.user.id

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
            const value_total = price * item.quantity
            return {
              ...item,
              order_id: orderId,
              value_unit: price,
              value_total
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
    const user_id = request.user.id

    const orders = await knex('orders').where({ user_id })
    // const ordersId = orders.map(({ id, user_id }) => ({ id, user_id }))

    const ordersWithItems = await Promise.all(
      orders.map(async order => {
        const items = await knex('items_order')
          .select(
            'item_id',
            'quantity',
            'value_unit',
            'value_total',
            'updated_at'
          )
          .where('order_id', order.id)
        const itemsWithNames = await Promise.all(
          items.map(async item => {
            const itemData = await knex('items')
              .select('name')
              .where('id', item.item_id)
              .first()
            return { ...item, name: itemData.name }
          })
        )
        return { ...order, items: itemsWithNames }
      })
    )

    return response.json({ ordersWithItems })
  }
}

module.exports = OrdersController
