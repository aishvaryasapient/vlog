const USER = require('./../user.model');

const {hashPassword} = require('./../../../utils/encode-decode');

const createUser = async (req,res,next)=>{
    const body =req.body;
    body.password = await hashPassword(body.password)
    const user  = new USER(body);
    return user.save().then((result)=>{
        return res.status(201).send({
            status:201,
            message:"user created successfully",
            data:result
        })
    }).catch(err=>{
        return next(err)
    })
}
module.exports = [
    createUser
]