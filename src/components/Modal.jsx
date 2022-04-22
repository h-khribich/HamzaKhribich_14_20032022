import React from 'react';
import { FaTimesCircle } from "react-icons/fa"
import { IconContext } from "react-icons";

// EXPLAIN FUNCTION
export const toggleModal = () => {
  const modalContainer = document.querySelector(".modal-container")

  document.body.classList.toggle("no-scroll")
  modalContainer.classList.toggle("hidden")
}

const Modal = (props) => {
  return (
    <div className='modal-container hidden'>
      <div className='modal'>
        <div className='modal-message'>
          {props.message}

          <IconContext.Provider value={{ color: "white", style: {width: "1.4em", height: "1.4em"} }}>
            <span className='modal-close-btn' onClick={(e) => toggleModal()}>
              <FaTimesCircle />
            </span>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Modal;