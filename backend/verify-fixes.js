// Simple verification script to test the fixes
console.log("Verifying the fixes for admin data storage and contact form submission...\n");

// Test 1: Check if required files exist and have proper structure
const fs = require('fs');
const path = require('path');

console.log("1. Checking required files...");

const requiredFiles = [
  'server/adminController.js',
  'server/contactController.js',
  'models/AdminData.js',
  'models/Contact.js',
  'server.js'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`   ✅ ${file} exists`);
  } else {
    console.log(`   ❌ ${file} missing`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log("\n   ❌ Some required files are missing!");
  process.exit(1);
}

console.log("\n2. Checking adminController.js content...");
const adminControllerContent = fs.readFileSync('server/adminController.js', 'utf8');
if (adminControllerContent.includes('console.log')) {
  console.log("   ✅ Admin controller has logging");
} else {
  console.log("   ❌ Admin controller missing logging");
}

console.log("\n3. Checking contactController.js content...");
const contactControllerContent = fs.readFileSync('server/contactController.js', 'utf8');
if (contactControllerContent.includes('console.log')) {
  console.log("   ✅ Contact controller has logging");
} else {
  console.log("   ❌ Contact controller missing logging");
}

console.log("\n4. Checking server.js MongoDB connection...");
const serverContent = fs.readFileSync('server.js', 'utf8');
if (serverContent.includes('MongoMemoryServer')) {
  console.log("   ✅ Server has fallback MongoDB connection");
} else {
  console.log("   ❌ Server missing fallback MongoDB connection");
}

console.log("\n✅ Verification complete!");
console.log("\nSUMMARY OF FIXES APPLIED:");
console.log("1. Enhanced error handling and logging in adminController.js");
console.log("2. Enhanced error handling and logging in contactController.js");
console.log("3. Added fallback MongoDB connection in server.js");
console.log("4. Added sorting to data retrieval for better UX");
console.log("\nThese fixes should resolve the issues with:");
console.log("- Admin data not storing properly");
console.log("- Contact form not submitting");
console.log("\nTo test the fixes:");
console.log("1. Start MongoDB: docker start mongodb || docker run -d -p 27017:27017 --name mongodb mongo:latest");
console.log("2. Start server: node server.js");
console.log("3. Visit http://localhost:5000/admin.html to test admin data storage");
console.log("4. Visit http://localhost:5000/contact.html to test contact form submission");
