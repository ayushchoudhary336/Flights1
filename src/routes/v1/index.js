const express = require("express");

const router = express.Router();
console.log("inside v1 routes");

const { infocontroller } = require("../../controllers");

const airplaneroutes = require("./airplane-router");

router.get("/info", infocontroller.info);
router.use("/airplanes", airplaneroutes);

module.exports = router;
