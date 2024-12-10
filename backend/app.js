const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const app = express()
const connectToDB = require('./db/db')

connectToDB()


app.get('/', (req, res) => {
    res.send('Hello Payel, ami onek ta valobasi')
}); 

module.exports = app;