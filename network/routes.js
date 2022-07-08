const express = require('express')
const person = require('../components/person/network')
const routes = function(server){
    server.use('/person',person)
}
module.exports = routes