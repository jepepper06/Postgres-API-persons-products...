// COÑO COMPADRE A VECES QUEDO CON LA CABEZA ATRAS, COMO ES LA VAINA??
const db = require('../../db')
const pool = db.pool

const ListPersons = async () => {
    const respuesta = await pool
    .query('SELECT name, country FROM person')
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
    return respuesta.rows
}

const ListPersonsById = async (id) => {
    const respuesta = await pool
    .query('SELECT name, country FROM person WHERE id = $1',[id])
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
    return respuesta.rows
}

const ListPersonsByCountry = async (country) => {
    const respuesta = await pool
    .query('SELECT name, country FROM person WHERE country = $1',[country])
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
    return respuesta.rows
}

const InsertPerson = async (name,country) => {
    const respuesta = await pool
    .query('INSERT INTO person (name,country) VALUES($1,$2) RETURNING *',[name,country])
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
    return respuesta.rows
}

const updatePerson = async (id,name,country) => {
    const respuesta = await pool
    .query(`UPDATE person  SET name = $1, country = $2
     WHERE id = $3 RETURNING *`,[name,country,id])
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
    return respuesta.rows
}



module.exports =  {
    list:ListPersons,
    update: updatePerson,
    add:InsertPerson,
    getById:ListPersonsById,
    getByCountry:ListPersonsByCountry
}
