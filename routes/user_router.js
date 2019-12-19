const router = require("express").Router();
const Users = require("./user_model")
const bcrypt = require("bcryptjs")

router.post("/register", (req, res) => {
  let user = req.body
  let hash = bcrypt.hashSync(user.password, 12)
  user.password = hash

  Users.add(user)
  .then(user => {
    res.status(200).json({message: "registered!", user: user})
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.get("/users", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({error: err})
    })
})

module.exports = router