const controller = require('./controller')
const response = require('../../network/responses')
const express = require('express')
const router = express.Router()


// MANAGING REQUEST AND MAKING RESPONSES

//GETTING ALL
router.get('/',(req,res) => {
    controller.listPersons()
        .then(personsList => {
            response.success(req,res,personsList,200)
        })
        .catch(e => {
            response.error(req,res,'Unexpected Error',500,e)
        })
})


// POSTING A PERSON
router.post('/',(req,res) => {
    controller.addPerson(req.body.name,req.body.country)
        .then( addedPerson => {
            response.success(req,res,addedPerson,200)
        }).catch(e => {
            response.error(req,res,'Unexpected Error',500,e)
        }) 
})


//UPDATE A PERSON
router.patch('/:id',(req,res) => {
    controller.updatePerson(req.params['id'],req.body.name,req.body.country)
        .then( updatedPerson => {
            response.success(req,res,updatedPerson,200)
        }).catch(e => {
            response.error(req,res,'Unexpected Error',500,e)
        })
})


// GET A PERSON BY COUNTRY
router.get('/:country',(req,res) => {
    controller.getPersonByCountry(req.params['country'])
        .then( listOfPersons => {
            response.success(req,res,listOfPersons,200)
        }).catch( e => {
            response.error(req,res,'Unexpected Error', 500, e)
        })
})


// GET A PERSON BY ID
router.get('/id/:id', (req,res) => {
    controller.getPersonById(req.params['id'])
        .then( person => {
            response.success(req,res,person,200)
        }).catch( e => {
            response.error(req,res,'Unexpeced Error',500,e)
        })
})

module.exports  = router