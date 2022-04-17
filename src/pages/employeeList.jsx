import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/Table';
import { columns } from '../app/employeeDataTable/columns';
import { FaHome } from "react-icons/fa";
// import { employeeData } from '../app/employeeDataTable/employeeData';

// EXPLAIN COMPONENT
const EmployeeList = () => {
  return (
    <div className='employee-table-page'>
      <header className='header'>
        <h1>Current Employees</h1>
        <Link to="/" className='header-link'><FaHome /> Home</Link>
      </header>
      <div className='employee-table-container'>
        <Table columns={columns} />
      </div>
    </div>
  );
};

export default EmployeeList;