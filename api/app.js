const express = require('express')
const session = require('express-session')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const volleyball = require('volleyball')
const passport = require('passport')
const dotenv = require("dotenv")
dotenv.config()

const routes = require('./routes')
require('./config/db')
require('./config/passport/auth')
const seed = require('../seed')

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(volleyball) 

app.use(session({secret: process.env.SESSION_KEY, resave: true, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())

app.use("/api", routes)

app.get("/", (req, res) => {
    res.send("funciona")
})

const port = 3001 


app.listen(port, () => {
    console.log(`server on ${port}` )
})













