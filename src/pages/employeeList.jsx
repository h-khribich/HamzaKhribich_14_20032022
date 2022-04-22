import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/Table';
import { columns } from '../app/employeeDataTable/columns';
import { FaHome } from "react-icons/fa";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';



// EXPLAIN COMPONENT
const EmployeeList = () => {

  const [employeeList, setEmployeeList] = useState([])

  const getEmployees = async () => {
    const { data } = await axios.get('/employees')
    setEmployeeList(data)
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className='employee-table-page'>
      <header className='header'>
        <h1>Current Employees</h1>
        <Link to="/" className='header-link'><FaHome /> Home</Link>
      </header>
      <div className='employee-table-container'>
        {
          employeeList.length ? <Table columns={columns} data={employeeList} /> : <p>Loading...</p>
        }
      </div>
    </div>
  );
};

export default EmployeeList;