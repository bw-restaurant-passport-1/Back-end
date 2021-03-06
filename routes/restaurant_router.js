const router = require("express").Router();
const Restaurants = require("./restaurant_model")
const auth = require("../middleware/auth_middleware")

router.post("/", auth, (req, res) => {
  Restaurants.add(req.body)
  .then(restaurant => {
    res.status(200).json({message: "new restaurant added", restaurant_id: restaurant})
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.put("/:id", auth, (req, res) => {
  Restaurants.edit(req.body, req.params.id)
  .then(restaurant => {
    res.status(200).json({message: "restaurant updated"})
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

router.get("/", (req, res) => {
  Restaurants.find()
    .then(restaurants => {
      res.status(200).json(restaurants)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.get("/:id", (req, res) => {
  const {id} = req.params
  Restaurants.findBy({id})
    .then(restaurants => {
      res.status(200).json(restaurants)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.delete("/:id", auth, (req, res) => {
  Restaurants.remove(req.params.id)
  .then(restaurant => {
    res.status(200).json("removed restaurant id: " + req.params.id)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error: err})
  })
})

module.exports = router