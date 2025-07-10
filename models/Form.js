const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: String,
  fields: Array
});

module.exports = mongoose.model('Form', formSchema);

