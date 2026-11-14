const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { renewalService, customerService } = require("../services");
const ApiError = require("../utils/ApiError");

// create renewal
const createRenewal = catchAsync(async (req, res) => {
  const { customerId, periodStart, durationMonths } = req.body;
  const customer = await customerService.getCustomerById(customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, "customer not found");
  }
  const periodEnd = new Date(periodStart);
  periodEnd.setMonth(periodEnd.getMonth() + durationMonths);
  req.body.periodEnd = periodEnd;
  req.body.type = "initial";

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

// get Renewal All
const getRenewalAll = catchAsync(async (req, res) => {
  const renewal = await renewalService.getRenewalAll();
  res.status(httpStatus.OK).json(
    response({
      message: "renewal List",
      status: "OK",
      statusCode: httpStatus.OK,
      data: renewal,
    }),
  );
});
module.exports = {
  createRenewal,
  getRenewalAll,
};
