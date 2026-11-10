const httpStatus = require("http-status");
const { User } = require("../models");
const { Customer } = require("../models");

const ApiError = require("../utils/ApiError");
const { sendEmailVerification } = require("./email.service");

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

module.exports = {
  createCustomer,
};
