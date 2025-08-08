const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files from "ONLINE PORTAL" folder
app.use(express.static(path.join(__dirname, "ONLINE PORTAL")));

// MongoDB connection
const connectDB = require('./config/db');
connectDB();

// Import routes
const jobRoutes = require('./routes/jobRoutes');
const adminRoutes = require('./routes/adminRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Use routes
app.use('/api/jobs', jobRoutes);
app.use('/api/admin-data', adminRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/contacts', contactRoutes);

// Serve homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "ONLINE PORTAL/index.html"));
});

// Serve admin page
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "ONLINE PORTAL/admin.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});