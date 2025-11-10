const express = require("express");

const { Airplanecontroller } = require("../../controllers");
const router = express.Router();

console.log("inside airplanes routes");

// /api/v/airplanes post request
router.post("/", Airplanecontroller.createAirplane);

module.exports = router;
