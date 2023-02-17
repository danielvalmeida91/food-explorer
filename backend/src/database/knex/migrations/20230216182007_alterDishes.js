exports.up = knex =>
  knex.schema.alterTable('dishes', table => {
    table.dropColumn('ingredients')
    table.dropColumn('category')
  })

exports.down = knex => knex.schema.dropTable('dishes')
