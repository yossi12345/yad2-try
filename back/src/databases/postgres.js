// const Sequelize=require("sequelize")
// const sequelize=new Sequelize(
//     process.env.MYSQL_DB,
//     process.env.MYSQL_ADMIN,
//     process.env.MYSQL_PASSWORD,
//     {
//         dialect:"postgres",
//         host:process.env.MYSQL_HOST   
//     }
// )
// module.exports=sequelize
const {Client}=require("pg")

const client = new Client({
    user: process.env.MYSQL_ADMIN,
    host:process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    password: process.env.MYSQL_PASSWORD,
    port: 5432,
})
async function connectPostgres(){
    try{
        await client.connect()
        console.log("postgres connected successfully")
    }catch(err){
        console.log("postgres connection error!",err)
        process.exit(1)
    }
}
async function disConnectPostgres(){
    try{
        await client.end()
        console.log("disconnect posgres")
    }catch(err){
        console.log("failed to disconnect postgres", err )
    }
}
module.exports={
    client,
    disConnectPostgres,
    connectPostgres
}
  