const express = require('express');

const userRouter = express.Router();
const {createUser} = require('./controller');

userRouter.route('/:id?').post(createUser);

module.exports = userRouter;