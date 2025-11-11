const express = require("express");

const router = express.Router();

const { infocontroller } = require("../../controllers");

const airplaneroutes = require("./airplane-router");

router.use("/airplanes", airplaneroutes);

module.exports = router;
