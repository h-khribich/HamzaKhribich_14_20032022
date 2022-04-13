// import { current } from '@reduxjs/toolkit';
import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/addEmployee/employeesTableSlice';
import { toggleModal } from './Modal';
import DatePicker from './DatePicker';
import UsStatePicker from './UsStatePicker';

// EXPLAIN COMPONENT
const CreateEmployeeForm = () => {
  const dispatch = useDispatch();
  
  const firstName = useRef(null);
  const lastName = useRef(null);
  const street = useRef(null);
  const city = useRef(null);
  const zipCode = useRef(null);
  const department = useRef(null);

  // EXPLAIN FUNCTION
  const handleSubmit = (e) => {
  e.preventDefault();
  
  const employeeData = {
    firstName: firstName.current.value,
    lastName: lastName.current.value,
    dateOfBirth: document.getElementById("date-of-birth").value,
    startDate: document.getElementById("start-date").value,
    street: street.current.value,
    city: city.current.value,
    state: document.getElementById("state").value,
    zipCode: zipCode.current.value,
    department: department.current.value,
  }

  dispatch(addEmployee(employeeData));
  toggleModal();
  }

  return (
    <form action='#' id='create-employee'>
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" ref={firstName} />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" ref={lastName} />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker id={"date-of-birth"} />

      <label htmlFor="start-date">Start Date</label>
      <DatePicker id={"start-date"} />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={street} />

        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={city} />

        <label htmlFor="state">State</label>
        <UsStatePicker />

        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" ref={zipCode} />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select name="department" id="department" ref={department}>
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>

      <div className="save-btn-container">
        <input type='submit' className='save-btn' value="Save" onClick={(e) => handleSubmit(e)} />
      </div>
    </form>
  );
};

export default CreateEmployeeForm;

/*
useEffect(() => {
    let employeeData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      dateOfBirth: document.getElementById("dateOfBirth").value,
      startDate: document.getElementById("startDate").value,
      street: document.getElementById("street").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zipCode: document.getElementById("zip-code").value,
      department: document.getElementById("department").value,
    }
  }, [])
*/