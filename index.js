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

// Store forms temporarily in memory (for testing)
let forms = [];

// POST route to add a new form
app.post('/api/forms', (req, res) => {
  const newForm = req.body;  // get form data from request body
  forms.push(newForm);       // save it in memory
  res.status(201).json({ message: 'Form created', form: newForm });
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

