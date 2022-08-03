const controller = require('./controller')
const response = require('../../network/responses')
const express = require('express')
const router = express.Router()

// LITS STOCK
router.get('/',(req,res) => {
    controller.list().then( listOfStocks =>{
        response.success(req,res,listOfStocks,200)
    }).catch( e => {
        response.error(req,res,"Unexpected Error",500,e)
    })
})
// INSERTING A NEW STOCK
router.post('/',(req,res) => {
    controller.insert(req.body.productID,req.body.stock).then( insertedStock =>{
        response.success(req,res,insertedStock,200)
    }).catch( e => {
        response.error(req,res,"Unexpected Error",500,e)
    })
})

// UPDATING A STOCK
router.patch('/:id',(req,res) => {
    controller.update(req.params.id,req.body.stock)
    .then( updatedStock =>{
        response.success(req,res,updatedStock,200)
    }).catch( e => {
        response.error(req,res,"Unexpected Error",500,e)
    })
})

// GET A STOCK BY ID
router.get('/:id',(req,res) => {
    controller.getByID(req.params.id)
    .then( stockByID =>{
        response.success(req,res,stockByID,200)
    }).catch( e => {
        response.error(req,res,"Unexpected Error",500,e)
    })
})

module.exports = router

