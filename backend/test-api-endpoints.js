const fetch = require('node-fetch');

async function testAPI() {
  console.log('Testing API endpoints...\n');
  
  // Test admin data endpoint
  try {
    console.log('1. Testing GET /api/admin-data');
    const adminDataResponse = await fetch('http://localhost:5000/api/admin-data');
    console.log('   Status:', adminDataResponse.status);
    const adminData = await adminDataResponse.json();
    console.log('   Data:', adminData);
  } catch (error) {
    console.log('   Error:', error.message);
  }
  
  // Test contact endpoint
  try {
    console.log('\n2. Testing GET /api/contacts');
    const contactsResponse = await fetch('http://localhost:5000/api/contacts');
    console.log('   Status:', contactsResponse.status);
    const contacts = await contactsResponse.json();
    console.log('   Data:', contacts);
  } catch (error) {
    console.log('   Error:', error.message);
  }
  
  // Test creating admin data
  try {
    console.log('\n3. Testing POST /api/admin-data');
    const newAdminData = {
      name: 'Test Admin Data',
      description: 'This is a test entry'
    };
    const createResponse = await fetch('http://localhost:5000/api/admin-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAdminData)
    });
    console.log('   Status:', createResponse.status);
    const result = await createResponse.json();
    console.log('   Result:', result);
  } catch (error) {
    console.log('   Error:', error.message);
  }
  
  // Test creating contact
  try {
    console.log('\n4. Testing POST /api/contacts');
    const newContact = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message'
    };
    const createContactResponse = await fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    });
    console.log('   Status:', createContactResponse.status);
    const result = await createContactResponse.json();
    console.log('   Result:', result);
  } catch (error) {
    console.log('   Error:', error.message);
  }
}

testAPI();
