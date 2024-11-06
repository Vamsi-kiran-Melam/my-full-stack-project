import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/update" style={styles.navLink}>Update Employee</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/add" style={styles.navLink}>Add Employee</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/delete" style={styles.navLink}>Delete Employee</Link>
        </li>
      </ul>
    </div>
  );
};

// Inline CSS for navbar styling
const styles = {
  navbar: {
    backgroundColor: '#333', // dark background color
    padding: '10px 0', // some padding around the navbar
    textAlign: 'center',
  },
  navList: {
    listStyleType: 'none', // remove bullets
    padding: 0,
    margin: 0,
    display: 'flex', // to align items horizontally
    justifyContent: 'center', // center the items
  },
  navItem: {
    margin: '0 15px', // space between the items
  },
  navLink: {
    color: 'white', // white text color
    textDecoration: 'none', // remove underline
    fontSize: '18px', // font size for links
    padding: '5px 10px', // some padding around the text
    borderRadius: '5px', // rounded corners
    transition: 'background-color 0.3s', // smooth transition on hover
  },
};

export default Navbar;
