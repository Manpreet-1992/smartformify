import React, { useState, useEffect } from "react";
import "./Forms.css";

function Forms() {
  // Form fields state - array of { id, type, label, options }
  const [fields, setFields] = useState(() => {
    // Load saved form from localStorage if any
    const saved = localStorage.getItem("smartformify_form");
    return saved ? JSON.parse(saved) : [];
  });

  // State for submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Save form fields to localStorage on change
  useEffect(() => {
    localStorage.setItem("smartformify_form", JSON.stringify(fields));
  }, [fields]);

  // Add new field with default label
  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: type === "checkbox" ? "Checkbox Label" : "Text Label",
      options: type === "dropdown" || type === "radio" ? ["Option 1", "Option 2"] : [],
    };
    setFields([...fields, newField]);
  };

  // Update field label
  const updateLabel = (id, label) => {
    setFields(fields.map(f => (f.id === id ? { ...f, label } : f)));
  };

  // Update options for dropdown or radio fields
  const updateOptions = (id, optionsStr) => {
    const options = optionsStr.split(",").map(opt => opt.trim()).filter(Boolean);
    setFields(fields.map(f => (f.id === id ? { ...f, options } : f)));
  };

  // Remove field
  const removeField = (id) => {
    setFields(fields.filter(f => f.id !== id));
  };

  // Handle form submit: gather data and show below
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    fields.forEach(field => {
      if (field.type === "checkbox") {
        formData[field.label] = e.target[field.id]?.checked || false;
      } else if (field.type === "radio") {
        formData[field.label] = e.target[field.id]?.value || "";
      } else {
        formData[field.label] = e.target[field.id]?.value || "";
      }
    });
    setSubmittedData(formData);
  };

  return (
    <div className="form-builder-container">
      <h2>🧾 Form Builder</h2>

      <div className="buttons">
        <button onClick={() => addField("text")}>Add Text Field</button>
        <button onClick={() => addField("checkbox")}>Add Checkbox Field</button>
        <button onClick={() => addField("radio")}>Add Radio Buttons</button>
        <button onClick={() => addField("dropdown")}>Add Dropdown</button>
      </div>

      <form onSubmit={handleSubmit} className="form-builder-form">
        {fields.length === 0 && <p>No fields added yet.</p>}
        {fields.map(field => (
          <div key={field.id} className="form-field">
            <input
              type="text"
              value={field.label}
              onChange={e => updateLabel(field.id, e.target.value)}
              placeholder="Field label"
              className="field-label-input"
            />

            {(field.type === "dropdown" || field.type === "radio") && (
              <input
                type="text"
                className="field-options-input"
                placeholder="Options (comma separated)"
                value={field.options.join(", ")}
                onChange={e => updateOptions(field.id, e.target.value)}
              />
            )}

            <button
              type="button"
              onClick={() => removeField(field.id)}
              className="remove-button"
            >
              Remove
            </button>

            <div className="field-input">
              {field.type === "text" && (
                <input type="text" name={field.id} placeholder={field.label} disabled />
              )}
              {field.type === "checkbox" && (
                <>
                  <input type="checkbox" name={field.id} disabled />
                  <label>{field.label}</label>
                </>
              )}
              {field.type === "radio" && (
                field.options.map((opt, idx) => (
                  <label key={idx}>
                    <input
                      type="radio"
                      name={field.id}
                      value={opt}
                      disabled
                    />
                    {opt}
                  </label>
                ))
              )}
              {field.type === "dropdown" && (
                <select name={field.id} disabled>
                  {field.options.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        ))}

        {fields.length > 0 && (
          <button type="submit" className="submit-button">Submit</button>
        )}
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Forms;
