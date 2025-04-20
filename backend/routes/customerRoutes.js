const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Customer = require('../models/customerModel')
const router = express.Router()
require('dotenv').config()

router.post('/signup', async(req, res) => {
    const {userName, email, password, profilePic} = req.body
    if(!userName || !email || !password) 
        return res.status(400).json({message : "Please fill all the required fields!"})
    const existing = await Customer.findOne({ email });
    if (existing) 
        return res.status(409).json({ message: "Email already in use!" });

    try{
        const hashedP = await bcrypt.hash(password, 10)
        const newUser = new Customer({userName, email, password : hashedP, profilePic : profilePic || ''})
        await newUser.save()

        const token = jwt.sign({id : newUser._id, userName : newUser.userName}, process.env.SECRET_KEY, {expiresIn : '1h'})
        res.status(201).set('Authorization', `Bearer ${token}`).json({message : "User registered successfully!", token})
    }
    catch(err){
        res.status(err.status || 500).json({message : err.message || "Error while trying to register. Please try again!"})
    }
})

// router.post('/login', async(req, res) => {   
//     const {email, password} = req.body
//     if(!email || !password)
//         return res.status(400).json({message : "Please fill all the required fields!"})
//     try{
//         const user = await Customer.findOne({email})
//         if(!user)
//             return res.status(404).json({message : "User not found!"})

//         const isValid = await bcrypt.compare(password, user.password)
//         if(!isValid)
//             return res.status(400).json({message : "Invalid password!"})

//         const token = jwt.sign({id : user._id, userName : user.userName}, process.env.SECRET_KEY, {expiresIn : '1h'})
//         res.status(200).set('Authorization', `Bearer ${token}`).json({message : "Login successful!", token})
//     }
//     catch(err){
//         res.status(err.status || 500).json({message : err.message || "Error while trying to login. Please try again!"})
//     }
// })

module.exports = router