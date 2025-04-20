const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.db_url

const connectDB = async() => {
    try{
        await mongoose.connect(url)
        console.log("Connected to database successfully!")
    }
    catch(err){
        console.error("Error", err.message)
    }
}

module.exports = connectDB;