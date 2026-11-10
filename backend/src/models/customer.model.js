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
    },
    email: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      lowercase: true,
    },
    startDate: {
      type: Date,
    },
    durationMonths: {
      type: Number,
    },
    expiresAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("Customer", customerSchema);
