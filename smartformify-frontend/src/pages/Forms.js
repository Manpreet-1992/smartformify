// src/pages/Forms.js
import React, { useState } from "react";
import "./Forms.css";

function Forms() {
  const [formFields, setFormFields] = useState([]);

  const addTextField = () => {
    setFormFields([...formFields, { type: "text", label: "Text Field" }]);
  };

  const addCheckboxField = () => {
    setFormFields([...formFields, { type: "checkbox", label: "Checkbox Field" }]);
  };

  const handleLabelChange = (index, value) => {
    const updatedFields = [...formFields];
    updatedFields[index].label = value;
    setFormFields(updatedFields);
  };

  return (
    <div className="form-builder-page">
      <h2>🧾 Form Builder</h2>

      <div className="form-builder-controls">
        <button onClick={addTextField}>➕ Add Text Field</button>
        <button onClick={addCheckboxField}>☑️ Add Checkbox Field</button>
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
