
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
});


 knex.schema
        .createTable("user", (table) => {
            table.increments()
            table.string("name")
            table.string("description")
        })
        .then(() =>
            knex("user).insert([
                {name: "A", description: "A"},
                {name: "B", description: "BB"},
                {name: "C", description: "CCC"},
                {name: "D", description: "DDDD"},
            ])
        )
*/

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


