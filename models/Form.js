const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  fields: [Object], // Customize fields as needed
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', formSchema);
