
const db = require('../../db')
const pool = db.pool

// CREATE
const CreateProduct = async (name,desc,price) => {
    let response
    await pool.query('INSERT INTO product (name,desc,price) VALUES ($1,$2,$3) RETURNING *',[name,desc,price])
        .then(resp =>{
            console.log(resp.rows)
            response = resp.rows
        }).catch(e =>{
            console.log(`[Error in Product Store]: ${e}`)
        })
    return response
}

// UPDATE

const UpdateProduct = async (id,name,desc,price)=> {
    let response 
    const QuerySQL = `UPDATE product SET name = $1, desc = $2, type = $3, price = $4
    WHERE id = $5`
    await pool.query(QuerySQL,[name,desc,type,price,id])
        .then(resp =>{
            console.log(resp.rows)
            response = resp.rows
        }).catch(e => {
            const error = `[Error in Product Store]: ${e}`
            console.log(error)
        })
        return response
}
// DELETE

// GET ALL
const ListAllProducts = async () =>{
    let response
    const QuerySQL = `SELECT * FROM product`
    await pool.query(QuerySQL)
        .then(resp =>{
            console.log(resp.rows)
            response = resp.rows
        }).catch(e =>{
            const error = `[Error in Product Store]: ${e}`
            console.log(error)
        })
    return response
}
// GET BY ID

const listProductById = async (id) =>{
    let response 
    const QuerySQL = `SELECT * FROM product WHERE id = $1`
    await pool.query(QuerySQL,[id])
        .then( resp =>{
            console.log(resp.rows)
            response = resp.rows
        }).catch(e =>{
            const error = `[Error in Product Store]: ${e}`
            console.log(error)        
        })
    return response
}
// GET BY NAME 

const listProductsByName = async (name) =>{
    let response 
    const QuerySQL = `SELECT * FROM product WHERE name = $1`
    await pool.query(QuerySQL,[name])
        .then(resp =>{
            console.log(resp.rows)
            response = resp.rows
        }).catch( e =>{
            const error = `[Error in Product Store]: ${e}`
            console.log(error)
        })
    return response
}

CreateProduct('Hola','desc',6.7);

module.exports ={
    list:ListAllProducts,
    insert:CreateProduct,
    getById:listProductById,
    getByName:listProductsByName,
    update:UpdateProduct
}