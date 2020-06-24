const USER = require('./../../user/user.model');
const {verifyPassword,createToken} = require('./../../../utils/encode-decode');
const jwtDecode = require('jwt-decode');
const generateToken = async (req,res,next)=>{
    const {email,password} = req.body;
    const user = await USER.findOne({email}).lean();
    if(!user){
        return res.status(403).json({
            message:'Wrong email or password'
        })
    }
    
    const passwordValid = await verifyPassword(password,user.password);
    if(passwordValid){
        const token = createToken(user);
        const expiresAt = jwtDecode(token).exp;
        return res.status(200).json({
            message: 'Authentication successful!',
            token,
            user:{...rest},
            expiresAt
          });
    }
    return res.status(403).json({
        message:'Something went wrong'
    })
}

module.exports = [generateToken]