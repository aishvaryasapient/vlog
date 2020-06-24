const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ROLES} = require('./../../utils/constants');
const schemaOption = {
    timeStamps:true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true,
        getters:true
    }
};

const userSchema = new Schema({
    name:{
        type: String,
        required:true,
        trim: true
    },
    email:{
        type: String,
        unique:'Email is already exists',
        required: true,
        trim: true
    },
    password:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        unique:'Phone is already exists'
    },
    role:{type:String,enum:ROLES}
},schemaOption)

module.exports = mongoose.model('user',userSchema)