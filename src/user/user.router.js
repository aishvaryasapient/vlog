const express = require('express');

const userRouter = express.Router();

userRouter.route('/:id?').get((req,res)=>{
    return res.status(200).send({message:"User List"})
});

module.exports = userRouter;