import React from 'react';
import { Link } from 'react-router-dom';
import CreateEmployeeForm from '../components/CreateEmployeeForm';

// EXPLAIN FUNCTION
const saveEmployee = () => {

}

// EXPLAIN COMPONENT
const createEmployee = () => {
  return (
    <div>
      <div className='title'>
        <h1>HRnet</h1>
      </div>
      <div className='container'>
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <CreateEmployeeForm />
        <button onClick={saveEmployee()}>Save</button>
      </div>
    </div>
  );
};

export default createEmployee;