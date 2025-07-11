// src/pages/Forms.js
import React, { useState } from "react";
import "./Forms.css";

function Forms() {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
    };
    setFields([...fields, newField]);
  };

  const handleChange = (id, value) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    alert("Form submitted! Check console.");
  };

  return (
    <div className="form-builder-page">
      <h2>🧾 Form Builder</h2>

      <div className="button-row">
        <button onClick={() => addField("text")}>➕ Add Text Field</button>
        <button onClick={() => addField("checkbox")}>✅ Add Checkbox Field</button>
      </div>

      <form onSubmit={handleSubmit} className="dynamic-form">
        {fields.map((field) => (
          <div key={field.id} className="form-field">
            <label>{field.label}</label>
            {field.type === "text" ? (
              <input
                type="text"
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            ) : (
              <input
                type="checkbox"
                onChange={(e) => handleChange(field.id, e.target.checked)}
              />
            )}
          </div>
        ))}
        {fields.length > 0 && <button type="submit">🚀 Submit Form</button>}
      </form>
    </div>
  );
}

export default Forms;
