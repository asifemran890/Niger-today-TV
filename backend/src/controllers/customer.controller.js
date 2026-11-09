const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { userService } = require("../services");


const createCustomer = catchAsync(async (req, res) => {
  const customer = await userService.createCustomer(req.body);
  res.status(httpStatus.CREATED).json(
    response({
      message: "Customer Created",
      status: "OK",
      statusCode: httpStatus.CREATED,
      data: customer,
    }),
  );
});

module.exports = {
  createCustomer,
};
