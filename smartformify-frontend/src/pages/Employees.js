import React, { useState } from "react";
import "./Employees.css";

function Employees() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Developer" },
    { id: 2, name: "Jane Smith", role: "Designer" },
  ]);

  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");

  const handleAdd = () => {
    if (!newName.trim() || !newRole.trim()) return;
    const newEmployee = {
      id: Date.now(),
      name: newName.trim(),
      role: newRole.trim(),
    };
    setEmployees([...employees, newEmployee]);
    setNewName("");
    setNewRole("");
  };

  const startEdit = (employee) => {
    setEditId(employee.id);
    setEditName(employee.name);
    setEditRole(employee.role);
  };

  const saveEdit = () => {
    setEmployees(
      employees.map((emp) =>
        emp.id === editId ? { ...emp, name: editName.trim(), role: editRole.trim() } : emp
      )
    );
    setEditId(null);
    setEditName("");
    setEditRole("");
  };

  const cancelEdit = () => {
    setEditId(null);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="employees-container">
      <h2>Employees</h2>

      <div className="add-employee">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <button className="add-btn" onClick={handleAdd}>
          Add Employee
        </button>
      </div>

      <ul className="employee-list">
        {employees.map((emp) => (
          <li key={emp.id} className="employee-item">
            {editId === emp.id ? (
              <>
                <input
                  className="edit-input"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  className="edit-input"
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                />
                <button className="save-btn" onClick={saveEdit}>
                  Save
                </button>
                <button className="cancel-btn" onClick={cancelEdit}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="emp-name">{emp.name}</span> -{" "}
                <span className="emp-role">{emp.role}</span>
                <button className="edit-btn" onClick={() => startEdit(emp)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(emp.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
