const express =require("express");
const app=express();
const cors=require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const user=require("./Router/user");
const faculty=require("./Router/faculty");


const DB_ENDPOINT=process.env.DB_ENDPOINT;
const PORT=process.env.PORT;

mongoose.connect(DB_ENDPOINT); // database connection

app.use(cors())
app.use(express.json());

app.use("/user",user);
app.use("/faculty",faculty);

app.listen(PORT,()=>console.log("Server is Up and running http://localhost:"+PORT+"/"));