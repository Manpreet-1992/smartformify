import React, { useState } from "react";

function FormBuilder() {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

  // Add new field
  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: "",
      options: [],  // for dropdown or checkbox group
    };
    setFields([...fields, newField]);
  };

  // Update field label
  const updateLabel = (id, label) => {
    setFields(fields.map(f => (f.id === id ? { ...f, label } : f)));
  };

  // Handle input change in form
  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  // Render inputs based on field type
  const renderInput = (field) => {
    switch(field.type) {
      case "text":
        return (
          <input
            type="text"
            value={formData[field.id] || ""}
            onChange={e => handleChange(field.id, e.target.value)}
          />
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={!!formData[field.id]}
            onChange={e => handleChange(field.id, e.target.checked)}
          />
        );
      default:
        return null;
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted with data: " + JSON.stringify(formData));
  };

  return (
    <div>
      <h2>Form Builder</h2>
      <button onClick={() => addField("text")}>Add Text Field</button>
      <button onClick={() => addField("checkbox")}>Add Checkbox Field</button>

      <form onSubmit={handleSubmit}>
        {fields.map(field => (
          <div key={field.id} style={{ marginBottom: "10px" }}>
            <input
              placeholder="Label"
              value={field.label}
              onChange={e => updateLabel(field.id, e.target.value)}
            />
            {renderInput(field)}
          </div>
        ))}

        {fields.length > 0 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
}

export default FormBuilder;
