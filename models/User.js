const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    require: true,
    min: 6,
    max: 255,
  },
  email: {
    type: "string",
    require: true,
    max: 255,
    min: 6,
  },
  password: {
    type: "string",
    require: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: "string",
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
