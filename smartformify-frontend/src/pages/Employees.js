// src/pages/Employees.js
import React, { useState } from "react";
import "./Employees.css";

function Employees() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Software Engineer" },
    { id: 2, name: "Jane Smith", role: "Product Manager" },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const addEmployee = () => {
    if (!name.trim() || !role.trim()) return;
    const newEmp = {
      id: Date.now(),
      name,
      role,
    };
    setEmployees([...employees, newEmp]);
    setName("");
    setRole("");
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="employees-page">
      <h2>👨‍💼 Employees</h2>

      <div className="employee-form">
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Employee Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button onClick={addEmployee}>➕ Add Employee</button>
      </div>

      <div className="employee-list">
        {employees.map((emp) => (
          <div key={emp.id} className="employee-card">
            <div>
              <strong>{emp.name}</strong>
              <p>{emp.role}</p>
            </div>
            <button onClick={() => deleteEmployee(emp.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employees;
