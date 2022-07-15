
const db = require('../../db')
const pool = db.pool

// CREATE
const CreateProduct = async(name,description,type) => {
    let response
    await pool.query('INSERT INTO product (product_name,product_desc,product_type) VALUES ($1,$2,$3) RETURNING *',[name,description,type])
        .then(resp =>{
            console.log(resp.rows)
            response = resp.rows
        }).catch(e =>{
            console.log(`[Error in Product Store]: ${e}`);
        })
    return response
}

// UPDATE

const UpdateProduct = async(id,name,desc,type)=> {
    let response 
    const QuerySQL = `UPDATE product SET product_name = $1, product_desc = $2, product_type = $3
    WHERE product_id = $4`
    await pool.query(QuerySQL,[name,desc,type,id])
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
    const QuerySQL = `SELECT * FROM product WHERE product_id = $1`
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

const listProductsByName = async(name) =>{
    let response 
    const QuerySQL = `SELECT * FROM product WHERE product_name = $1`
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

module.exports ={
    list:ListAllProducts,
    insert:CreateProduct,
    getById:listProductById,
    getByName:listProductsByName,
    update:UpdateProduct
}