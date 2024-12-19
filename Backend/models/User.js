const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    fullname: { type: String, required: true }, // Corrected "require" to "required"
    email: { type: String, required: true }, // Corrected "require" to "required"
    age: { type: Number },
    country: { type: String, required: true }, // Corrected "require" to "required"
    address: { type: String, required: true }, // Corrected "require" to "required"
    password: { type: String, required: true }, // Corrected "require" to "required"
    status: { type: Number, required: true }, // Corrected "require" to "required"
    role: { type: String, default: "user" },
  },
  {
    timestamps: true, // Corrected from `timestamp: true` to `timestamps: true`
  }
);

module.exports = mongoose.model("User", UserSchema);

