const express = require("express");
const router = express.Router();
const Temple = require("../models/Temple");
const auth = require("../middleware/auth");

// Add temple (Admin only)
router.post("/add", auth, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.send("Only admin allowed");
  }

  const temple = new Temple(req.body);
  await temple.save();

  res.send("Temple Added");
});

// Get all temples
router.get("/", async (req, res) => {
  const data = await Temple.find();
  res.json(data);
});

// Delete temple
router.delete("/:id", auth, async (req, res) => {
  await Temple.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;