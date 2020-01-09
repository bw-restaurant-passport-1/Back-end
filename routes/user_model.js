const db = require("../data/dbConfig");

function remove(id) {
  return db("users").where("id", "=", id).del()
}

function find() {
  return db("users")
}

function findBy(filter) {
  return db("users").where(filter).first()
}
async function add(user) {
	const [ id ] = await db('users').insert(user)

	return findBy({id})
}

function edit(data, id) {
  return db("users").where("id", "=", id).update(data)
}

module.exports = {
  add,
  find,
  findBy,
  edit,
  remove
}