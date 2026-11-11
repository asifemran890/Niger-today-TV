const mongoose = require("mongoose");

const renewalSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Content is required"],
    },
    periodStart: {
      type: Date,
      required: [true, "Content is required"],
    },
    periodEnd: {
      type: Date,
      required: false,
    },
    durationMonths: {
      type: Number,
    },
    type: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("Renewal", renewalSchema);
