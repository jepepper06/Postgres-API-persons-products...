const controller = require('./controller')
const response = require('../../network/responses')
const express = require('express')
const router = express.Router()

// MAKING REQUEST AND SENDING RESPONSE FROM PRODUCT ENTITY

// GETING ALL
router.get('/',(req,res) => {
    controller.list()
        .then( listOfProducts => {
            response.success(req,res,listOfProducts,200)
        }).catch( e => {
            response.error(req,res,'Unexpected Error', 500, e)
        })
})
// POSTING A PRODUCT
router.post('/',(req,res) => {
    controller.insert(req.body.name,req.body.desc,req.body.price)
        .then( insertedProduct => {
            response.success(req,res,insertedProduct,200)
        }).catch( e => {
            response.error(req,res,'Unexpected Error', 500, e)
        })
})

// UPDATE A PRODUCT
router.patch('/:id',(req,res) => {
    controller.update(req.params.id,req.body.name,req.body.desc,req.body.price)
        .then( updatedProduct => {
            response.success(req,res,updatedProduct,200)
        }).catch( e => {
            response.error(req,res,'Unexpected Error',500,e)
        })
})

// GETING A PRODUCT BY ID
router.get('/:id',(req,res) => {
    controller.getById(req.params.id)
        .then( product => {
            response.success(req,res,product,200)
        }).catch( e => {
            response.error(req,res,'Unexpected Error', 500, e)
        })
})

// GETTING A PRODUCT BY NAME
router.get('/name/:name',(req,res) => {
    controller.getByName(req.params.name)
        .then( product => {
            response.success(req,res,product,200)
        }).catch( e => {
            response.error(req,res,'Unexpected Error', 500, e)
        })
})

// GETTING PRICE
router.get('/price/:id',(req,res) =>{
    controller.getPrice(req.params['id'])
        .then(price => {
            response.success(req,res,price,200)
        }).catch( e => {
            response.error(req,res,'Unexpected Error',500,e)
        })
})
module.exports = router