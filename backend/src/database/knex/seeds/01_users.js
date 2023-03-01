exports.seed = async function (knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      name: 'admin',
      email: 'admin',
      password: '$2a$08$jKuZVOnQMHvbYhZ8o8kL1ew1dWFzhZPjAv5fyFYO3SX06u0hlQ8HO',
      status: 'admin'
    },
    {
      name: 'daniel',
      email: 'daniel@email.com',
      password: '$2a$08$hoedaOyiMphcTxAHjK.HaOkY2UkLGqis37yuipiaSQzXVn6cd7a0W',
      status: 'user'
    }
  ])
}
