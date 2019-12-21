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

function edit(data, id) {
  return db("restaurants").where("id", "=", id).update(data)
}

module.exports = {
  add,
  find,
  findBy,
  edit
}