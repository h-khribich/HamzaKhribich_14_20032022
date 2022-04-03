import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = () => {
  const [startDate, setDate] = useState(new Date())
  return (
    <DatePicker selected={startDate} onChange={(date) => setDate(date)} />
  );
};

export default ReactDatePicker;