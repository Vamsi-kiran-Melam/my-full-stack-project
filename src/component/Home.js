import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Inline CSS styles
  const styles = {
    employeeList: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
    },
    header: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '0 auto',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    tableHeader: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      textAlign: 'left',
      border: '1px solid #ddd',
    },
    tableCell: {
      padding: '10px',
      textAlign: 'left',
      border: '1px solid #ddd',
    },
    evenRow: {
      backgroundColor: '#f2f2f2',
    },
    hoverRow: {
      backgroundColor: '#ddd',
    },
    loading: {
      textAlign: 'center',
      fontSize: '20px',
      color: '#4CAF50',
    },
  };

  // Fetch employee data using axios
  useEffect(() => {
    axios.get('http://localhost:8080/crud-project/api/')
      .then(response => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.employeeList}>
        
      <h1 style={styles.header}>Employee List</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>ID</th>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Role</th>
            <th style={styles.tableHeader}>Place</th>
            <th style={styles.tableHeader}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={employee.id}
              style={index % 2 === 0 ? styles.evenRow : {}}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverRow.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = ''}
            >
              <td style={styles.tableCell}>{employee.id}</td>
              <td style={styles.tableCell}>{employee.name}</td>
              <td style={styles.tableCell}>{employee.role}</td>
              <td style={styles.tableCell}>{employee.place}</td>
              <td style={styles.tableCell}>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};
export default Home;