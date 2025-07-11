import React, { useState } from "react";
import "./Employees.css";

const Employees = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Alice Johnson", role: "Developer", attendance: "Present" },
    { id: 2, name: "Bob Smith", role: "Designer", attendance: "Absent" },
    { id: 3, name: "Carol Lee", role: "Manager", attendance: "Present" },
  ]);

  return (
    <div className="employees-container">
      <h2>👥 Employee Tracking</h2>
      <table className="employees-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(({ id, name, role, attendance }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{role}</td>
              <td>{attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
