const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  logo: { type: String },
  applyUrl: { type: String },
  key: { type: String, unique: true, required: true }
}, { timestamps: true });

module.exports = mongoose.models.Job || mongoose.model('Job', jobSchema);
