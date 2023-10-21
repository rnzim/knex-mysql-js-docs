const knex = require('./database')



var dados = ({
    game:'Gta 614',
    preco: 5.67
})
/*
knex.insert(dados).into('gm').then((success)=>{
    console.log(success)
}).catch(err=>{
    console.log('erro:'+err)
})
knex.select().table('gm').then(dados=>{
    console.log(dados)
})

knex.select().where({game:"Gta 8"}).table('gm').then(dados=>{
    console.log(dados)
})
knex.raw('select * from gm where preco > 5.70;').then(sucesss=>{
    console.log(sucesss)
})
knex.where({id: 3}).table('gm').delete().then(f=>{
    console.log('\u001b[33mdeletei')
})
knex.where({id:5}).update({preco: 40}).table('gm').then(dados=>{
    console.log('atualizei o registro:  '+dados)
})

knex.select().table('gm').orderBy("preco","desc").then(d=>{
    console.log(d)
})
*/
/*
knex.insert({prod:'Rocket Seat',gameid:1}).into('produtora').then((d)=>{
    console.log(d)
}).catch(e=>{
    console.log(e)
})
*/

knex.select(["gm.*","produtora.prod as produtota.name"]).table('gm').innerJoin('produtora','produtora.gameid','gm.id').then(dados=>{
   console.log(dados)
}).catch(e=>{
    console.log('erro :  '+e)
})
/*
knex.raw('delete from produtora where id > 1').then(d=>{
    console.log(d)
})
*/