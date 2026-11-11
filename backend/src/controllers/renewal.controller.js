const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { renewalService } = require("../services");

const createRenewal = catchAsync(async (req, res) => {
  const renewal = await renewalService.createRenewal(req.body);
  res.status(httpStatus.CREATED).json(
    response({
      message: "Renewal Created",
      status: "OK",
      statusCode: httpStatus.CREATED,
      data: renewal,
    }),
  );
});

module.exports = {
  createRenewal,
};
