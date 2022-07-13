// COÑO COMPADRE A VECES QUEDO CON LA CABEZA ATRAS, COMO ES LA VAINA??
const db = require('../../db')
const pool = db.pool

const ListPersons = async () => {
    let respuesta
    await pool
    .query('SELECT name, country FROM person')
    .then(resp =>{
        respuesta = resp.rows
        console.log(resp.rows)
    })
    .catch(err => {
        respuesta = err
        setImmediate(
            
            ()=> {throw err})
    })
    return respuesta
}

const ListPersonsById = async (id) => {
    let respuesta
    await pool
    .query('SELECT name, country FROM person WHERE id = $1',[id])
    .then(resp =>{
        console.log(resp.rows)
        respuesta = resp.rows
    })
    .catch(err => {
        const error = `[Error on Store]: ${err}`
        console.log(error)
    })

    return respuesta
}

const ListPersonsByCountry = async (country) => {
    let respuesta
    await pool
    .query('SELECT name, country FROM person WHERE country = $1',[country])
    .then(resp =>{
        console.log(resp.rows)
        respuesta = resp.rows
    })
    .catch(err => {
        const error = `[Error on Store]: ${err}`
        console.log(error)
    })
    return respuesta
}

const InsertPerson = async (name,country) => {
    let respuesta
    await pool
    .query('INSERT INTO person (name,country) VALUES($1,$2) RETURNING *',[name,country])
    .then(resp =>{
        console.log(resp.rows)
        respuesta = resp.rows
    })
    .catch(err => {
        const error = `[Error on Store]: ${err}`
        console.log(error)
    })
    return respuesta.rows
}

const updatePerson = async (id,name,country) => {
    let respuesta
    await pool
    .query(`UPDATE person  SET name = $1, country = $2
     WHERE id = $3 RETURNING *`,[name,country,id])
     .then(resp =>{
        console.log(resp.rows)
        respuesta = resp.rows
     })
    .catch(err => {
        const error = `[Error on Store]: ${err}`
        console.log(error)
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
