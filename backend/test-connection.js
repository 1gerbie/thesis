require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
  try {
    console.log('MongoDB URI:', process.env.MONGODB_URI);
    console.log('Attempting to connect to MongoDB...');
    
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('Successfully connected to MongoDB');
    
    // Test the connection
    const collections = await mongoose.connection.db.collections();
    console.log('Available collections:', collections.map(c => c.collectionName));
    
    await mongoose.connection.close();
    console.log('Connection closed successfully');
  } catch (error) {
    console.error('Connection error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack
    });
  } finally {
    process.exit();
  }
}

testConnection();