
const express = require('express')
const app = express()
const port = 8000


//console.log(await knex.raw('CREATE TABLE test()'))

app.get('/', (req, res) => {
  res.send('Hello Nodemon!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*knex.raw('select 1+1 as result').then(function () {
  // there is a valid connection in the pool
});*/

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'db',
    port : 3306,
    user : 'dasuser',
    password : 'daspassword',
    database : 'db'
  }
});


