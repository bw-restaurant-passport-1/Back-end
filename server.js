const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')

const userRouter = require("./routes/user_router")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan("dev"))
server.use("/api/users", userRouter)
server.get("/", (req, res) => {
  res.status(200).json({message: "welcome"})
})

module.exports = server;