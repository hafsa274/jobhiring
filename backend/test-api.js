const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
const connectDB = require('./config/db');
connectDB();

// Import models
const Contact = require('./models/Contact');

// Test endpoint
app.post('/api/contacts', async (req, res) => {
  try {
    console.log('Received contact data:', req.body);
    const contact = new Contact(req.body);
    await contact.save();
    console.log('Contact saved successfully');
    res.status(201).json({ 
      message: 'Contact message saved successfully', 
      contact: contact 
    });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(400).json({ 
      message: 'Error saving contact message', 
      error: err.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Test API server running on port ${PORT}`);
});
