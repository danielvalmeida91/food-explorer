const createOrders = `
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id VARCHAR,
  dishe_id VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

module.exports = createOrders
