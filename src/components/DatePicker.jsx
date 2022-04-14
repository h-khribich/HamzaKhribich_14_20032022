import React from 'react';
import { useImperativeHandle } from 'react';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


let options = { month: 'numeric', day: 'numeric', year: 'numeric' };

// EXPLAIN COMPONENT
const DatePicker = React.forwardRef((props, ref) => {
  const [startDate, setDate] = useState(new Date())

  // Enables the parent component to access this child's state with the getMyState function
  useImperativeHandle(ref, () => ({ getMyState: () => { return startDate.toLocaleString('en-US', options) }}), [startDate])
  
  return (
    <ReactDatePicker selected={startDate} id={props.id} onChange={(date) => setDate(date)} />
  );
});

export default DatePicker;