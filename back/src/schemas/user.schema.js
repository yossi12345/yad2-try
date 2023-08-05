const {object,string}=require('yup')
const createUserSchema=object({
    body:object({//על הסיסמה להכיל רק מספרים ואותיות באנגלית ושם משפחה ופרטי אסור לכלול ספרות או כל תו אחר שהוא לא אות וחייב להיות עם 2 אותיות ומעלה
        firstName:string().required().matches(/^[\u0590-\u05FF\uFB1D-\uFB4Fa-zA-Z]{2,}$/),
        lastName:string().required().matches(/^[\u0590-\u05FF\uFB1D-\uFB4Fa-zA-Z]{2,}$/),
        password:string().required().matches(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/),
        email:string().required().email(),
        phone:string().required().matches(/^05\d{8}$/)
    })
})
module.exports={
    createUserSchema
}