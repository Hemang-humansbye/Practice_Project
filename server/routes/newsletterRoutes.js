const express = require("express");
const router = express.Router();
const{getnewsletter , createnewsletter} = require("../controllers/newsletterController")
const {jwtAuthMiddleware} = require("../middleware/jwtMiddleware");
router.get("/",getnewsletter);

router.post("/",createnewsletter);