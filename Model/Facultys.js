const mongoose=require('mongoose')

const Facultys =new mongoose.Schema({
    name:String,
    email:String,
    qualification:String,
    department:String,
    workexperience:Number,
    creationdate:{
        type:String,
        default:Date.now().toLocaleString()
    }
})

module.exports=mongoose.model("Facultys",Facultys);