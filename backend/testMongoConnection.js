const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/hiring_portal'; // Replace with your MongoDB connection string

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

connectDB();

