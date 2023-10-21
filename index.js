const knex = require('./database')


//Inserir Dados
var dados = ({
    game:'Gta 614',
    preco: 5.67
})

knex.insert(dados).into('gm').then((success)=>{
    console.log(success)
}).catch(err=>{
    console.log('erro:'+err)
})


//Select de dados
knex.select().table('gm').then(dados=>{
    console.log(dados)
})
//Select com Where
knex.select().where({game:"Gta 8"}).table('gm').then(dados=>{
    console.log(dados)
})
//SQL cru, e posivel escreve comando sql personalizado diretamente
knex.raw('select * from gm where preco > 5.70;').then(sucesss=>{
    console.log(sucesss)
})
//Delete //Deleção de dados
knex.where({id: 3}).table('gm').delete().then(f=>{
    console.log('\u001b[33mdeletei')
})
//Update//Atualização de dados
knex.where({id:5}).update({preco: 40}).table('gm').then(dados=>{
    console.log('atualizei o registro:  '+dados)
})

//Select Com Ordeby
knex.select().table('gm').orderBy("preco","desc").then(d=>{
    console.log(d)
})

//Inserindo Dados No Banco De Dados
knex.insert({prod:'Rocket Seat',gameid:1}).into('produtora').then((d)=>{
    console.log(d)
}).catch(e=>{
    console.log(e)
})

//Select Com InnerJoin
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

//Select De um Relacionamento M p M
knex.select(['gm.game','produtora.prod']).table('gm_prod').
innerJoin("gm","gm.id","gm_prod.gameid").
innerJoin("produtora","produtora.id","gm_prod.prodid").then(d=>{
    console.log(d)
}).catch(e=>{
    console.log(e)
})

//Transações Na teoria e para todas as açoes serem desfeitas se ouvesse algum erro
async function testar(){
try{

    
            await knex.transaction(async trans=>{
           
            await knex.insert({prod:'phpp',gameid:6}).table('produtora')
            await knex.insert({prod:'pgg',gameid:6}).table('produtora')
            await knex.insert({prod:'plaura',gameid:6}).table('produtora')
            await knex.insert({prod:'php',gameid:6}).table('produtora')

        })
    
}catch(e){
  console.log(e)
}
}
testar()