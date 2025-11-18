// src/routes/v1/airplane-router.js
const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middleware");

const router = express.Router();

// /api/v1/airplanes  post
router.post(
  "/",
  AirplaneMiddlewares.validCreateRequest,
  AirplaneController.createAirplane
);

router.get("/", AirplaneController.getAirplanes);

module.exports = router;
