// models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fields: [{ label: String, type: String, required: Boolean }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Form', formSchema);
