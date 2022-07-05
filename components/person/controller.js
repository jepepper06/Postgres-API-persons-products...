const { add } = require('./store')
const store = require('./store')
const {list,getById,getByCountry,update} = store

function listPersons(){
    return list()
}

function getPersonById(id){
    return getById(id)
}

function getPersonByCountry(country){
    return getByCountry(country)
}

function updatePerson(id,name,country){
    return update(id,name,country)
}

function addPerson(name,country){
    return add(name,country)
}

module.exports = {
    updatePerson,
    getPersonByCountry,
    listPersons,
    getPersonById,
    addPerson
}