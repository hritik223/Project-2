const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = new User({ username, email, password: hash });
  await user.save();

  res.send("User Registered");
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.send("Wrong password");

  const token = jwt.sign({ id: user._id, role: user.role }, "secretkey");

  res.json({ token, role: user.role });
});

module.exports = router;