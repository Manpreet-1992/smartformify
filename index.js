require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to SmartFormify Backend API');
});

// Check Mongo URI
if (!process.env.MONGO_URI) {
  console.error('❌ MONGO_URI is not defined in the environment variables.');
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    // Start the server only after DB connects
    app.listen(PORT, () => {
      console.log(`🚀 SmartFormify server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

