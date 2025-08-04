const mongoose = require('mongoose');

async function testMongoDB() {
  try {
    console.log('Testing MongoDB connection...');
    await mongoose.connect('mongodb://localhost:27017/hiring_portal', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
    
    // Test creating a document
    const AdminData = require('./models/AdminData');
    const testData = new AdminData({
      name: 'Test Entry',
      description: 'This is a test entry'
    });
    
    const savedData = await testData.save();
    console.log('✅ Test data saved:', savedData._id);
    
    // Clean up - delete the test entry
    await AdminData.findByIdAndDelete(savedData._id);
    console.log('✅ Test data cleaned up');
    
    await mongoose.connection.close();
    console.log('✅ MongoDB connection closed');
  } catch (error) {
    console.error('❌ MongoDB test failed:', error.message);
  }
}

testMongoDB();
