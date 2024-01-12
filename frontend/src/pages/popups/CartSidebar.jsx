// CartSidebar.js
import React from 'react';
import './CartSidebar.css';
import { useSpring, animated } from 'react-spring';


const CartSidebar = ({ isOpen, handleClose, cartItems }) => {
  const f = new Intl.NumberFormat('en-us', {
    currency: 'PHP',
    style: 'currency',
  });
     const sidebarAnimation = useSpring({
      transform: isOpen ? 'translateX(0%)' : 'translateX(100%)', // Slide in from the right
    });
  
    const overlayAnimation = useSpring({
      opacity: isOpen ? 0.5 : 0, // Semi-transparent overlay when the sidebar is open
    });
    
  return (
    <>
    <animated.div style={sidebarAnimation} className="sidebar-container">
      <div className="sidebar-content">
        <div className="sidebarheader">
          <h2>Your Cart</h2>
          <button className='backtoshopping' onClick={handleClose}>Continue Shopping</button>
        </div>
        <div className="carttableheader">
          <p className='prodheader'>PRODUCT</p>
          <p>QUANTITY</p>
          <p>TOTAL</p>
        </div>
        <div className="carttablecontainer">
          <table className='tableproduct'>
            <tbody>
            {cartItems.map((item) => (
              <tr key={item.coffeeid}>
                <td>{item.coffeename}</td>
                <td>1</td> {/* Placeholder for quantity, you can modify as needed */}
                <td>{f.format(item.coffeeprice)}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
          <div className="checkoutbtncontainer">
               <button className='checkoutbtn'>Check Out</button>
          </div>
      </div>

    </animated.div>
  </>
);
};

export default CartSidebar;
