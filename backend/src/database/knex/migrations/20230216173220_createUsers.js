exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('name').notNull()
    table.text('email').notNull()
    table.text('password').notNull()
    table.text('status').default('user')
    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('users')
