const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const cors = require("cors")
const port = 5000
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// app.post("/abc", async function (req) {
//     const { name, email, password } = req.body
//     console.log(req.body, 'dfghjk');
// })

app.use(errorHandler)

app.listen(port, () => {
    console.log('server started..', + port)
})