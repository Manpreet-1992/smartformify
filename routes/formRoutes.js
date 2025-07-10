const express = require('express');
const router = express.Router();
const {
  getForms,
  createForm,
  getFormById,
  updateForm,
  deleteForm
} = require('../controllers/formControllers');

// CREATE a new form
router.post('/forms', createForm);

// READ all forms
router.get('/forms', getForms);

// READ one form by ID
router.get('/forms/:id', getFormById);

// UPDATE a form by ID
router.put('/forms/:id', updateForm);

// DELETE a form by ID
router.delete('/forms/:id', deleteForm);

module.exports = router;

