exports.up = knex =>
  knex.schema.createTable('items', table => {
    table.increments('id')
    table.text('name')
    table.text('description')
    table.decimal('price')
    table.text('picture')
    table.text('category')
    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('items')
