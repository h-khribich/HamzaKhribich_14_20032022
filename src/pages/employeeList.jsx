import React from 'react';
import { Link } from 'react-router-dom';
// import Table from '../components/Table';


// <Table />

// EXPLAIN COMPONENT
const employeeList = () => {
  return (
    <div>
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default employeeList;