const db = require("../data/dbConfig");

function add(data) {
  return db("restaurants").insert(data)
}

function find() {
  return db("restaurants")
}

function findBy(filter) {
  return db("restaurants").where(filter)
}

module.exports = {
  add,
  find,
  findBy
}