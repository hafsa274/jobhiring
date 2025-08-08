const { MongoClient } = require('mongodb');

async function testMongoDBDirect() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log("✅ Successfully connected to MongoDB");
    
    // Create a test database and collection
    const database = client.db('hiring_portal_test');
    const collection = database.collection('test_collection');
    
    // Insert a test document
    const testDoc = { name: "Test Document", createdAt: new Date() };
    const result = await collection.insertOne(testDoc);
    console.log("✅ Test document inserted with id:", result.insertedId);
    
    // Find the test document
    const foundDoc = await collection.findOne({ _id: result.insertedId });
    console.log("✅ Found test document:", foundDoc);
    
    // Delete the test document
    await collection.deleteOne({ _id: result.insertedId });
    console.log("✅ Test document deleted");
    
    console.log("✅ MongoDB direct connection test completed successfully!");
  } catch (error) {
    console.error("❌ MongoDB direct connection test failed:", error.message);
  } finally {
    await client.close();
    console.log("✅ MongoDB connection closed");
  }
}

testMongoDBDirect();
