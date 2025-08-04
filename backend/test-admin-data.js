const fetch = require('node-fetch');

async function testAdminData() {
  try {
    console.log('Testing admin data storage functionality...');
    
    // Test creating admin data
    const adminData = {
      name: 'Test Admin Data',
      description: 'This is a test admin data entry'
    };

    const createResponse = await fetch('http://localhost:5000/api/admin-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adminData)
    });

    const createdData = await createResponse.json();
    console.log('Create response status:', createResponse.status);
    
    if (createResponse.ok) {
      console.log('✅ Admin data creation successful!');
      console.log('Created data:', createdData);
      
      // Test fetching admin data
      const fetchResponse = await fetch('http://localhost:5000/api/admin-data');
      const fetchedData = await fetchResponse.json();
      console.log('Fetch response status:', fetchResponse.status);
      
      if (fetchResponse.ok) {
        console.log('✅ Admin data fetch successful!');
        console.log('Fetched data count:', fetchedData.length);
        
        // Test updating admin data
        if (createdData._id) {
          const updateData = {
            name: 'Updated Admin Data',
            description: 'This is an updated admin data entry'
          };
          
          const updateResponse = await fetch(`http://localhost:5000/api/admin-data/${createdData._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData)
          });
          
          console.log('Update response status:', updateResponse.status);
          
          if (updateResponse.ok) {
            console.log('✅ Admin data update successful!');
            
            // Test deleting admin data
            const deleteResponse = await fetch(`http://localhost:5000/api/admin-data/${createdData._id}`, {
              method: 'DELETE'
            });
            
            console.log('Delete response status:', deleteResponse.status);
            
            if (deleteResponse.ok) {
              console.log('✅ Admin data deletion successful!');
            } else {
              console.log('❌ Admin data deletion failed');
            }
          } else {
            console.log('❌ Admin data update failed');
          }
        }
      } else {
        console.log('❌ Admin data fetch failed');
      }
    } else {
      console.log('❌ Admin data creation failed');
    }
  } catch (error) {
    console.error('❌ Error testing admin data:', error);
  }
}

testAdminData();
