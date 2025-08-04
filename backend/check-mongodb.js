const { MongoClient } = require('mongodb');

async function checkMongoDB() {
  const uri = "mongodb://localhost:27017";
  
  const client = new MongoClient(uri);
  
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("✅ Successfully connected to MongoDB");
    
    // List databases
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
      console.log("- " + db.name);
    });
    
  } catch (error) {
    console.log("❌ Could not connect to MongoDB");
    console.log("Error:", error.message);
    
    // Check if MongoDB service is running
    console.log("\nPlease ensure MongoDB is installed and running:");
    console.log("1. Download MongoDB from https://www.mongodb.com/try/download/community");
    console.log("2. Install MongoDB");
    console.log("3. Start MongoDB service");
    console.log("   - On Windows: net start MongoDB");
    console.log("   - On macOS: brew services start mongodb-community");
    console.log("   - On Linux: sudo systemctl start mongod");
  } finally {
    await client.close();
  }
}

checkMongoDB();
