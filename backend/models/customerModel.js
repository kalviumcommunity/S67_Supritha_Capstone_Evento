const mongoose = require('mongoose')

function validatePassword(value) {
    if (value.length < 8) throw new Error('Password must be at least 8 characters long');
    if (!/[A-Za-z]/.test(value)) throw new Error('Password must contain at least one letter');
    if (!/\d/.test(value)) throw new Error('Password must contain at least one number');
    return true;
  }

const customerSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Please enter your name']
    },
    email : {
        type : String,
        match : [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
        unique : [true, 'Email already exists'],
        required : [true, 'Please enter your email id']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
          validator: validatePassword,
          message: props => props.reason.message,
        },
    },
    profilePic : {
        type : String,
        default : ''
    }
})

module.exports = mongoose.model('Customer', customerSchema)