// CartSidebar.js
import React from 'react';
import './CartSidebar.css';
import { useSpring, animated } from 'react-spring';
import { useCart } from '../../components/CartContext';
import trashicon from '../img/trash.png'


const CartSidebar = ({ isOpen, handleClose, handleRemoveItem }) => {
  const { cartItems,removeFromCart, updateCartItemQuantity   } = useCart();
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
  

  const handleIncreaseQuantity = (itemId) => {
    updateCartItemQuantity(itemId, 1); // Increase quantity by 1
  };

  const handleDecreaseQuantity = (itemId) => {
    updateCartItemQuantity(itemId, -1); // Decrease quantity by 1
  };

  return (
    <>
    <animated.div style={overlayAnimation} className="overlay" onClick={handleClose}></animated.div>
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
            <p></p>
          </div>
          <div className="carttablecontainer">
            <table className='tableproduct'>
              <tbody>
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <tr key={item.coffeeid}>
                      <td>{item.coffeename}</td>
                      <td className='quantitybtn'>
                      <button className='minusquanbtn' onClick={() => updateCartItemQuantity(item.coffeeid, -1)}>-</button>
                        {item.quantity} {/* Display the quantity */}
                      <button className='addquanbtn' onClick={() => updateCartItemQuantity(item.coffeeid, 1)}>+</button>
                      </td>
                      <td>{f.format(item.totalPrice )}</td>
                      <td>
                      <button onClick={() => removeFromCart(item.coffeeid)}>
                      <img className='trashicon' src={trashicon} alt="delete" />
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
