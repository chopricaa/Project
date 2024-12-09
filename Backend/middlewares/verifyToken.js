const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Authorization header
  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid");
      }
      req.user = user; // Attach decoded user info to request
      next(); // Proceed to next middleware/route handler
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

// Middleware to verify token and admin role
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") { // Check if user has admin role
      next(); // If admin, proceed
    } else {
      return res.status(403).json("You are not permitted to do this operation");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
