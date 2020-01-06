{const db = require("../data/dbConfig")

function add(data) {
  return db("passports").insert(data)
}

function findByUserId(userId) {
  console.log(userId)
  return db("restaurants")
  .join("passports", "passports.restaurant_id", "=", "restaurants.id")
  .where("passports.user_id", "=", userId)
}

function findByRestaurantId(restaurantId) {
  return db("passports").where("restaurant_id", "=", restaurantId)
}

function findAll() {
  return db("passports")
}

module.exports = {
  add,
  findByUserId,
  findByRestaurantId,
  findAll
}}