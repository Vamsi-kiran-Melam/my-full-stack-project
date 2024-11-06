import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './UpdateEmployee.css';

const UpdateEmployee = () => {
  const { id } = useParams();  // Captures `id` from the URL
  const [updateEmployee, setUpdateEmployee] = useState({
    id: null,
    name: "",
    role: "",
    place: "",
    salary: "",
  });

  // Fetch employee data
  useEffect(() => {
    if (!id) {
      alert("Invalid ID");
      return;
    }

    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/crud-project/api/employee/${id}`
        );
        setUpdateEmployee(response.data);  // Directly fill the form with the fetched employee data
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchEmployee();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      alert("Invalid ID");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/crud-project/api/employee/${id}`,
        updateEmployee
      );
      if (response.status === 200) {
        alert("Employee updated successfully!");
      } else {
        alert("Failed to update employee. Please try again.");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Failed to update employee. Please try again.");
    }
  };

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateEmployee({
      ...updateEmployee,
      [name]: value,
    });
  };

  return (
    <div className="update-employee-container">
      <h1>Update Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={updateEmployee.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={updateEmployee.role}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Place</label>
          <input
            type="text"
            name="place"
            value={updateEmployee.place}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={updateEmployee.salary}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;