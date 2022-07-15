const {Pool} = require('pg')


// DATABASE THINGS

//POOLING
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password:'root',
    database:'prove1',
    max:20,
    connectionTimeoutMillis: 4000
})


// I DONT EVEN KNOW WHAT IT DOES HERE XDDDDD
pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log(result.rows)
    })
  })

module.exports = {pool}


