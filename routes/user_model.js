const db = require("../data/dbConfig");

function add(user) {
  return db("users").insert(user)
}

function edit(data, id) {
  return db("users").where("id", "=", id).update(data)
}

function remove(id) {
  return db("users").where("id", "=", id).del()
}

function find() {
  return db("users")
}

function findBy(filter) {
  return db("users").where(filter)
}

module.exports = {
  add,
  find,
  findBy,
  edit,
  remove
}