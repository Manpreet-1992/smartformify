// controllers/formController.js
import Form, { find } from 'c:/users/mk729/models/Form';

// Get all forms
export async function getForms(req, res) {
  try {
    const forms = await find();
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create new form
export async function createForm(req, res) {
  try {
    const newForm = new Form(req.body);
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
