const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const { client } = require("../databases/postgres")
const handleCreateUser=async (req,res)=>{
    try{
        const query='INSERT INTO users (firstname, lastname, email, password, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const password=await bcrypt.hash(req.body.password,8)
        const values=[req.body.firstName,req.body.lastName,req.body.email,password,req.body.phone]
        const {rows:[user]} = await client.query(query, values)
        res.send({
            user,
            token:generateToken(user)
        })
    }catch(err){
        console.log("create user error",err)
        res.status(500).send(err)
    }
}
const handleUserLogin=async(req,res)=>{
    try{
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const {rows:[user]} = await client.query(query, values)
        if (!user)
            return res.status(404).send("unable to login")
        const isPasswordMatch=await bcrypt.compare(req.body.password,user.password)
        if (!isPasswordMatch)
            return res.status(404).send("unable to login")
        res.send({user, token:generateToken()})
    }catch(err){
        console.log("login user error",err)
        res.status(500).send(err)
    }
}

function generateToken(user){
    return jwt.sign(
        {
            id:user.id
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn:"6h"
        })
}
module.exports={
    handleCreateUser,
    handleUserLogin
}