const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require : [true ,"Please add your name"],
        },
        email: {
            type: String,
            require : [true, "Please add your email"],
        },
        
    }
)