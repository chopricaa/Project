const express = require("express");
const { createNewUser } = require("../controllers/admin");
const router = express.Router();

// Route to create a new user and send an email
router.post("/create-user", createNewUser);

module.exports = router;