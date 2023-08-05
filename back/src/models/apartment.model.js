// const sequelize = require("../databases/sequelize")
// const {types, conditions, features, adTypes}=require("../utils")
// const {DataTypes}=require("sequelize")

// const Apartment=sequelize.define('apartment',{
//     id:{
//         type:DataTypes.INTEGER,
//         autoIncrement:true,
//         allowNull:false,
//         primaryKey:true
//     },
//     type:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         validate:{
//             isIn:types
//         }
//     },
//     condition:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         validate:{
//             isIn:conditions
//         }
//     },
//     city:{//connect to data goverment in front for list of cities and streets and neighborhood
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     region:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     neighborhood:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     street:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     numberInStreet:{
//         type:DataTypes.INTEGER,
//         allowNull:false,
//         validate:{
//             min:1
//         }
//     },
//     amountOfRooms:{
//         type:DataTypes.DECIMAL(3,1),
//         allowNull:false,
//         validate:{
//             isValid(value) {
//                 if (value<1||value > 12.5) 
//                   throw new Error('Quantity must be between 1 to 12.5')
//                 if (value % 0.5 !== 0) 
//                   throw new Error('amount of rooms must be divisible by 0.5')
//             }
//         }
//     },
//     amountOfParkings:{
//         type:DataTypes.INTEGER,
//         default:0,
//         validate:{
//             min:0,
//             max:3
//         }
//     },
//     amountOfPorches:{
//         type:DataTypes.INTEGER,
//         default:0,
//         validate:{
//             min:0,
//             max:4
//         }
//     },
//     description:{
//         type:DataTypes.TEXT
//     },
//     features:{
//         type:DataTypes.ARRAY(DataTypes.STRING),
//         validate:{
//             isValid(value){
//                 for (let i=0;i<value.length;i++){
//                     if (!features.includes(value[i]))
//                         throw new Error("invalid feature")
//                 }
//             }
//         }
//     },
//     builtSquareMeter:{
//         type:DataTypes.NUMBER,
//         validate:{
//             min:1
//         }
//     },
//     totalSize:{
//         type:DataTypes.NUMBER,
//         allowNull:false,
//         validate:{
//             min:1
//         }
//     },
//     price:{
//         type:DataTypes.NUMBER,
//         validate:{
//             min:100
//         }
//     },
//     entryDate:{
//         type:DataTypes.DATEONLY,
//         allowNull:false,
//         validate:{
//             isValid(value){
//                 const today=new Date()
//                 if (today>=value)
//                     throw new Error("the date must be greater than today")
//             }
//         },
//     },
//     images:{
//         type:DataTypes.ARRAY(DataTypes.STRING),
//         validate:{
//             isValid(value){
//                 if (value.length>10)
//                     throw new Error("you can upload up to 12 images")
//             }
//         }
//     },
//     ownerName:{
//         type:DataTypes.STRING
//     },
//     phone:{
//         type:DataTypes.ARRAY(DataTypes.STRING),
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
//     adType:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         validate:{
//             isValid(value){
//                 if (!adTypes.includes(value))
//                     throw new Error("invalid ad type")
//             }
//         }
//     },
//     status:{
//         type:DataTypes.STRING,
//         default:"ממתין לאישור"
//     },
//     floor:{
//         type:DataTypes.INTEGER,
//         validate:{
//             min:0
//         }
//     },
//     amountOfFloorsInBuilding:{
//         type:DataTypes.INTEGER,
//         validate:{
//             min:0
//         }
//     },
//     isOnPoles:{
//         type:DataTypes.BOOLEAN,
//     }
// })
// module.exports = Apartment
