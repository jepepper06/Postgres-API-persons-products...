const store = require('./store')
const {list,getById,getByCountry,update,add} = store


// CREATEING CONTROLLER FOR THE DATABASE

// GETTING ALL FROM STORE
async function listPersons(){
    return new Promise(async (resolve) => {
        resolve( await list())
    })

}


// GETTING A PERSON FROM STORE BY ID
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


//GETTTING A PERSON FROM STRE BY COUNTRY
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
 

// UPDATING A PERSON FROM STORE
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


// ADDING A PERSON FROM STORE
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