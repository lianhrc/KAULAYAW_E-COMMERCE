// CartSidebar.js
import React from 'react';
import './CartSidebar.css';
import { useSpring, animated } from 'react-spring';

const CartSidebar = ({ isOpen, handleClose }) => {
     // Create an animation object
  const animation = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)', // Slide in from the right
  });
    
  return (
    <animated.div style={animation} className="sidebar-container">
    <div className="sidebar-content">
      <h2>Your Cart</h2>
      {/* Add your cart content here */}
      <button onClick={handleClose}>Close Cart</button>
    </div>
  </animated.div>
  );
};

export default CartSidebar;
