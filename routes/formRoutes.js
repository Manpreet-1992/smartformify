// routes/formRoutes.js
const express = require('express');
const router = express.Router();

// GET /api/forms - example endpoint returning a list of forms
router.get('/forms', (req, res) => {
  res.json({
    message: "List of forms",
    forms: [
      { id: 1, title: "Contact Form" },
      { id: 2, title: "Feedback Form" }
    ]
  });
});

// POST /api/forms - example endpoint to create a new form
router.post('/forms', (req, res) => {
  const newForm = req.body; // get form data from request body
  // In real app, you'd save newForm to database here
  res.status(201).json({
    message: "Form created successfully",
    form: newForm
  });
});

module.exports = router;

