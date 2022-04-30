import React from "react";

function Modal({ deleteItem, setShowModal, item }) {
  function handleClose() {
    setShowModal(false);
  }

  function handleDelete() {
    deleteItem(item);
    handleClose();
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Warning</h3>
        </div>
        <div className="modal-body">
          <h2>Are you sure you want to delete this?</h2>
          <div className="modal-footer">
            <button onClick={handleDelete}>Yes</button>
            <button onClick={handleClose}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
