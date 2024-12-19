const mongoose = require("mongoose");

const ParcelSchema = mongoose.Schema(
  {
    from: { type: String, require: true },
    to: { type: String, require: true },
    senderName: { type: String, require: true },
    recipientName: { type: String, require: true },
    senderemail: { type: String, require: true },
    recipientemail: { type: String, require: true },
    weight: { type: Number, require: true },
    cost: { type: Number, require: true },
    date: { type: String, require: true },
    note: { type: String },
    feedback: { type: String },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "In Transit", "Delivered"], // Use descriptive statuses
      default: "Pending",
    },

//email parcel.js
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Parcel", ParcelSchema);