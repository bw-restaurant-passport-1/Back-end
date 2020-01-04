const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')

const userRouter = require("./routes/user_router")
const restaurantRouter = require("./routes/restaurant_router")
const passportRouter = require("./routes/passport_router")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan("dev"))
server.use("/api/users", userRouter)
server.use("/api/restaurants", restaurantRouter)
server.use("/api/passports", passportRouter)
server.get("/", (req, res) => {
  res.status(200).json({message: "welcome"})
})

module.exports = server;