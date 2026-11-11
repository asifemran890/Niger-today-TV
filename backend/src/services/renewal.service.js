const httpStatus = require("http-status");
const { User } = require("../models");
const { Renewal } = require("../models");
const ApiError = require("../utils/ApiError");

const createRenewal = async (renewalBody) => {
  if (await User.isEmailTaken(renewalBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  const renewal = await Renewal.create(renewalBody);
  return renewal;
};

module.exports = {
  createRenewal,
};
