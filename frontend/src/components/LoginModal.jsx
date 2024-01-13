import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';  // Import axios for API calls
import iconlogo from '../pages/img/icon-logo.png';

const LoginModal = ({ isOpen, closeModal, handleLogin, handleRegister }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [beans, setBeans] = useState([]);
  const [cartItems, setCartItems] = useState([]); // new state for cart items

  useEffect(() => {
    const fetchAllBeans = async () => {
      try {
        const res = await axios.get("http://localhost:8801/beans");
        setBeans(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllBeans();
  }, []);

  // ... (your other states and functions)

  const handleSwitchForm = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  // Use react-spring for animation
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'scale(1)' : 'scale(0.8)',
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Login Modal"
      style={{
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          border: 'none',
          borderRadius: '2em ',
          padding: '0',
          maxWidth: '500px',
          margin: 'auto',
          background: '#F8EBE2',
        },
      }}
    >
      <div className="modalimgcontainer">
        <img className='logo-icon-modal' src={iconlogo} alt="Your Description" />
      </div>
      <animated.div style={animation}>
      
      {isSignup ? (
          <div>
          <div className="inputfieldcontainer">
          <div className="usernamecontainer">
          <div className="iconinput"></div>
                <input type="text" placeholder='Register Username' />
            </div>
            <div className="passwordcontainer">
                <div className="iconinput2"></div>
                <input type="text" placeholder='Register phonenumber' />
            </div>
        </div>
          </div>
          ) : (
              <div className="inputfieldcontainer">
              <div className="usernamecontainer">
              <div className="iconinput"></div>
                    <input type="text" placeholder='username' />
                </div>
                <div className="passwordcontainer">
                    <div className="iconinput2"></div>
                    <input type="password" placeholder='password' />
                </div>
            </div>
          )}
        <div className="buttonmodal">
          <button className='switch-btn' onClick={handleSwitchForm}>
            {isSignup ? 'Switch to Login' : 'Switch to Signup'}
          </button>
          <button className='signupbtn' onClick={isSignup ? handleRegister : handleLogin}>
            {isSignup ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </animated.div>
    </Modal>
  );
};

export default LoginModal;
