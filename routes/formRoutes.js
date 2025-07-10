// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/forms', formController.getForms);
router.post('/forms', formController.createForm);

module.exports = router;
