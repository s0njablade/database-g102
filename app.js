const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.port || 3004
const students = require('./routes/students_routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/students', students)

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})