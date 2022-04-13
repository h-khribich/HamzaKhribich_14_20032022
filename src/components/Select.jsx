import React from 'react';
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
    // height: "40px",
    borderRadius: "5px",
    backgroundColor: "aliceblue",
  }),
}

// EXPLAIN COMPONENT
const Select = (props) => {

  return (
    <ReactSelect 
      styles={customStyles}
      defaultValue={props.options[0]}
      options={props.options}
      className={"react-select"}
    />
  );
};

export default Select;