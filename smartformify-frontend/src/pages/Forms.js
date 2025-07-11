// src/pages/Forms.js
import React, { useState } from "react";
import "./Forms.css";

function Forms() {
  const [fields, setFields] = useState([]);

  const addTextField = () => {
    setFields([...fields, { type: "text", label: "Text Field" }]);
  };

  const addCheckboxField = () => {
    setFields([...fields, { type: "checkbox", label: "Checkbox Field" }]);
  };

  const updateLabel = (index, newLabel) => {
    const updated = [...fields];
    updated[index].label = newLabel;
    setFields(updated);
  };

  return (
    <div className="form-builder-container">
      <h2>🧾 Form Builder</h2>
      <div className="form-actions">
        <button onClick={addTextField}>➕ Add Text Field</button>
        <button onClick={addCheckboxField}>☑️ Add Checkbox</button>
      </div>

      <form className="dynamic-form">
        {fields.map((field, index) => (
          <div key={index} className="form-field">
            <input
              type="text"
              value={field.label}
              onChange={(e) => updateLabel(index, e.target.value)}
              className="label-editor"
            />
            {field.type === "text" ? (
              <input type="text" placeholder="User input here..." disabled />
            ) : (
              <input type="checkbox" disabled />
            )}
          </div>
        ))}
        {fields.length > 0 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
}

export default Forms;
