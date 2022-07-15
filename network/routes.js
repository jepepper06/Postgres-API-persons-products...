const express = require('express')
const person = require('../components/person/network')

// MAKING ROUTES AND SETTING MIDDLEWARES
const routes = function(server){
    server.use('/person',person)
}
module.exports = routes