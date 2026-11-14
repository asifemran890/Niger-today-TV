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

// getCustomerAll
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
// get customer :id
const getCustomerById = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.id);

  res.status(httpStatus.OK).json(
    response({
      message: "Customer Details",
      status: "OK",
      statusCode: httpStatus.OK,
      data: customer,
    }),
  );
});

module.exports = {
  createCustomer,
  getCustomerAll,
  getCustomerById,
};
