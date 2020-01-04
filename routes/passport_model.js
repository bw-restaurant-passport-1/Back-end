{const db = require("../data/dbConfig")

function add(data) {
  return db("passports").insert(data)
}

function findByUser(userId) {
  return db("passports").where("user_id", "=", userId)
}

function findByRestaurant(restaurantId) {
  return db("passports").where("restaurant_id", "=", restaurantId)
}

function findAll() {
  return db("passports")
}

module.exports = {
  add,
  findByUser,
  findByRestaurant,
  findAll
}}