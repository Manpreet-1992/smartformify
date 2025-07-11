// src/pages/Forms.js
import React, { useState, useEffect } from "react";
import "./Forms.css";

function Forms() {
  const [formFields, setFormFields] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const savedForm = localStorage.getItem("savedForm");
    if (savedForm) {
      setFormFields(JSON.parse(savedForm));
    }
  }, []);

  // Save formFields to localStorage every time they change
  useEffect(() => {
    localStorage.setItem("savedForm", JSON.stringify(formFields));
  }, [formFields]);

  const addTextField = () => {
    setFormFields([...formFields, { type: "text", label: "Text Field" }]);
  };

  const addCheckboxField = () => {
    setFormFields([...formFields, { type: "checkbox", label: "Checkbox Field" }]);
  };

  const handleLabelChange = (index, value) => {
    const updated = [...formFields];
    updated[index].label = value;
    setFormFields(updated);
  };

  const clearForm = () => {
    if (window.confirm("Clear the form? This cannot be undone.")) {
      setFormFields([]);
      localStorage.removeItem("savedForm");
    }
  };

  return (
    <div className="form-builder-page">
      <h2>🧾 Form Builder</h2>

      <div className="form-builder-controls">
        <button onClick={addTextField}>➕ Add Text Field</button>
        <button onClick={addCheckboxField}>☑️ Add Checkbox Field</button>
        <button onClick={clearForm} className="danger-btn">🗑️ Clear Form</button>
      </div>

      <form className="form-preview">
        {formFields.map((field, index) => (
          <div className="form-field" key={index}>
            <input
              type="text"
              className="label-input"
              value={field.label}
              onChange={(e) => handleLabelChange(index, e.target.value)}
            />
            {field.type === "text" && <input type="text" placeholder="Enter text..." />}
            {field.type === "checkbox" && <input type="checkbox" />}
          </div>
        ))}

        {formFields.length > 0 && <button className="submit-btn">Submit</button>}
      </form>
    </div>
  );
}

export default Forms;
