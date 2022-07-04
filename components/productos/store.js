const db = require('../../db')
const pool = db.pool

const ListPersons = () => {
    pool
    .query('SELECT name, country FROM person')
    .then(res => {
        console.log('[Persons table]:', res.rows)
        return res.rows
    })
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
}

const ListPersonsByParameter = (id) => {
    pool
    .query('SELECT name, country FROM person WHERE id = $1',[id])
    .then(res => {
        console.log('[Persons table]:', res.rows)
        return res.rows
    })
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
}

const ListPersonsByCountry = (country) => {
    pool
    .query('SELECT name, country FROM person WHERE country = $1',[country])
    .then(res => {
        console.log('[Persons table]:', res.rows)
        return res.rows
    })
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
}

const InsertPerson = (name,country) => {
    pool
    .query('INSERT INTO person (name,counytry) VALUES($1,$2) RETURNNING *',[name,country])
    .then(res => {
        console.log('[Persons table]:', res.rows)
        return res.rows
    })
    .catch(err => {
        setImmediate(
            ()=> {throw err})
    })
}

const updatePerson = (id,name,country) => {
    pool
    .query(`UPDATE person (name,country)  SET name = $2, country = $3,
     WHERE id=$1 RETURNING *`,[id,name,country])
    .then(res => {
        console.log('[Persons table]:', res.rows)
        return res.rows
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
