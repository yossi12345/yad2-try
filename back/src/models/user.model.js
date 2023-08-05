// const sequelize = require("../databases/sequelize")
// const {DataTypes}=require("sequelize")

// const User=sequelize.define('user',{
//     id:{
//         type:DataTypes.INTEGER,
//         autoIncrement:true,
//         allowNull:false,
//         primaryKey:true
//     },
//     email:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         unique:true
//     },
//     password:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     firstName:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     lastName:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     phone:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         validate:{
//             isValid(value){
//                 for (let i=0;i<value.length;i++){
//                     if (!(/^05\d{8}$/.test(value[i])))
//                        throw new Error("invalid number")
//                 }
//             }
//         }
//     },
// })
// module.exports = User