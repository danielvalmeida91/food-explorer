exports.up = knex =>
  knex.schema.createTable('ingredients', table => {
    table.increments('id')
    table
      .integer('item_id')
      .references('id')
      .inTable('items')
      .onDelete('CASCADE')
    table.text('name')
    table.timestamp('created_at').default(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('ingredients')
