import React, { useState } from "react";
import axios from "axios";
import './DeleteEmployee.css'; // Include your CSS for styling

const DeleteEmployee = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const deleteEmployee = (e) => {
    e.preventDefault();

    if (!employeeId) {
      setError("Please enter a valid employee ID.");
      return;
    }

    axios
      .delete(`http://localhost:8080/crud-project/api/employee/${employeeId}`)
      .then((response) => {
        setMessage(response.data); // Success message from backend
        setError(""); // Clear any error messages
      })
      .catch((error) => {
        // Error handling
        if (error.response && error.response.status === 404) {
          setError("Employee not found.");
        } else {
          setError("An error occurred while deleting the employee.");
        }
        setMessage(""); // Clear success message
      });
  };

  return (
    <div className="delete-employee-container">
      <h2>Delete Employee</h2>
      <form className="delete-employee-form" onSubmit={deleteEmployee}>
        <div className="form-group">
          <label>Employee ID</label>
          <input
            type="number"
            className="form-control"
            value={employeeId}
            onChange={handleIdChange}
            placeholder="Enter employee ID"
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Delete Employee
        </button>
      </form>

      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default DeleteEmployee;
