const db = require("../data/dbConfig");

function add(user) {
  return db("users").insert(user)
}

function find() {
  return db("users")
}

module.exports = {
  add,
  find
}