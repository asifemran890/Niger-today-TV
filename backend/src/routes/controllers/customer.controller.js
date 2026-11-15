const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const response = require("../../config/response");
const { customerService } = require("../../services");

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

//delete customer :id
const deleteCustomerById = catchAsync(async (req, res) => {
  await customerService.deleteCustomerById(req.params.id);
  res.status(httpStatus.OK).json(
    response({
      message: "Customer Deleted",
      status: "OK",
      statusCode: httpStatus.OK,
    }),
  );
});

//update customer :id
const updateCustomerById = catchAsync(async (req, res) => {
  const customer = await customerService.updateCustomerById(
    req.params.id,
    req.body,
  );
  res.status(httpStatus.OK).json(
    response({
      message: "Customer Updated",
      status: "OK",
      statusCode: httpStatus.OK,
      data: customer,
    }),
  );
});

//get dashboard stats
const getDashboardStats = catchAsync(async (req, res) => {
  const stats = await customerService.getDashboardStats();
  res.status(httpStatus.OK).json(
    response({
      message: "Dashboard Stats",
      status: "OK",
      statusCode: httpStatus.OK,
      data: stats,
    }),
  );
});

module.exports = {
  createCustomer,
  getCustomerAll,
  getCustomerById,
  updateCustomerById,
  getDashboardStats,
  deleteCustomerById,
};
