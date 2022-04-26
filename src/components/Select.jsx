import React from 'react';
import { useEffect } from 'react';
import { useImperativeHandle } from 'react';
import { useState } from 'react';
import ReactSelect from "react-select";

/**
 * Select component custom styling
 */
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

/**
 * Select component - Use of forwardRef to be able to pass a ref to child component
 * @param {String} props - string id
 * @param {Object} ref - Will be updated to parent component thanks to imperativeHandle hook
 */
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
      id={props.id}
    />
  );
});

export default Select;