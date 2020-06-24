const express = require('express');

const authRouter = express.Router();
const {generateToken} = require('./controller');

authRouter.route('/:id?').post(generateToken);

module.exports = authRouter;