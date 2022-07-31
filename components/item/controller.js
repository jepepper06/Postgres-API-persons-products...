const store = require('./store')


// LIST 
async function listItems(){
    await new Promise(async(resolve) =>{
        resolve(await store.list())
    })
}

// GET QUANTITY BY ID
async function getQuantity(id){
    await new Promise(async(resolve,reject) => {
        if(!id){
            reject('No hay ID para buscar')
        }else{
            resolve(await store.getQuantity(id))
        }
    })
}

// UPDATE
async function update(id,product_id,quantity){
    await new Promise(async(resolve,reject) => {
        if(!id || !product_id || !quantity){
            reject('THERE\'S NOT SUFICIENT DATA')
        }else{
            resolve(await store.update(id,product_id,quantity))
        }
    })
}

// GET BY ID
async function getByID(id){
    await new Promise(async(resolve,reject) => {
        if(!id){
            reject('THERE\'S NOT ID')
        }else{
            resolve( await store.listByID(id))
        }
    })
}

// INSERT
async function insert(person_id,sell_id,product_id,quantity){
    await new Promise(async (resolve,reject) =>{
        if(!person_id || !sell_id || !product_id || !quantity){
            reject('THERE\'S NOT DATA SUFICIENT')
        }else{
            resolve(store.insert(person_id,sell_id,product_id,quantity))
        }
    })
}

// LIST BY SELL_ID
async function listBySell(sell_id){
    await new Promise(async(resolve,reject) => {
        if(!sell_id){
            reject('THERE\'S NOT SELL_ID')
        }else{
            resolve(await store.listBySellID(sell_id))
        }
    })
}

module.exports = {
    listBySell,
    listItems,
    update,
    insert,
    getByID,
    getQuantity
}