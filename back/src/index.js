const port=process.env.PORT
const app=require("./app")
const {disConnectPostgres,connectPostgres} = require("./databases/postgres")
const signals=["SIGINT","SIGTERM","SIGUP"]
async function gracefulShutdown(signal,server){
    process.on(signal,async ()=>{
        await disConnectPostgres()
        server.close()
        console.log("Server shutdown successfully!",signal)
        process.exit(0)
    })
}
const server=app.listen(port,async ()=>{
    console.log("Server connected, port:",port)
    await connectPostgres()
    signals.forEach((signal)=>{
        gracefulShutdown(signal,server)
    })
})