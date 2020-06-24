const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const hashPassword = (password)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(12,(err,salt)=>{
            if(err){
                reject(err)
            }
            bcrypt.hash(password,salt,(err,hash)=>{
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}
const verifyPassword = (passwordAttempted,hashedPassword)=>{
    return bcrypt.compare(passwordAttempted,hashedPassword)    
}
// exports.hashPassword = hashPassword;
const verifyRole = (userRole,allowedRoles)=>{
    if(typeof allowedRoles === 'string'){
        allowedRoles = [allowedRoles]
    }
    if(allowedRoles.contains(userRole)){
        return res.status(401).json({
            status:401,
            message:"User is not authorized for this operation"
        })
    }
}

const createToken = (user)=>{
    return jwt.sign({
        sub: user._id,
        email:user.email,
        role:user.role,
        iss:'api.vblog',
        aud:'api.vblog'
    },
    process.env.JWT_SECRET,
    {algorithm:'HS256',expiresIn:'1h'})
}
module.exports = {
    hashPassword,
    verifyPassword,
    verifyRole,
    createToken
}