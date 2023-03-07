import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto',
    padding: '20px',
    borderRadius: '5px'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

Modal.setAppElement('#__next');

function ConfirmationModal({ isOpen, onRequestClose, onConfirm, title, message }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <h2>{title}</h2>
      <p>{message}</p>
      <div className="modal-footer">
        <button className="cancel-button" onClick={onRequestClose}>
          Cancel
        </button>
        <button className="delete-button" onClick={onConfirm}>
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default ConfirmationModal;