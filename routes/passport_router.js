const router = require("express").Router()
const Passport = require("./passport_model")

router.post("/", (req, res) => {
  Passport.add(req.body)
    .then(passes => {
      res.status(200).json({message: "passport created", passes})
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.get("/", (req, res) => {
  Passsport.find()
  .then(passes => {
    res.status(200).json(passes)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.get("/user/:id", (req, res) => {
  Passsport.findByUserId(req.id)
  .then(passes => {
    res.status(200).json(passes)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})


module.exports = router