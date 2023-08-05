const authToken=async(req,res,next)=>{
    try{
        const token=req.header("Authorization").replace("Bearer ","")
        const data=jwt.verify(token,process.env.TOKEN_SECRET)
        if (!data?.id)
            throw new Error()
        const query = 'SELECT * FROM users WHERE id = $1';
        const values = [data.id]
        const {rows:[user]} = await client.query(query, values)
        req.user=user
        next()
    }catch(error){
        console.log("auth token faild",error)
        res.this.status(400).send({message:"auth token failed",error})
    }
}
module.exports=authToken