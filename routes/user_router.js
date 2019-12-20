const router = require("express").Router();
const Users = require("./user_model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secrets = require("../config/secrets")
const auth = require("../middleware/auth_middleware")

router.post("/register", (req, res) => {
  let user = req.body
  let hash = bcrypt.hashSync(user.password, 14)
  user.password = hash
  
  Users.add(user)
  .then(user => {
    const token = genToken(user)
    res.status(200).json({message: "registered!", user_id: user, token: token})
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
      const token = genToken(user)
      res.status(200).json({message: "logged in!", username: username, token: token})
    } else {
      res.status(401).json({message: "oh shit! invaild credentials!"})
    }
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.get("/users", auth, (req, res) => {
  Users.find()
    .then(users => {
      let usernames = users.map(user => {
        return {
          id: user.id,
          username: user.username,
          name: user.name,
          email: user.email,
          city: user.city,
          avatarURL: user.avatarURL
        }
      })
      res.status(200).json(usernames)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

function genToken(user) {
  const payload = {
    username: user.username
  };

  const options = {
    expiresIn: '1h'
  };

  const token = jwt.sign(payload, secrets.jwtSecret, options);
  console.log(token)
  return token;
}

module.exports = router