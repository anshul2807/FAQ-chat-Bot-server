const express = require("express");
const message = require("../message");
const router=express.Router();
const auth=require("../Middleware/auth");
const Facultys=require("../Model/Facultys");

router.get("/lists",auth,async(req,res)=>{
    try{
        const all_faculty=await Facultys.find();
        res.status(200).json(message("Successfully fetched",all_faculty));
    }catch(err){
        res.status(402).json(message("Error while fetching the faculty lists"));
    }
})

router.post("/addlist",auth,async (req,res)=>{
    const newFaculty=req.body;
    try{
        let createdFaculty=new Facultys(newFaculty);
        await createdFaculty.save();
        res.status(200).json(message("Created Successfully"));
    }catch(err){
        res.status(502).json(message("Error while adding faculty list"));
    }
})
router.delete("/remove/:id",async(req,res)=>{
    try {
        await Facultys.findByIdAndDelete(req.params.id);
        res.status(200),json(message("Successfully deleted"));

    } catch (err) {
        res.status(502),json(message("Error while deleting Faculty list")); 
    }
})
module.exports=router;
