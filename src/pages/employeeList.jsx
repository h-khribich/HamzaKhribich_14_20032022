import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/Table';
import { columns } from '../app/employeeDataTable/columns';
import { FaHome } from "react-icons/fa";
import { useSelector } from 'react-redux';

/**
 * Employee List page
 */
const EmployeeList = () => {
  const { loading, employees } = useSelector(state => state.employeeTable)

  return (
    <div className='employee-table-page'>
      <header className='header'>
        <h1>Current Employees</h1>
        <Link to="/" className='header-link'><FaHome /> Home</Link>
      </header>
      <div className='employee-table-container'>
        {
          loading ? <p>Loading...</p> : <Table columns={columns} data={employees} />
        } 
      </div>
    </div>
  );
};

export default EmployeeList;