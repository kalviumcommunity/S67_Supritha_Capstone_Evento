const mongoose = require('mongoose')

function validatePassword(value) {
    if (value.length < 8) throw new Error('Password must be at least 8 characters long');
    if (!/[A-Za-z]/.test(value)) throw new Error('Password must contain at least one letter');
    if (!/\d/.test(value)) throw new Error('Password must contain at least one number');
    return true;
  }

const vendorSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : [true, 'Please enter your name'],
    },
    shopName : {
        type : String,
        required : [true, 'Please enter your shop name'],
        unique : true
    },
    category : {
        type : String,
        enum : ['Bakery', 'Restaurant', 'Cafe', 'Electricals', 'Decor', 'Florist'],
        required : true
    },
    phoneNumber : {
        type : String,
        unique : true,
        match : [/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number"],
        required : true
    },
    location : {
        address: { type: String, required: true }, city: { type: String, required: true },
        pincode: { type: String, required: true, match: [/^\d{6}$/, 'Enter a valid 6-digit pincode']}
    },
    email : {
        type : String,
        match : [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
        unique : true,
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
    },
    Item : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }]
})

module.exports = mongoose.model('Vendor', vendorSchema)