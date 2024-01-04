import React, { useState } from 'react';
import "./LoginModal.css"


const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in...');
    closeModal();
  };

  const handleRegister = () => {
    // Implement your register logic here
    console.log('Registering...');
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Login or Register</h2>

            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
