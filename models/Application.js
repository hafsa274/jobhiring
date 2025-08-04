const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  resumeUrl: String,
  coverLetter: String,
  jobTitle: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Application", ApplicationSchema);
