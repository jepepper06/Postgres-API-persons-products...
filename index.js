const express = require('express')

const app = express()
const server = require('http').Server(app)

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({extended:true}))