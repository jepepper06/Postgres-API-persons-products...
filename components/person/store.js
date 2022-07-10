// COÑO COMPADRE A VECES QUEDO CON LA CABEZA ATRAS, COMO ES LA VAINA??
const db = require('../../db')
const pool = db.pool

const ListPersons = async () => {
    await pool
    .query('SELECT name, country FROM person')
    .then(resp => {
        console.log('[Persons table]:', resp.rows)
        return resp.rows
    })
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
}

const ListPersonsById = async (id) => {
    await pool
    .query('SELECT name, country FROM person WHERE id = $1',[id])
    .then(resp => {
        console.log('[Persons table]:', resp.rows)
        return resp.rows
    })
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
}

const ListPersonsByCountry = async (country) => {
    await pool
    .query('SELECT name, country FROM person WHERE country = $1',[country])
    .then(resp => {
        console.log('[Persons table]:', resp.rows)
        return resp.rows
    })
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
}

const InsertPerson = async (name,country) => {
    await pool
    .query('INSERT INTO person (name,country) VALUES($1,$2) RETURNING *',[name,country])
    .then(resp => {
        console.log('[Persons table]:', resp.rows)
        return resp.rows
    })
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
}

const updatePerson = async (id,name,country) => {
    await pool
    .query(`UPDATE person  SET name = $1, country = $2
     WHERE id = $3 RETURNING *`,[name,country,id])
    .then(resp => {
        console.log('[Persons table]:', resp.rows)
        return resp.rows
    })
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
}



module.exports =  {
    list:ListPersons,
    update: updatePerson,
    add:InsertPerson,
    getById:ListPersonsById,
    getByCountry:ListPersonsByCountry
}
