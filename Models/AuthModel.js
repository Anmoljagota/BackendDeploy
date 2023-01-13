const mongoose=require("mongoose");
const loginSchema=mongoose.Schema({
name:String,
email:String,
password:String,
phoneNumber:Number
})
const LoginModel=mongoose.model("Authentication",loginSchema);
module.exports={
    LoginModel
}