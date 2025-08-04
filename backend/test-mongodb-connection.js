const { MongoClient } = require('mongodb');

async function testMongoDB() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('✅ Connected successfully to MongoDB server');

    // Get server info
    const adminDb = client.db().admin();
    const serverInfo = await adminDb.serverInfo();
    console.log('Server Info:', serverInfo);

    // List databases
    const databases = await adminDb.listDatabases();
    console.log('Databases:', databases.databases.map(db => db.name));

    // Try to access the hiring_portal database
    const db = client.db('hiring_portal');
    console.log('✅ Successfully accessed hiring_portal database');

    // List collections
    const collections = await db.listCollections().toArray();
    console.log('Collections:', collections.map(col => col.name));

  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

testMongoDB();
