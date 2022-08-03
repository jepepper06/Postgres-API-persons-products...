const store = require('./store')

// DELETE
async function deleteSell(id){
    return await new Promise(async(resolve,reject) => {
        if(!id){
            reject("There\'s no ID")
        }else{
            resolve( await store.delete(id))
        }
    })
}

// GET BY ID
async function getByID(id){
    return await new Promise(async(resolve,reject) => {
        if(!id){
            reject("There\'s no ID")
        }else{
            resolve(await store.listById(id))
        }
    })
}

// GET BY PERSON_ID
async function getByPerson(person_id){
    return await new new Promise(async(resolve, reject) => {
        if(!person_id){
            reject("There\'s not PERSON_ID")
        }else{
            resolve(await store.listByPerson(person_id))
        }
    })
}

// INSERT
async function insert(person_id,amount){
    return await new Promise(async(resolve,reject) => {
        if(!person_id || !amount){
            reject("Insuficient Data to do a Sell")
        }else{
            resolve( await store.create(person_id,amount))
        }
    })
}

// UPDATE
async function update(id,person_id,payment,amount){
    return await new Promise(async(resolve,reject) =>{
        if(!id|| !person_id || !payment || !amount){
            reject("We couldn\'t modify the sell")
        }else{
            resolve( await store.update(id,person_id,payment,amount))
        }
    })
}

// LIST
async function list(){
    return await new Promise(async(resolve,reject) =>{
        try{
            resolve(await store.list())
        }catch(e){
            reject(`[There was an Error in Controller]: ${e}`)
        }
    })
}
module.exports = {
    list,
    update,
    insert,
    getByPerson,
    getByID,
    deleteSell
}