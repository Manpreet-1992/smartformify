// src/pages/Employees.js
import React, { useState } from "react";
import "./Employees.css";

function Employees() { 
    // eslint-disable-next-line no-unused-vars
  const [employees, setEmployees] = useState([
    { id: 1, name: "Alice Johnson", role: "Developer", status: "Active" },
    { id: 2, name: "Bob Smith", role: "Designer", status: "Active" },
    { id: 3, name: "Charlie Lee", role: "Project Manager", status: "Inactive" },
  ]);

  return (
    <div className="employees-container">
      <h2>👥 Employee Tracking</h2>
      <table className="employees-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(({ id, name, role, status }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{role}</td>
              <td className={status.toLowerCase()}>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
