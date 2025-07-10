const express = require('express');
const router = express.Router();
const {
  getForms,
  getFormById,
  createForm,
  updateForm,
  deleteForm
} = require('../controllers/formControllers');

router.get('/forms', getForms);
router.get('/forms/:id', getFormById);
router.post('/forms', createForm);
router.put('/forms/:id', updateForm);
router.delete('/forms/:id', deleteForm);

module.exports = router;
