import React from 'react';
import { Link } from 'react-router-dom';

const createEmployee = () => {
  return (
    <div>
      <h1>CREATE EMPLOYEE</h1>
      <Link to="/employee-list">Employee list</Link>
      <h1>Various components</h1>
    </div>
  );
};

export default createEmployee;