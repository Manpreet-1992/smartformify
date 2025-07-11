import React, { useState } from "react";
import "./Employees.css";

const initialEmployees = [
  { id: 1, name: "Alice Johnson", attendance: true, tasks: ["Report Q1", "Meeting prep"] },
  { id: 2, name: "Bob Smith", attendance: false, tasks: ["Code review", "Update docs"] },
  { id: 3, name: "Charlie Davis", attendance: true, tasks: ["Client call", "Design mockup"] }
];

export default function Employees() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [search, setSearch] = useState("");

  const toggleAttendance = (id) => {
    setEmployees(prev =>
      prev.map(emp => emp.id === id ? { ...emp, attendance: !emp.attendance } : emp)
    );
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employees-container">
      <h2>👥 Employee Tracking</h2>
      <input
        type="text"
        placeholder="Search employees..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {filteredEmployees.length === 0 && <p>No employees found</p>}
      {filteredEmployees.map(emp => (
        <div key={emp.id} className="employee-card">
          <h3>{emp.name}</h3>
          <p>Status: <span className={emp.attendance ? "present" : "absent"}>
            {emp.attendance ? "Present" : "Absent"}
          </span></p>
          <button onClick={() => toggleAttendance(emp.id)}>
            Mark {emp.attendance ? "Absent" : "Present"}
          </button>
          <h4>Tasks:</h4>
          <ul>
            {emp.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
