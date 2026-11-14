const httpStatus = require("http-status");
const { User } = require("../models");
const { Customer } = require("../models");

const ApiError = require("../utils/ApiError");
const { sendEmailVerification } = require("./email.service");
//createCustomer
const createCustomer = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  const oneTimeCode =
    Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

  if (userBody.role === "user" || userBody.role === "admin") {
    sendEmailVerification(userBody.email, oneTimeCode);
  }
  return Customer.create({ ...userBody, oneTimeCode });
};


//getCustomerAll 
const getCustomerAll = async () => {
  const customers = await Customer.find();
  return customers;
};

//getCustomerById
const getCustomerById = async (customerId) => {
  const customer = await Customer.findById(customerId); // Or your ORM/DB query
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, "Customer not found");
  }
  return customer;
};
module.exports = {
  createCustomer,
  getCustomerAll, getCustomerById,
};
