exports.up = knex =>
  knex.schema.createTable('items_order', table => {
    table.increments('id')
    table
      .integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items')
      .onDelete('CASCADE')
    table
      .integer('order_id')
      .references('id')
      .inTable('orders')
      .onDelete('CASCADE')
    table.decimal('value_unit')
    table.decimal('value_total')
    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('items_order')
