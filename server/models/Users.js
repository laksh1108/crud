import mongoose from "mongoose";


const Userschema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    city:String   
    
})

export const UserModel=mongoose.model('users',Userschema)