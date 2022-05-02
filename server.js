const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./src/routes/routes')
require('dotenv').config()

const app = express();



app.use(cors())
app.use(express.json())
app.use(routes)

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



const db = mongoose.connection
db.on('error', (error) => {
    console.error(error)
})
db.once('open', () => {
    console.log('Connected to database')
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})

