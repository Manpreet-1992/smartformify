// index.js
const express = require('express');
const mongoose = require('mongoose');
const formRoutes = require('./routes/formRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/smartformify', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use form routes with '/api' prefix
app.use('/api', formRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to SmartFormify backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SmartFormify server running on port ${PORT}`);
});
