const fetch = require('node-fetch');

async function testFixes() {
  console.log('Testing the fixes...\n');
  
  // Test creating admin data
  try {
    console.log('1. Testing POST /api/admin-data');
    const newAdminData = {
      name: 'Test Admin Entry',
      description: 'This is a test entry to verify the fix'
    };
    
    const response = await fetch('http://localhost:5000/api/admin-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAdminData)
    });
    
    console.log('   Status:', response.status);
    const result = await response.json();
    console.log('   Result:', result);
    
    if (response.ok) {
      console.log('   ✅ Admin data creation successful');
    } else {
      console.log('   ❌ Admin data creation failed');
    }
  } catch (error) {
    console.log('   ❌ Error:', error.message);
  }
  
  // Test creating contact message
  try {
    console.log('\n2. Testing POST /api/contacts');
    const newContact = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message to verify the fix'
    };
    
    const response = await fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact)
    });
    
    console.log('   Status:', response.status);
    const result = await response.json();
    console.log('   Result:', result);
    
    if (response.ok) {
      console.log('   ✅ Contact message creation successful');
    } else {
      console.log('   ❌ Contact message creation failed');
    }
  } catch (error) {
    console.log('   ❌ Error:', error.message);
  }
  
  // Test fetching admin data
  try {
    console.log('\n3. Testing GET /api/admin-data');
    const response = await fetch('http://localhost:5000/api/admin-data');
    console.log('   Status:', response.status);
    
    if (response.ok) {
      const adminData = await response.json();
      console.log('   Found', adminData.length, 'admin data entries');
      console.log('   ✅ Admin data fetching successful');
    } else {
      console.log('   ❌ Admin data fetching failed');
    }
  } catch (error) {
    console.log('   ❌ Error:', error.message);
  }
  
  // Test fetching contacts
  try {
    console.log('\n4. Testing GET /api/contacts');
    const response = await fetch('http://localhost:5000/api/contacts');
    console.log('   Status:', response.status);
    
    if (response.ok) {
      const contacts = await response.json();
      console.log('   Found', contacts.length, 'contact messages');
      console.log('   ✅ Contact messages fetching successful');
    } else {
      console.log('   ❌ Contact messages fetching failed');
    }
  } catch (error) {
    console.log('   ❌ Error:', error.message);
  }
}

testFixes();
