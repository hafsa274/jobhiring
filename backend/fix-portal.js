const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/hiring_portal', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
    return true;
  } catch (error) {
    console.log('⚠️  Failed to connect to MongoDB, using in-memory database');
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('✅ Connected to in-memory MongoDB');
      return true;
    } catch (memError) {
      console.error('❌ Failed to connect to in-memory MongoDB:', memError.message);
      return false;
    }
  }
}

// Fix the server configuration
async function fixServer() {
  const app = express();
  
  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "ONLINE PORTAL")));
  
  // Connect to database
  const dbConnected = await connectToDatabase();
  if (!dbConnected) {
    console.error('❌ Database connection failed');
    return;
  }
  
  // Import models
  const AdminData = require('./models/AdminData');
  const Contact = require('./models/Contact');
  
  // Fix Admin Data Routes
  app.get('/api/admin-data', async (req, res) => {
    try {
      const adminData = await AdminData.find().sort({ createdAt: -1 });
      res.status(200).json(adminData);
    } catch (error) {
      console.error('Error fetching admin data:', error);
      res.status(500).json({ message: 'Error fetching admin data' });
    }
  });
  
  app.post('/api/admin-data', async (req, res) => {
    try {
      const newAdminData = new AdminData(req.body);
      const savedAdminData = await newAdminData.save();
      console.log('✅ Admin data saved:', savedAdminData._id);
      res.status(201).json(savedAdminData);
    } catch (error) {
      console.error('Error saving admin data:', error);
      res.status(400).json({ message: 'Error saving admin data', error: error.message });
    }
  });
  
  app.put('/api/admin-data/:id', async (req, res) => {
    try {
      const updatedAdminData = await AdminData.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true }
      );
      if (!updatedAdminData) {
        return res.status(404).json({ message: 'Admin data not found' });
      }
      res.status(200).json(updatedAdminData);
    } catch (error) {
      console.error('Error updating admin data:', error);
      res.status(400).json({ message: 'Error updating admin data', error: error.message });
    }
  });
  
  app.delete('/api/admin-data/:id', async (req, res) => {
    try {
      const deletedAdminData = await AdminData.findByIdAndDelete(req.params.id);
      if (!deletedAdminData) {
        return res.status(404).json({ message: 'Admin data not found' });
      }
      res.status(200).json({ message: 'Admin data deleted successfully' });
    } catch (error) {
      console.error('Error deleting admin data:', error);
      res.status(500).json({ message: 'Error deleting admin data', error: error.message });
    }
  });
  
  // Fix Contact Routes
  app.get('/api/contacts', async (req, res) => {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      res.status(200).json(contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({ message: 'Error fetching contacts' });
    }
  });
  
  app.post('/api/contacts', async (req, res) => {
    try {
      const newContact = new Contact(req.body);
      const savedContact = await newContact.save();
      console.log('✅ Contact message saved:', savedContact._id);
      res.status(201).json({ 
        message: 'Contact message saved successfully', 
        contact: savedContact 
      });
    } catch (error) {
      console.error('Error saving contact message:', error);
      res.status(400).json({ 
        message: 'Error saving contact message', 
        error: error.message 
      });
    }
  });
  
  app.delete('/api/contacts/:id', async (req, res) => {
    try {
      const deletedContact = await Contact.findByIdAndDelete(req.params.id);
      if (!deletedContact) {
        return res.status(404).json({ message: 'Contact message not found' });
      }
      res.status(200).json({ message: 'Contact message deleted successfully' });
    } catch (error) {
      console.error('Error deleting contact message:', error);
      res.status(500).json({ 
        message: 'Error deleting contact message', 
        error: error.message 
      });
    }
  });
  
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log('✅ Portal fixes applied successfully');
  });
}

// Run the fix
fixServer().catch(console.error);
