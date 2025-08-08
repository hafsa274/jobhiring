const connectDB = require('./config/db');

async function testConnection() {
  console.log('Testing database connection...');
  try {
    await connectDB();
    console.log('✅ Database connection successful');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }
}

testConnection();
