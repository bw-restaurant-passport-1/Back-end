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

router.post("/login", (req, res) => {
  let {username, password} = req.body

  Users.findBy({username})
  .first()
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({message: "logged in!", username: username})
    } else {
      res.status(401).json({message: "oh shit! invaild credentials!"})
    }
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
      res.status(500).json({message: "server error", error: err})
    })
})

module.exports = router