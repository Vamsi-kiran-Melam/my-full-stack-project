import React, { useState } from "react";
import axios from "axios";
import './AddEmployee.css'; // CSS styles file

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    place: "",
    salary: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/crud-project/api/employee", employee)
      .then((response) => {
        console.log("Employee added successfully:", response.data);
        alert("Employee added successfully");
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        alert("Error adding employee");
      });
  };

  return (
    <div className="employee-form-container">
      <h2>Add Employee</h2>
      <form className="employee-form" onSubmit={submitHandler}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
            placeholder="Enter employee name"
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <input
            type="text"
            className="form-control"
            name="role"
            value={employee.role}
            onChange={handleInputChange}
            placeholder="Enter role"
          />
        </div>

        <div className="form-group">
          <label>Place</label>
          <input
            type="text"
            className="form-control"
            name="place"
            value={employee.place}
            onChange={handleInputChange}
            placeholder="Enter employee's place"
          />
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            className="form-control"
            name="salary"
            value={employee.salary}
            onChange={handleInputChange}
            placeholder="Enter salary"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
