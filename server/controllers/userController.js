const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const user = 
require("dotenv").config();
const registerUser = asyncHandler(async(req,res)=>{
    const{name , email , password, phonenumber}=req.body;
    if(!name || !email || !password || !phonenumber){
        res.status(400);
        throw new Error("Please provide all fields");
    }
    const userExists = await user.findOne({email})
})