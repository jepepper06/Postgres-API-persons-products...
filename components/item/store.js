const { pool } = require("../../db")

// UPDATE
const updateItem = async (id,person_id,sell_id,product_id,quantity) => {
    let response
    const QuerSQL = `UPDATE item SET person_id = $1,
                    sell_id = $2, product_id = $3, quantity = $4 WHERE id = $5`
    await pool.query(QuerSQL,[person_id,sell_id,product_id,quantity,id])
        .then(resp => {
            console.log(resp.rows)
            response = resp.rows
        }).catch(e =>{
            const error = `[Error in StoreItem]: ${e}`
            console.log(error)
        })
    return response
}
// INSERT 
const insertItem = async (person_id,sell_id,product_id,quantity) => {
    let response
    const QuerSQL =`INSERT INTO item (person_id,sell_id,product_id,quantity) VALUES ($1,$2,$3,$4)`
    await pool.query(QuerSQL,[person_id,sell_id,product_id])
        .then(resp =>{
            console.log(resp.rows)
            response = resp.rows
        }).catch(e => {
            const error = `[Error in StoreItem]: ${e}`
            console.log(error)
        }) 
    return response
}
// LIST
const listItems = async () => {
    let response 
    const QuerySQL = `SELECT * FROM item`
    await pool.query(QuerySQL).then( resp => {
        console.log(resp.rows)
        response = resp.rows
    }).catch(e =>{
        const error = `[Error in ItemStore]: ${e}`
        console.log(error)
    })
    return response
}

// LIST BY ID
const getItemById = async (id) => {
    let response
    const QuerySQL = `SELECT * FROM item WHERE id = $1`
    await pool.query(QuerySQL,[id]).then( resp => {
        console.log(resp.rows)
        response = resp.rows
    }).catch(e => {
        const error = `[Error in ItemStore]: ${e}`
        console.log(error)
    })
    return response
}

// LIST BY SELL_ID 
const getBySellID = async (sell_id) => {
    let response 
    const QuerSQL = `SELECT * FROM item WHERE sell_id = $1`
    await pool.query(QuerSQL,[sell_id]).then(resp => {
        console.log(resp.rows)
        response = resp.rows
    }).catch(e => {
        const error = `[Error in ItemStore]: ${e}`
        console.log(error)
    })
    return response
}
// GET ITEM QUANTITY BY ID
const getItemQuantityByID = async (id) => {
    let response
    const QuerSQL = `SELECT quantity FROM item WHERE id = $1`
    await pool.query(QuerSQL,[id])
        .then( resp => {
            console.log(resp.rows)
            response = resp.rows.map( x => {
                x.quantity}
                )
        }).catch( e => {
            const error = `[Error in ItemStore]: ${e}`
            console.log(error)
        })
        return response
}

module.exports= {
    listBySellID: getBySellID,
    listByID: getItemById,
    list: listItems,
    insert:insertItem,
    update:updateItem,
    getQuantity:getItemQuantityByID,
}