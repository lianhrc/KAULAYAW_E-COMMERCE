// CartSidebar.js
import React from 'react';
import './CartSidebar.css';
import { useSpring, animated } from 'react-spring';

const CartSidebar = ({ isOpen, handleClose, cartItems, handleRemoveItem }) => {
  const f = new Intl.NumberFormat('en-us', {
    currency: 'PHP',
    style: 'currency',
  });

  const sidebarAnimation = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
  });

  const overlayAnimation = useSpring({
    opacity: isOpen ? 0.5 : 0,
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
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <tr key={item.coffeeid}>
                      <td>{item.coffeename}</td>
                      <td>1</td>
                      <td>{f.format(item.coffeeprice)}</td>
                      <td>
                        <button onClick={() => handleRemoveItem(item.coffeeid)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">Your cart is empty.</td>
                  </tr>
                )}
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
