const controller = require('./controller')
const response = require('../../network/responses')
const express = require('express')
const router = express.Router()

router.get('/person',(req,res) => {
    controller.listPersons()
        .then(personsList => {
            response.success(req,res,personsList,200)
        })
        .catch(e => {
            response.error(req,res,'Unexpected Error',500,e)
        })
})

router.post('/person',(req,res) => {
    controller.addPerson(req.name,req.country)
        .then( addedPerson => {
            response.success(req,res,addedPerson,200)
        }).catch(e => {
            response.error(req,res,'Unexpected Error',500,e)
        }) 
})

router