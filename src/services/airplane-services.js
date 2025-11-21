const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { where } = require("sequelize");
const { data } = require("../utils/common/error-response");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    console.log("inside services");

    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError("cannot fetch data of all the airplanes");
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);

    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airplane you requested is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "cannot fetch data of the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airplane you requested to delete is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "cannot fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};
