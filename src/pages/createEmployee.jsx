import React from 'react';
import { Link } from 'react-router-dom';
import CreateEmployeeForm from '../components/CreateEmployeeForm';
import Modal from '../components/Modal';

// EXPLAIN FUNCTION
export const handleModal = () => {
    const body = document.body
    const content = document.querySelector(".content")
    const modalContainer = document.querySelector(".modal-container")

    body.classList.toggle("no-scroll")
    content.classList.toggle("content-blurred")
    modalContainer.classList.toggle("hidden")
}

// EXPLAIN FUNCTION
const saveEmployee = () => {

  handleModal()
}

// EXPLAIN COMPONENT
const createEmployee = () => {
  return (
    <div className='create-employee-page'>
      <div className='content'>
        <div className='title'>
          <h1>HRnet</h1>
        </div>
        <div className='container'>
          <Link to="/employee-list">View Current Employees</Link>
          <h2>Create Employee</h2>
          <CreateEmployeeForm />
          <button className='modal-button' onClick={(e) => saveEmployee()}>Save</button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default createEmployee;