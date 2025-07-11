import React, { useState } from "react";
import "./Forms.css";

function Forms() {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

  // Add a text input field
  const addTextField = () => {
    setFields([...fields, { id: Date.now(), type: "text", label: "" }]);
  };

  // Add a checkbox field
  const addCheckboxField = () => {
    setFields([...fields, { id: Date.now(), type: "checkbox", label: "" }]);
  };

  // Handle label change for each field
  const handleLabelChange = (id, newLabel) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, label: newLabel } : field
      )
    );
  };

  // Handle form input changes
  const handleInputChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  // Submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted with data: " + JSON.stringify(formData, null, 2));
    // Here, connect your backend API to send formData
  };

  return (
    <div className="form-builder-container">
      <h2>🧾 Form Builder</h2>

      <div className="button-group">
        <button onClick={addTextField}>Add Text Field</button>
        <button onClick={addCheckboxField}>Add Checkbox Field</button>
      </div>

      {fields.length === 0 && <p>No fields added yet. Use buttons above.</p>}

      <form className="dynamic-form" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} className="form-field">
            <input
              type="text"
              placeholder="Label"
              value={field.label}
              onChange={(e) => handleLabelChange(field.id, e.target.value)}
              required
              className="label-input"
            />
            {field.type === "text" && (
              <input
                type="text"
                placeholder={field.label || "Text input"}
                value={formData[field.id] || ""}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            )}
            {field.type === "checkbox" && (
              <input
                type="checkbox"
                checked={!!formData[field.id]}
                onChange={(e) => handleInputChange(field.id, e.target.checked)}
              />
            )}
          </div>
        ))}
        {fields.length > 0 && (
          <button type="submit" className="submit-btn">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Forms;
