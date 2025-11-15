const mongoose = require('mongoose')
const usersSchema= mongoose.Schema({
    nombre:{
        type: String,
        required: [true, 'por favor teclea tu nombre']
        
    },
    email:{
        type: String,
        required: [true, 'por favor teclea tu nombre'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'por favor teclea tu nombre']
        
    },
    esAdmin:{
        type: Boolean,
        default: false
    }

})
module.exports = mongoose.model ('User', userSchema)
