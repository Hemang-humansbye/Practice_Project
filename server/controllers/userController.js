const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const user = require("../models/userModel");
require("dotenv").config();
const registerUser = asyncHandler(async(req , res)=>{
    const{ name , email , password , phoneNumber}=req.body;
    if(!firstName || lastName || gender || age || bloodGroup  || !emial || !password || !phoneNumber){
        res.status(400);
        throw new Error("Please fill all fields");
    }
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({meassage : "user already exists"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);
    const user = await user.create({
        firstName ,
        lastName,
        age,
        gender,
        bloodGroup,
        email,
        phoneNumber,
        password:hashedPassword,
    });
    res.status(201).json({ message : "user registered succesfully" , user});
})
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Please provide email and password");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});
module.exports = { registerUser, loginUser}