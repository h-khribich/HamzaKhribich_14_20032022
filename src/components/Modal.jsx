import React from 'react';
import { FaTimesCircle } from "react-icons/fa"
import { IconContext } from "react-icons";

const Modal = () => {
  return (
    <div className='modal'>
      <div className='modal-message'>
        Employee successfully created!

      <IconContext.Provider value={{ color: "white", style: {width: "1.4em", height: "1.4em"} }}>
        <span className='modal-close-btn'>
          <FaTimesCircle />
        </span>
      </IconContext.Provider>

      </div>
    </div>
  );
};

export default Modal;