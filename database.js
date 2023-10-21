//Conexão Com O DB
const knex = require('knex')({
  client:'mysql',
  connection:{
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'games_knex'
  }
})
module.exports = knex