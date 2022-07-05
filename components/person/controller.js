const store = require('./store')
const {list,getById,getByCountry,update,add} = store

async function listPersons(){
    return await list()
}

async function getPersonById(id){
    return await new Promise(async (resolve,reject) =>{
        if(!id){
            console.log('[personController]: No hay id en getPersonById')
            reject('Faltan datos de entrada')
        }
        else{
            resolve( await getById(id))
        }
    })
    
}

 async function getPersonByCountry(country){
    return await new Promise(async (resolve,reject) =>{
        if(!country){
            console.log('[personController]: No hay country en getPersonByCountry')
            reject('Faltan datos de entrada')
        }
        else{
            resolve( await getByCountry(country))
        }
    })
}
 
async function updatePerson(id,name,country){
    return await new Promise(async (resolve,reject) =>{
        if(!id || !name || !country){
            console.log('[personController]: No hay datos suficientes en updatePerson')
            reject('Faltan datos de entrada')
        }
        else{
            resolve(await update(id,name,country))
        }
    })
}

async function addPerson(name,country){
    return await new Promise(async (resolve,reject) =>{
        if(!name || !country){
            console.log('[personController]: No hay id en getPersonById')
            reject('Faltan datos de entrada')
        }
        else{
            resolve (await add(name,country))
        }
    })
}

module.exports = {
    updatePerson,
    getPersonByCountry,
    listPersons,
    getPersonById,
    addPerson
}