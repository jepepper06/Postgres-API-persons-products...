const db = require('../../db')
const pool = db.pool

// INSERT
const createSell = async (person_id,amount) => {
    let response 
    const QuerySQL = `INSERT INTO sell (person_id,amount) VALUES($1,$2,$3) RETURNING *` 
    await pool.query(QuerySQL,[person_id,amount])
        .then(resp => {
            console.log(resp.rows)
            response = resp.rows
        }).catch( e => {
            const error = `[Error in Store sellService]: ${e}`
            console.log(error)
        })

        return response
}


// UPDATE
const updateSell = async (id,person_id,payment,amount) => {
    let response
    const QuerySQL = `UPDATE sell SET person_id = $1,
    , payment = $2, amount = $3 WHERE id = $4`
    await pool.query(QuerySQL,[person_id,payment,amount,id])
        .then(resp => {
            console.log(resp.rows)
            response = resp.rows
        }).catch( e => {
            const error = `[Error in Store SellService]: ${e}`
            console.log(error)
        })
    return response
}


// GET
const listSells = async() => {
    let response 
    const QuerySQL = `SELECT * FROM sell`
    await pool.query(QuerySQL).then(resp =>{
        console.log(resp.rows)
        response = resp.rows
    }).catch( e => {
        const error = `[Error in Store SellService]: ${e}`
        console.log(error)
    })
    return response
}


// GET BY ID
const listSellById = async (id) =>{
    let response
    const QuerySQL = `SELECT * FROM sell WHERE id = $1`
    await pool.query(QuerySQL,[id]).then(resp => {
        console.log(resp.rows)
        response = resp.rows
    }).catch( e =>{
        const error = `[Error in Store SellService]: ${e}`
        console.log(error)
    })
    return response
}


// GET BY PERSON_ID
const listSellsByPerson = async (person_id) => {
    let response 
    const QuerySQL = `SELECT * FROM seel WHERE person_id = $1`
    await pool.query(QuerySQL,[person_id]).then(resp => {
        console.log(resp.rows)
        response = resp.rows
    }).catch( e =>{
        const error = `[Error in Store SellService]: ${e}`
        console.log(error)
    })
    return response
}

// DELETE 
const deleteById = async (id) =>{
    let response
    const QuerySQL = `DELETE FROM SELL WHERE id = $1`
    await pool.query(QuerySQL,[id]).then( resp => {
        console.log(resp.rows)
        response = resp.rows
    }).catch( e => {
        const error = `[Error in Store SellService]: ${e}`
    })
}
// SQL JOINS ON PERSON & ITEM

module.exports = {
    delete: deleteById,
    listById: listSellById,
    listByPerson: listSellsByPerson,
    create: createSell,
    update:updateSell,
    list: listSells
}