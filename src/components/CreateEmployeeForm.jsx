// import { current } from '@reduxjs/toolkit';
import React from 'react';
import { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { addEmployee, updateEmployeeTable } from '../features/addEmployee/employeesTableSlice';
// import { toggleModal } from './Modal';
import DatePicker from './DatePicker';
import Select from './Select';
import { stateOptions } from '../app/selectOptions/stateOptions';
import { departmentOptions } from '../app/selectOptions/departementOptions';
import { toggleModal } from './Modal';
import axios from 'axios'


// EXPLAIN COMPONENT
const CreateEmployeeForm = () => {
  // const dispatch = useDispatch();
  const firstName = useRef('');
  const lastName = useRef('');
  const dateOfBirth = useRef('');
  const startDate = useRef('');
  const street = useRef('');
  const city = useRef('');
  const state = useRef('');
  const zipCode = useRef('');
  const department = useRef('');

  // EXPLAIN FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      dateOfBirth: dateOfBirth.current.getMyState(),
      startDate: startDate.current.getMyState(),
      street: street.current.value,
      city: city.current.value,
      state: state.current.getMyState(),
      zipCode: zipCode.current.value,
      department: department.current.getMyState(),
    }

    await axios.post('/employees', employeeData)

    toggleModal();
  }
 
  return (
    <form action='#' id='create-employee'>
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" ref={firstName} />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" ref={lastName} />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker id={"date-of-birth"} ref={dateOfBirth} />

      <label htmlFor="start-date">Start Date</label>
      <DatePicker id={"start-date"} ref={startDate} />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={street} />

        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={city} />

        <label htmlFor="state">State</label>
        <Select options={stateOptions} ref={state} />

        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" ref={zipCode} />
      </fieldset>

      <label htmlFor="department">Department</label>
      <Select options={departmentOptions} ref={department} />

      <div className="save-btn-container">
        <input type='submit' className='save-btn' value="Save" onClick={(e) => handleSubmit(e)} />
      </div>
    </form>
  );
};

export default CreateEmployeeForm;