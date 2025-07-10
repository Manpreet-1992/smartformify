// routes/responseRoutes.js
const express = require('express');
const router = express.Router();
const Response = require('../models/Response');

// POST /api/forms/:id/responses
router.post('/:id/responses', async (req, res) => {
  try {
    const newResponse = new Response({
      formId: req.params.id,
      answers: req.body
    });
    const saved = await newResponse.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Error saving response' });
  }
});

// GET /api/forms/:id/responses
router.get('/:id/responses', async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.id });
    res.json(responses);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching responses' });
  }
});

module.exports = router;
