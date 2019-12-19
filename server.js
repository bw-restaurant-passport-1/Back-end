const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRouter = require("./routes/user_router")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/users", userRouter)

module.exports = server;