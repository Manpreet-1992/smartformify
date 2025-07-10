// index.js

const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to SmartFormify backend!');
});

app.get('/api/forms', (req, res) => {
  res.json({ message: "List of forms" });
});

// Route to handle form submissions (POST)
app.post('/api/forms', (req, res) => {
  const formData = req.body;
  console.log('Received form submission:', formData);

  // Later you'll save this data to a database
  res.status(201).json({ message: 'Form submitted successfully', data: formData });
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SmartFormify server running on port ${PORT}`);
});

