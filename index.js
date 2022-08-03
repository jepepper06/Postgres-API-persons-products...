const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)
const db = require('./db')
const pool = db.pool
const router = require('./network/routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

pool.connect()
router(app)
let PORT = 3000

server.listen(PORT, () => {
    console.log(`SERVER CONNECTED TO PORT ${PORT}`)
})