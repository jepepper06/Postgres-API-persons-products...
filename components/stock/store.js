const {pool} = require('../../db')

// CREATE 


// UPDATE
const updateSotck = async (id,stock) => {
    let response 
    const QuerySQL = `UPDATE stock SET stock = $1 WHERE id = $2`
    await pool.query(QuerySQL,[stock,id])
        .then(resp => {
            console.log(resp.rows)
            response = resp.rows
        }).catch(e => {
            const error = `[Error in Stock]: ${e}`
            console.log(error)
        })
        return response
}

// LIST BY PRODUCT_ID
const listStockById = async (id) => {
    let response 
    const QuerySQL = `SELECT * FROM stock WHERE id = $1`
    await pool.query(QuerySQL,[id])
        .then(resp => {
            console.log(resp.rows)
            response = resp.rows
        }).catch(e => {
            const error = `[Error in Stock]: ${e}`
            console.log(error)
        })
        return response
}

// LIST 
const listStock = async () => {
    let response 
    const QuerySQL = `SELECT * FROM stock`
    await pool.query(QuerySQL)
        .then(resp => {
            console.log(resp.rows)
            response = resp.rows
        }).catch(e => {
            const error = `[Error in Stock]: ${e}`
            console.log(error)
        })
        return response
}

// INSERT
const insertStock = async (product_id,stock) => {
    let response
    const QuerySQL = `INSERT INTO stock (product_id,stock) VALUES ($1,$2) RETURNING *`

    await pool.query(QuerySQL,[product_id,stock])
        .then(resp =>{
            console.log(resp.rows)
            response = resp.rows
        }).catch(e => {
            const error = `[Error in Stock]: ${e}`
            console.log(error)
        })
        return response
}
module.exports = {
    insert: insertStock,
    list: listStock,
    getByID: listStockById,
    update: updateSotck
}