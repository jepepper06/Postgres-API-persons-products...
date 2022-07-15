const store = require('./store')

async function list(){
    return await new Promise(async (resolve) =>{
        resolve(await store.list())
    })
}
async function getById(id){
    return await new Promise(async(resolve,reject)=>{
        if(!id){
            reject('No hay id')
        }else{
            resolve(await store.getById(id))
        }
    })
}

async function getByName(name){
    return await new Promise( async(resolve,reject) =>{
        if(!name){
            reject('Not Name in Controller')
        }else{
            resolve( await store.getByName(name))
        }
    })
}

async function update(id,name,desc,type){
    return await new Promise(async(resolve,reject) =>{
        if(!id || !name || desc || type){
            reject('fail to update')
        }else{
            resolve( await store.update(id,name,desc,type))
        }
    })
}

async function insert(name,desc,type){
    return await new Promise(async(resolve,reject) =>{
        if(!name || !desc ||!type){
            reject('Not data')
        }else{
            resolve(await store.update(name,desc,type))
        }
    })
}

module.exports = {
    list,getById,getByName,insert,update
}