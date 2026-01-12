// Test script to verify the API endpoint is working
import axios from 'axios';

async function testApi() {
  try {
    console.log('Testing the book-demo API endpoint...');
    
    const testData = {
      name: 'Test User',
      workEmail: 'test@example.com',
      website: 'https://example.com',
      budget: '10k-50k',
      goals: 'Testing the demo booking form'
    };

    const response = await axios.post('http://localhost:5000/api/book-demo', testData);
    
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

testApi();