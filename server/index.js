import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { UserModel } from "./models/Users.js";

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://laxmanshiva05:Lax958556@cluster0.6jxdng9.mongodb.net/crud")

app.get("/",async(req,res,next)=>{
    try{
      const user=await UserModel.find()
      res.status(201).json(user);
    }catch(err){
        console.log(err.message)
        res.status(500).json({err:"internal server issue"}) 
    }
})

app.get("/:id",async(req,res,next)=>{
    try{
      const user=await UserModel.findById(req.params.id);
      res.status(201).json(user);
    }catch(err){
        console.log(err.message)
        res.status(500).json({err:"internal server issue"}) 
    }
})

app.post('/createUser',async(req,res,next)=>{
    try{
      const user=await UserModel.create(req.body)
      res.status(201).json(user);
    }catch(err){
        console.log(err.message)
        res.status(500).json({err:"internal server issue"}) 
    }
})
app.put('/updateUser/:id',async(req,res,next)=>{
    try{
      const user=await UserModel.findByIdAndUpdate(req.params.id,req.body,{ new: true })
      res.status(201).json(user);
    }catch(err){
        console.log(err.message)
        res.status(500).json({err:"internal server issue"}) 
    }
})

app.delete('/deleteUser/:id',async(req,res,next)=>{
    try{
      const user=await UserModel.findByIdAndDelete(req.params.id)
      res.status(201).json('deleted');
    }catch(err){
        console.log(err.message)
        res.status(500).json({err:"internal server issue"}) 
    }
})

app.listen(5000,()=>{
    console.log('hi lax')
})