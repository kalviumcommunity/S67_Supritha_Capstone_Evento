const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        min : 0,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    image : {
        type : [String],
        default : [],
        required : true
    },
    reviews : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Review'
    }]
})

module.exports = mongoose.model('Product', productSchema)