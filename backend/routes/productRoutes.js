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

router.put('/:id', async(req, res) => {
    try{
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({updated})
    }
    catch(err){
        res.status(err.status || 500).json({message : err.message || "Error while updating the product(s)"})
    }
})

module.exports = router