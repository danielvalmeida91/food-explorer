const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUsers')
const createDishes = require('./createDishes')
const createOrders = require('./createOrders')

async function migrationsRun() {
  const schemas = [createUsers, createDishes, createOrders].join(';')

  sqliteConnection()
    .then(database => database.exec(schemas))
    .catch(error => console.log(error))
}

module.exports = migrationsRun
