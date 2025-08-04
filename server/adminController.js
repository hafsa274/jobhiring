const AdminData = require("../models/AdminData");

// Create new admin data
exports.createAdminData = async (req, res) => {
  try {
    console.log("Creating admin data with payload:", req.body);
    const newAdminData = new AdminData(req.body);
    const savedAdminData = await newAdminData.save();
    console.log("Admin data saved successfully:", savedAdminData._id);
    res.status(201).json(savedAdminData);
  } catch (err) {
    console.error("Error creating admin data:", err);
    res.status(400).json({ message: err.message });
  }
};

// Get all admin data
exports.getAdminData = async (req, res) => {
  try {
    console.log("Fetching all admin data");
    const adminData = await AdminData.find().sort({ createdAt: -1 });
    console.log("Found", adminData.length, "admin data entries");
    res.status(200).json(adminData);
  } catch (err) {
    console.error("Error fetching admin data:", err);
    res.status(500).json({ message: err.message });
  }
};

// Update admin data by ID
exports.updateAdminData = async (req, res) => {
  try {
    console.log("Updating admin data with ID:", req.params.id);
    const updatedAdminData = await AdminData.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAdminData) {
      console.log("Admin data not found with ID:", req.params.id);
      return res.status(404).json({ message: "Admin data not found" });
    }
    console.log("Admin data updated successfully:", updatedAdminData._id);
    res.status(200).json(updatedAdminData);
  } catch (err) {
    console.error("Error updating admin data:", err);
    res.status(400).json({ message: err.message });
  }
};

// Delete admin data by ID
exports.deleteAdminData = async (req, res) => {
  try {
    console.log("Deleting admin data with ID:", req.params.id);
    const deletedAdminData = await AdminData.findByIdAndDelete(req.params.id);
    if (!deletedAdminData) {
      console.log("Admin data not found with ID:", req.params.id);
      return res.status(404).json({ message: "Admin data not found" });
    }
    console.log("Admin data deleted successfully:", req.params.id);
    res.status(200).json({ message: "Admin data deleted" });
  } catch (err) {
    console.error("Error deleting admin data:", err);
    res.status(500).json({ message: err.message });
  }
};
