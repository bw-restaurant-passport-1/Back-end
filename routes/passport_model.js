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
  console.log(restaurantId)
  return db("passports")
  .join("users", "users.id", "=", "passports.user_id")
  .where("passports.restaurant_id", "=", restaurantId)
  .select("notes", "myRating", "name", "avatarURL")
  

}

function findAll() {
  return db("passports")
}

function edit(data, id) {
  return db("passports").where("id", "=", id).update(data)
}

function remove(id) {
  return db("passports").where("id", "=", id).del()
}

module.exports = {
  add,
  findByUserId,
  findByRestaurantId,
  findAll,
  edit,
  remove
}}