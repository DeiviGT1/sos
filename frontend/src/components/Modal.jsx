import React from "react";
import "./Modal.css";

function Modal({ children, isOpen, onClose }) {
  const handleClose = () => {
    // Call the onClose function
    onClose();

    // Perform the redirect after closing the modal
    window.location.href = "/";
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__close" onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;