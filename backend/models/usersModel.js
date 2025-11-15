const mongoose = require('mongoose')
const usersSchema= mongoose.Schema({
    nombre:{
        type: string,
        required: [true, 'por favor teclea tu nombre']
        
    },
    email:{
        type: string,
        required: [true, 'por favor teclea tu nombre'],
        unique: true
    },
    password:{
        type: string,
        required: [true, 'por favor teclea tu nombre']
        
    },
    esAdmin:{
        type: boolean,
        default: false
    }

})
module.exports = mongoose.model ('user', userschema)