const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type:String
    },
    imageUrl:String
}
);
module.exports = mongoose.model("Blog", blogSchema)