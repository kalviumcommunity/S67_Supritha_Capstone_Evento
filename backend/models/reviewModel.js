// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//     review : {
//         type : String, 
//         minLength : 10,
//         maxLength : 200, 
//     },
//     rating : {
//         type : Number, 
//         min : 1, 
//         max : 5,
//         required : true
//     },
//     pics : {
//         type : [String], 
//         default : []
//     },
//     reviewer : {
//         type : mongoose.Schema.Types.ObjectId, 
//         ref: 'Customer', 
//         required: true
//     },
// }, { timestamps : true });

// module.exports = mongoose.model('Review', reviewSchema);