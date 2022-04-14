import React from 'react';
import { useEffect } from 'react';
import { useImperativeHandle } from 'react';
import { useState } from 'react';
import ReactSelect from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    color: state.isSelected || state.isFocused ? "white" : "midnightblue",
    backgroundColor: state.isSelected || state.isFocused ? "#2727a6" : "aliceblue",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "midnightblue",
  }),
  container: (provided) => ({
    ...provided,
    borderRadius: "5px",
    backgroundColor: "aliceblue",
  }),
}

// EXPLAIN COMPONENT
const Select = React.forwardRef((props, ref) => {
  const [selectedValue, setSelectedValue] = useState("");

  // Enables the parent component to access this child's state with the getMyState function
  useImperativeHandle(ref, () => ({ getMyState: () => { return selectedValue }}), [selectedValue])

  // Default state is default value shown to user in select
  useEffect(() => {
    setSelectedValue(props.options[0].value)
  }, [props.options])

  return (
    <ReactSelect 
      styles={customStyles}
      defaultValue={props.options[0]}
      options={props.options}
      className={"react-select"}
      onChange={(item) => setSelectedValue(item.value)}
    />
  );
});

export default Select;