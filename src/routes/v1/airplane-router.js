// src/routes/v1/airplane-router.js
const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middleware");

const router = express.Router();

router.post(
  "/",
  AirplaneMiddlewares.validCreateRequest,
  AirplaneController.createAirplane
);

module.exports = router;
