const router = require("express").Router()
const Passport = require("./passport_model")
const auth = require("../middleware/auth_middleware")

router.post("/", auth, (req, res) => {
  Passport.add(req.body)
    .then(passes => {
      res.status(200).json({message: "passport created", passes})
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.get("/", (req, res) => {
  Passport.findAll()
  .then(passes => {
    res.status(200).json(passes)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.get("/user/:id", (req, res) => {
  Passport.findByUserId(req.params.id)
  .then(passes => {
    res.status(200).json(passes)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.get("/restaurant/:id", (req, res) => {
  Passport.findByRestaurantId(req.params.id)
  .then(passes => {
    res.status(200).json(passes)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.put("/:id", auth, (req, res) => {
  Passport.edit(req.body, req.params.id)
  .then(passes => {
    res.status(200).json(passes)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.delete("/:id", auth, (req, res) => {
  Passport.remove(req.params.id)
  .then(passes => {
    res.status(200).json("removed passport id: " + req.params.id)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})


module.exports = router