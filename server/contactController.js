const Contact = require('../models/Contact');

// Create a new contact message
exports.createContact = async (req, res) => {
  try {
    console.log('Creating contact message with payload:', req.body);
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    console.log('Contact message saved successfully:', savedContact._id);
    res.status(201).json({ 
      message: 'Contact message saved successfully', 
      contact: savedContact 
    });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(400).json({ 
      message: 'Error saving contact message', 
      error: err.message 
    });
  }
};

// Get all contact messages (for admin)
exports.getContacts = async (req, res) => {
  try {
    console.log('Fetching all contact messages');
    const contacts = await Contact.find().sort({ createdAt: -1 });
    console.log('Found', contacts.length, 'contact messages');
    res.status(200).json(contacts);
  } catch (err) {
    console.error('Error fetching contact messages:', err);
    res.status(500).json({ 
      message: 'Error fetching contact messages', 
      error: err.message 
    });
  }
};

// Delete a contact message
exports.deleteContact = async (req, res) => {
  try {
    console.log('Deleting contact message with ID:', req.params.id);
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      console.log('Contact message not found with ID:', req.params.id);
      return res.status(404).json({ message: 'Contact message not found' });
    }
    console.log('Contact message deleted successfully:', req.params.id);
    res.status(200).json({ message: 'Contact message deleted successfully' });
  } catch (err) {
    console.error('Error deleting contact message:', err);
    res.status(500).json({ 
      message: 'Error deleting contact message', 
      error: err.message 
    });
  }
};
