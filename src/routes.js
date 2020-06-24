const express = require('express');
const mainRouter = express.Router();
const {userRouter} = require('./user');
const {authRouter} = require('./auth');

mainRouter.use('/user',userRouter);
mainRouter.use('/auth',authRouter)

module.exports = mainRouter