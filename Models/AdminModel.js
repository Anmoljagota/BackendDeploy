const mongoose=require("mongoose");
const adminSchema=mongoose.Schema({
name:String,
image:String,
price:Number,
description:String,
userId:String
})
const AdminModel=mongoose.model("Admin",adminSchema);
module.exports={
    AdminModel
}