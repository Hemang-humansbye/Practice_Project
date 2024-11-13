const express = require("express");
const { registerDoctor, getDoctors } = require("../controllers/doctorDetailsController");

const router = express.Router();

// POST route to register a new doctor
router.post("/register", registerDoctor);
router.get("/", getDoctors);

module.exports = router;