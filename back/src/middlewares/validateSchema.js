const validateSchema=(schema)=>async (req,res,next)=>{
    try{
        await schema.validate({
            body:req.body,
            query:req.query,
            params:req.params
        })
        next()
    }catch(err){
        console.log("validate schema err:",err)
        res.status(500).send("schema not valid")
    }
}
module.exports=validateSchema