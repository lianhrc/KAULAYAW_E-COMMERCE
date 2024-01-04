import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Use react-spring for animation
  const animation = useSpring({
    opacity: modalIsOpen ? 1 : 0,
    transform: modalIsOpen ? 'scale(1)' : 'scale(0.8)',
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        style={{
          overlay: {
            background: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            border: 'none',
            borderRadius: '10px',
            maxWidth: '300px',
            margin: 'auto',
          },
        }}
      >
        <animated.div style={animation}>
          <h2>Login or Register</h2>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Register</button>
          <button onClick={closeModal}>Close Modal</button>
        </animated.div>
      </Modal>
    </div>
  );
};

export default Products;
