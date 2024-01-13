import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import iconlogo from '../pages/img/icon-logo.png';
import carticon from '../pages/img/shopping-bag.png';
import usericon from '../pages/img/user.png';
import CartSidebar from '../pages/popups/CartSidebar'; // Update the path based on your project structure
import axios from 'axios'
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import LoginModal from '../../components/LoginModal';



const Navbar= () => {
    

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

  const f = new Intl.NumberFormat("en-us", {
    currency: "PHP",
    style: "currency",
  });

  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);



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

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };
  
  const closeCartModal = () => {
    setIsCartModalOpen(false);
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

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };


// In your Home or Products component
const handleRemoveCartItem = (coffeeId) => {
  // Implement logic to remove the item with the given coffeeId from the cart
  // You can use setCartItems to update the cart state
  const updatedCartItems = cartItems.filter((item) => item.coffeeid !== coffeeId);
  setCartItems(updatedCartItems);
};

  return (
    <div>
    <div className="Productheadersection">
    <div className="leftheader">
      <img className='logo-icon' src={iconlogo} alt="Your Description" />
    </div>
    <div className="centerheader">
      <nav>
          <ul>
          <li><a href='/home'>HOME</a></li>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><a href='#section3'>ABOUT</a></li>
          <li><a href='#section4'>CONTACTS</a></li>
          </ul>
      </nav>
    </div>
    <div className="rightheader">
        <button className='logo-icon' id="cart-button" onClick={handleOpenCart}><img className='cart-button' src={carticon} alt="Your Description" /></button> 

        <CartSidebar isOpen={isCartOpen} handleClose={handleCloseCart} cartItems={cartItems} handleRemoveItem={handleRemoveCartItem} />
        <button onClick={openModal}><img className='logo-icon' src={usericon} alt="Your Description" /></button>
        <LoginModal isOpen={modalIsOpen} closeModal={closeModal} handleLogin={handleLogin} handleRegister={handleRegister} />
       
    </div>
  </div>  
    </div>
  )
}

export default Navbar
