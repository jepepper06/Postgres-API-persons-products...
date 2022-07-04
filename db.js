const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password:'root',
    database:'prove1',
    max:20,
    connectionTimeoutMillis: 4000
})



module.exports = {pool}


