const express = require("express");
const router=express.Router();
const Users=require("../Model/Users");
const message = require("../message");
require("dotenv").config()
const jwt=require("jsonwebtoken");

router.post('/login',async (req,res)=>{
    const user=req.body;
    const curr_user=await Users.findOne({username:user.username});
    // console.log(curr_user)
    if(curr_user==null){
        res.status(403).json(message("Not valid user"));
    }else if(curr_user.password != user.password){
        res.status(403).json(message("Incorrect Password"));
    }else{
        try{
            let token=jwt.sign(user,process.env.PRIVATE_KEY);
            res.status(200).json(message("Successfully Login",{token:token}))
        }catch(err){
            res.status(502).json(message("Error while login"));
        }
    }
})
router.post('/register',async(req,res)=>{
    let user=req.body;
    const similar_user=await Users.find({username:user.username});
    if(similar_user.length > 0){
        res.status(402).json(message("User already registers"));
        return;
    }
    try{
        let created_user=new Users(user);
        await created_user.save();
        // console.log(created_user);
        res.status(200).json(message("User successfull created"))
    }catch(err){
        res.status(402).json(message("Error while creating Database"))
        
    }
    
    
})
router.get("/allusers",async (req,res)=>{
    try{
        let all_users= await Users.find();
        // console.log(all_users);
        res.status(200).json(message("sucessfull Fetched",all_users));
    }catch(err){
        res.status(402).json(message("Error while fetching data"));
    }
})
router.delete("/remove/:id",async(req,res)=>{
    const id=req.params.id;
    try{
        await Users.findByIdAndDelete(id);
        res.status(200).json(message("Deleted user"));
    }catch(err){
        res.status(402).json(message("Error while deleting User"));
    }
})

module.exports=router;
