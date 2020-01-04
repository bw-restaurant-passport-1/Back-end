{const db = require("../data/dbConfig")

function add(data) {
  return db("passport").insert(data)
}

function findByUser(userId) {
  return db("passport").where("user_id", "=", userId)
}

function findByRestaurant(restaurantId) {
  return db("passport").where("restaurant_id", "=", restaurantId)
}

function findAll() {
  return db("passport")
}

module.exports {
  add,
  findByUser,
  findByRestaurant,
  findAll
}}