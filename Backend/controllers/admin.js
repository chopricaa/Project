const User = require("../models/User");
const CryptoJs = require("crypto-js");
const sendEmail = require("../BackgroundServices/EmailService");
const dotenv = require("dotenv");

dotenv.config();

const createNewUser = async (req, res) => {
  try {
    const { fullname, email, age, country, address, password } = req.body;

    // Validate all fields
    if (!fullname || !email || !age || !country || !address || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Encrypt the password
    const encryptedPassword = CryptoJs.AES.encrypt(password, process.env.PASS).toString();

    // Create a new user
    const newUser = new User({
      fullname,
      email,
      age,
      country,
      address,
      password: encryptedPassword,
      status: 1, // Active status
      role: "user", // Default role
    });

    const savedUser = await newUser.save();

    // Send a welcome email
    await sendEmail(
      email,
      "Welcome to Our Platform",
      `Hello ${fullname},\n\nWelcome to our platform! Your account has been successfully created.\n\nThank you!`
    );

    res.status(201).json({ message: "User created and email sent successfully!", user: savedUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = { createNewUser };