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

// /api/v1/airplanes Get
router.get("/", AirplaneController.getAirplanes);

// /api/v1/airplanes/:id Get
router.get("/:id", AirplaneController.getAirplane);

router.delete("/:id", AirplaneController.destroyAirplane);

module.exports = router;
