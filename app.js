const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {PORT = 8000} = process.env
const router = require('./routers')

// parse aplication/json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// router
app.use(router)



app.listen(PORT, () => console.log(`server is running in port ${PORT}`))