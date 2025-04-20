const express = require('express')
const connectDB = require('./config/db')
const customerRouter = require('./routes/customerRoutes')
const productRouter = require('./routes/productRoutes')
require('dotenv').config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080

connectDB();

app.get('/', (req, res) => {
    res.send("Welcome to the Home Page")
})

app.use('/customers', customerRouter)
app.use('/products', productRouter)

app.listen(PORT, () => {
    console.log(`The server is successfully running on http://localhost:${PORT}`)
})