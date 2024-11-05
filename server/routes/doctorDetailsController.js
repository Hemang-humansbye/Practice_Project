const express = require("express");
const { registerDoctor, getDoctor } = require("../controller/doctorDetailsController");

const router = express.Router();

router.post("/register", registerDoctor);
router.get("/",getDoctor);

module.exports = router;