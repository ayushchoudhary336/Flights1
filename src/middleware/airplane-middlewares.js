const { ErrorResponse } = require("../utils/common");

function validCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "something went wrong while creating airplane";
    ErrorResponse.error = {
      explanation:
        "Model Number not found in the incoming req on the correct form",
    };
    return res.status(400).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validCreateRequest,
};
