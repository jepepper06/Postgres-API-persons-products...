const express = require('express')
const person = require('../components/person/network')
const product = require('../components/product/network')
const stock = require('../components/stock/network')
// MAKING ROUTES AND SETTING MIDDLEWARES
const routes = function(server){
    server.use('/person',person)
    server.use('/product',product)
    server.use('/stock',stock)
}
module.exports = routes