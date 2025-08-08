const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const session = require("express-session");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup express-session middleware
app.use(session({
  secret: 'your-secret-key', // replace with a strong secret or use env variable
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set secure: true if using HTTPS
}));

// MongoDB Connection with better error handling
async function connectDB() {
  try {
    const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/hiring_portal';
    console.log('Connecting to MongoDB at:', mongoUrl);
    
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ MongoDB Connected successfully');
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    
    // Fallback to in-memory MongoDB
    try {
      console.log("⚠️  Trying in-memory MongoDB...");
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      console.log('✅ In-memory MongoDB Connected successfully');
    } catch (memError) {
      console.error("❌ In-memory MongoDB connection failed:", memError.message);
      process.exit(1);
    }
  }
}

// Connect to database
connectDB();

// Serve static frontend files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "ONLINE PORTAL")));

// Routes
const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");
const adminRoutes = require("./routes/adminRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin-data", adminRoutes); // For compatibility with frontend
app.use("/api/applications", applicationRoutes);
app.use("/api/contacts", contactRoutes);

// Default server response
app.get("/", (req, res) => {
  res.send("👋 Hello from Hafsa's hiring portal server!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
