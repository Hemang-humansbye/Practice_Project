const mongoose = require("express")
const newsletterSchema = mongoose.Schema(
{
    title:{
        type: String ,
        require: [true, "please add tittle "],
    },
    author: {
        type: String,
        require: [true,"Please add author name"],
    },
    date: {
        type: String, 
        
    }
}
)