const express = require('express');
const mainRouter = express.Router();
const {userRouter} = require('./user')
mainRouter.use('/user',userRouter)

module.exports = mainRouter