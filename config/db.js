const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  // If already connected, return
  if (isConnected) {
    return;
  }

  try {
    // Use environment variable or default to localhost
    const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/hiring_portal';
    
    const conn = await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    console.log("⚠️  Using in-memory MongoDB for development");
    
    // Use mongodb-memory-server as fallback
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      
      const conn = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      isConnected = true;
      console.log(`✅ In-memory MongoDB Connected: ${conn.connection.host}`);
    } catch (memError) {
      console.error("❌ In-memory MongoDB connection failed:", memError.message);
      process.exit(1); // Exit process with failure
    }
  }
};

module.exports = connectDB;
