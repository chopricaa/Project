const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

// Function to create a transporter
function createTransporter(config) {
  return nodemailer.createTransport(config);
}

// Mail configuration
let configurations = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

// Send Mail function
const sendMail = async (messageOption) => {
  const transporter = createTransporter(configurations);

  try {
    // Verify the connection configuration
    await transporter.verify();
    // Send the email and await the result
    const info = await transporter.sendMail(messageOption);
    console.log("Email sent: " + info.response);
  } catch (err) {
    console.log("Error sending email:", err);
  }
};

module.exports = sendMail;
