const express = require('express')
const person = require('../components/person/network')
const product = require('../components/product/network')

// MAKING ROUTES AND SETTING MIDDLEWARES
const routes = function(server){
    server.use('/person',person)
    server.use('/product',product)
}
module.exports = routes