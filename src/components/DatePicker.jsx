import React from 'react';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// EXPLAIN COMPONENT
const DatePicker = (props) => {
  const [startDate, setDate] = useState(new Date())
  return (
    <ReactDatePicker selected={startDate} id={props.id} onChange={(date) => setDate(date)} />
  );
};

export default DatePicker;