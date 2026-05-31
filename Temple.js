const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema({
  name: String,
  state: String,
  location: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Temple", templeSchema);