const express = require("express");
const connectDb = require("./config/dbconection");
const errorHandler = require("./middleware/errorHandler");
const cors= require("cors");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const hbs = require("hbs");
const path = require("path");
const users = [
    { name: "honey", age: 20 },
    { name: "Hindveer", age: 19 },
    { name: "Jaikirat", age: 20 },
];
const app = express();
const port = process.env.PORT || 5000;
 const dotenv = require("dotenv");
 dotenv.config();
 connectDb();
app.use(express.json());
app.use(cors());
app.get('/' , (req , res)=>{
    res.send("working");
})
app.set('view engine' , 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.get("/home",(req , res)=>{
    res.render("home" , {
       username:"honey",
       posts : "flana "
    })
})
// app.get("/home",(req,res)=>{
//     res.render("home" ,{
//         username:"honey",
//         posts:"flana "
//     })
// })
// app.get("/home",(req,res)=>{
//     res.render("home" ,{
//         username:"honey",
//         posts:"flana "
//     })
// })
app.get("/alluser", (req, res) => {
    res.render("alluser", {
        users: users, 
    });
});
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the avatar file
    // req.body will hold the text fields, if there were any
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/home");
  })
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  //const upload = multer({ storage: storage })
//register route
app.use("/api/register" , require("./routes/userRoutes"));
app.listen(port , ()=>{
    console.log(`server running on http://localhost:${port}`);
})