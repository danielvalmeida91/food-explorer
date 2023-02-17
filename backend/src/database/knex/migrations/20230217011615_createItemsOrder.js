exports.up = knex =>
  knex.schema.createTable('items_order', table => {
    table.increments('id')
    table
      .integer('dishe_id')
      .notNullable()
      .references('id')
      .inTable('dishes')
      .onDelete('CASCADE')
    table.integer('qtd')
    table
      .integer('order_id')
      .references('id')
      .inTable('orders')
      .onDelete('CASCADE')
    table.text('status')
    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('items_order')
