const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { customerService } = require("../services");

//createCustomer
const createCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.createCustomer(req.body);
  res.status(httpStatus.CREATED).json(
    response({
      message: "Customer Created",
      status: "OK",
      statusCode: httpStatus.CREATED,
      data: customer,
    }),
  );
});

const getCustomerAll = catchAsync(async (req, res) => {
  const customers = await customerService.getCustomerAll();
  res.status(httpStatus.OK).json(
    response({
      message: "Customer List",
      status: "OK",
      statusCode: httpStatus.OK,
      data: customers,
    }),
  );
});

module.exports = {
  createCustomer,
  getCustomerAll,
};
