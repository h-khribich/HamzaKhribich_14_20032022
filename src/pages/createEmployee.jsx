import React from 'react';
import { Link } from 'react-router-dom';
import CreateEmployeeForm from '../components/CreateEmployeeForm';
import Modal from '../components/Modal';
import { FaClipboardList } from 'react-icons/fa'

/**
 * Create Employee Page
 */
const CreateEmployee = () => {
  
  return (
    <div className='create-employee-page'>

    <header className='header'>
      <div className='logo-container'>
        <img src='./assets/hrnet-logo.png' alt='HRnet logo' id='hrnet-logo'></img>
        <h1 className='title'>HRnet</h1>
      </div>
      <div className='link-container'>
        <h2 className='link-title'>Create Employee</h2>
        <Link to="/employee-list"className='header-link'>View Current Employees <FaClipboardList /></Link>
      </div>
      <img src='./assets/header-illustration.svg' alt='' id='header-illustration'></img>
    </header>

    <div className='form-container'>
      <CreateEmployeeForm />
    </div>

    <Modal message={'Employee successfully created!'} />
    </div>
  );
};

export default CreateEmployee;