const express = require('express');
const mongoose = require('mongoose');
const formRoutes = require('./routes/formRoutes');

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


// Use form routes
app.use('/api', formRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to SmartFormify backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SmartFormify server running on port ${PORT}`);
});
