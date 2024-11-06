import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddEmployee from './component/AddEmployee';
import UpdateEmployee from './component/UpdateEmployee';
import DeleteEmployee from './component/DeleteEmployee';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
       <Navbar /> 
       <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/update" element={<UpdateEmployee />} />
        <Route path="/delete" element={<DeleteEmployee />} />
      </Routes>
      
    </Router>
  );
}

export default App;
