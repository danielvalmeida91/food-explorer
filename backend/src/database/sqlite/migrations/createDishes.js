const createDishes = `
CREATE TABLE IF NOT EXISTS dishes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  picture VARCHAR,
  ingredients VARCHAR,
  price DECIMAL NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

module.exports = createDishes
