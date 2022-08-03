const store = require('./store')

// GET BY ID
async function getByID(id){
    return await new Promise(async(resolve,reject) => {
        if(!id){
            reject('Hace Falta ID para buscar')
        }else{
            resolve( await store.getByID(id))
        }
    })
}

// LIST
async function list(){
    return await new Promise(async(resolve,reject) =>{
        try{
            resolve( await store.list())
        }catch(e){
            reject(`[Error in StoreCOntroller]: ${e}`)
        }
    })
}

// UPDATE
async function update(id,stock){
    return await new Promise(async(resolve,reject) => {
        if(!id || !stock){
            reject('Insuficient data to update')
        }else{
            resolve(await store.update(id,stock))
        }
    })
}

// INSERT
async function insert(stock){
    return await new Promise((resolve,reject) => {
        if(!stock){
            reject("Insuficient data to create new stock")
        }
    })
}

module.exports = {
    insert,
    update,
    getByID,
    list,
}
