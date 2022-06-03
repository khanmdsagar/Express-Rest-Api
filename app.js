const express = require('express')
const router  = require('./app/routes/routes')
const app     = new express()

const rateLimit = require("express-rate-limit")
const helmet    = require("helmet")
const cors      = require("cors")
const xss       = require("xss-clean")
const hpp       = require("hpp")
const expressMongoSanitize = require("express-mongo-sanitize")

app.use(helmet())
app.use(cors())
app.use(xss())
app.use(hpp())
app.use(expressMongoSanitize())

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, //15 minute
    max: 100
})
app.use(limiter)

app.use('/api', router)

app.use('*', (req, res)=>{
    res.status(404).json({"status": "failed", "data": "url not found"})
})

module.exports = app