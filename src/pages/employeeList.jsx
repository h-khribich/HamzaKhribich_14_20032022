import React from 'react';
import { Link } from 'react-router-dom';

// EXPLAIN COMPONENT
const employeeList = () => {
  return (
    <div>
      <h1>EMPLOYEE LIST</h1>
      <Link to="/">Home</Link>
      <h1>Various components</h1>
    </div>
  );
};

export default employeeList;