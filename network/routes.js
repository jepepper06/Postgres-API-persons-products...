const express = require('express')
const person = require('../components/person/network')
const routes = (server) => {
    server.use('/person',person)
}
module.exports = routes