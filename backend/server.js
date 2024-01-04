const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config();

const app = express()

const port = 5000

// connect to the BD
connectDB();

// Middleware for allow json data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/post', require('./routes/post.routes'))

app.listen(port, () => console.log(`Server started on port: http://localhost:${port}`))