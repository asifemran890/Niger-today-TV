const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Content is required"],
    },
    phone: {
      type: String,
      required: [true, "Content is required"],
      minlength: 10,
      maxlength: 2000,
    },
    email: {
      type: String,
      required: [true, "Content is required"],
    },
    startDate: {
      type: Date,
      required: [true, "Content is required"],
    },
    durationMonths: {
      type: Number,
      required: [true, "Content is required"],
    },
    expiresAt: {
      type: Date,
      required: [true, "Content is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("Customer", customerSchema);
