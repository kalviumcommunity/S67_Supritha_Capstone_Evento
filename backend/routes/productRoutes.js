const express = require('express')
const Product = require('../models/productModel')
const router = express.Router()

router.get('/', async(req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json({products})
    }
    catch(err){
        res.status(err.status || 500).json({message : err.message || "Error while loading the products"})
    }
})

module.exports = router