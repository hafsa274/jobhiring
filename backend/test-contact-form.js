const fetch = require('node-fetch');

async function testContactForm() {
  try {
    console.log('Testing contact form submission...');
    
    const contactData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message'
    };

    const response = await fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });

    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', data);
    
    if (response.ok) {
      console.log('✅ Contact form submission successful!');
    } else {
      console.log('❌ Contact form submission failed');
    }
  } catch (error) {
    console.error('❌ Error testing contact form:', error);
  }
}

testContactForm();
