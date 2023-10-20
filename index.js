const knex = require('./database')



var dados = ({
    game:'Gta 6',
    preco: 5.67
})
knex.insert(dados).into('gm').then((success)=>{
    console.log(success)
}).catch(err=>{
    console.log('erro:'+err)
})