const { AirplaneService } = require("../services");
// const { StatusCodes } = require("http-status-code"); // <--- Hata diya!

async function createAirplane(req, res) {
  try {
    console.log("inside controllers");

    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    // StatusCodes.CREATED ki jagah 201 use kiya
    return res.status(201).json({
      success: true,
      messsage: "successfully created an airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    // StatusCodes.INTERNAL_SERVER_ERROR ki jagah 500 use kiya
    return res.status(500).json({
      success: false,
      messaage: "spmething went wrong while creating aeroplane",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirplane,
};
