const express=require("express")
const cors=require("cors")
const helmet=require("helmet")
const allRouter=require("./routers/allRouters")
const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
 


app.get('/',async (_,res)=>{res.send("Node.js server")})

app.use(allRouter)

app.all("*",async (_,res)=>{
    res.status(404).send({
        success:false,
        statusCode:404,
        statusText:"Not Found",
        message:"nothing to see here",
    })
})
module.exports=app