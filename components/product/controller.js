const store = require('./store')

// LIST
async function list(){
    return await new Promise(async (resolve) =>{
        resolve(await store.list())
    })
}

// GET BY ID
async function getById(id){
    return await new Promise(async(resolve,reject)=>{
        if(!id){
            reject('No hay id')
        }else{
            resolve(await store.getById(id))
        }
    })
}

// NAME
async function getByName(name){
    return await new Promise( async(resolve,reject) =>{
        if(!name){
            reject('Not Name in Controller')
        }else{
            resolve( await store.getByName(name))
        }
    })
}

// UPDATE
async function update(id,name,desc,price){
    return await new Promise(async(resolve,reject) =>{
        if(!id || !name || !desc || !price){
            reject('fail to update')
        }else{
            resolve( await store.update(id,name,desc,price))
        }
    })
}

//INSERT
async function insert(name,desc,price){
    return await new Promise(async(resolve,reject) =>{
        if(!name || !desc || !price){
            reject('Not data')
        }else{
            resolve(await store.insert(name,desc,price))
        }
    })
}

// PRICE
async function getPrice(id){
return await new Promise(async(resolve,reject) => {
    if(!id){
        reject('NOT ID TO SEARCH A PRICE')
    }else{
        resolve(await store.price(id))
    }
})

}

module.exports = {
    list,getById,getByName,insert,update,getPrice
}