const { client } = require("../databases/postgres")

const handleCreateApartmentInDb=async (req,res)=>{
    try{
        const keys=Object.keys(req.body)
        let query='INSERT INTO apartment ('+keys.join(", ")+") values ("
        const values=[]
        keys.forEach((key,i)=>{
            const index1=i+1
            query+="$"+index1+(index1!==keys.length?", ":") RETURNING *")
            values.push(req.body[key])
        })
        const {rows:[apartmnet]} = await client.query(query, values)
        res.send(apartmnet)
    }catch(err){
        console.log("create apartment error",err)
        res.status(500).send(err)
    }
}
const handleUploadImages=async(req,res)=>{
    res.send({file:req.files,body:req.body})
    // const files=req.files
    // if (files.length==0)
    //     return res.status(404).send("no image upload")
    // const apartmentId=req.query.id
    // const filesPaths=[]
    // files.forEach((file)=>{
    //     filesPaths.push("apartments-images/"+file.filename)
    // })
    // const query="UPDATE apartment SET images = $1 WHERE id = $2 RETURNING *"
    // try{
    //     const {rows:[apartment]}=await client.query(query,[filesPaths,apartmentId])
    //     res.send(apartment)
    // }catch(err){
    //     console.log(err)
    //     res.status(500).send(err)
    // }
}

module.exports={
    handleCreateApartmentInDb,
    handleUploadImages
}