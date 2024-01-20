import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import checkicon from '../img/check.png'
import addingtocartitem from '../img/addingtocart.png';
import iconlogo from '../img/icon-logo.png';
import carticon from '../img/shopping-bag.png';
import usericon from '../img/user.png';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import CartSidebar from '../popups/CartSidebar'; 
import { useCart } from '../../components/CartContext';
import LoginModal from '../../components/LoginModal';


const Products = () => {
  const { addToCart } = useCart();
  const [beans, setBeans] = useState([]);
  const [cartItems, setCartItems] = useState([]); // new state for cart items

  const handleAddToCart = (bean) => {
    addToCart(bean);
    setCartItems((prevCartItems) => [...prevCartItems, bean]);
    openCartModal();
  };

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
    console.log('Logging in...');
    closeModal();
  };

  const handleRegister = () => {
    console.log('Registering...');
    closeModal();
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    closeCartModal();
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };



const handleRemoveCartItem = (coffeeId) => {

  const updatedCartItems = cartItems.filter(item => item.coffeeid !== coffeeId);
  setCartItems(updatedCartItems);
};

  return (
    <div className="Productspage">
    <div className="Productheadersection">
      <div className="leftheader">
        <img className='logo-icon' src={iconlogo} alt="Your Description" />
      </div>
      <div className="centerheader">
        <nav>
            <ul>
            <li><a href='/'>HOME</a></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><a href='/'>ABOUT</a></li>
            <li><a href='/'>CONTACTS</a></li>
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
      <div className="ProductPageContent">
          <div className="beans">
            {beans.map((bean) => (
              <div className="bean" key={bean.coffeeid}>
                {bean.coffeecover && (
                  <div className='imgcontainer'>
                  <img src={`http://localhost:8801/images/`+ bean.coffeecover } width="50" height="50" alt={bean.coffeename} />

                  </div>
                )}

                <h4>{bean.coffeename}</h4>
                <span>{f.format(bean.coffeeprice)}</span>
                <button className='addCart' onClick={() => handleAddToCart(bean)}>
                <img src={addingtocartitem} alt="Add to Cart" />
             </button>
             <animated.div style={animation}>
             </animated.div>
             <Modal
                isOpen={isCartModalOpen}
                  onRequestClose={closeCartModal}
                  contentLabel="Cart Modal"
                  style={{
                      overlay: {
                        background: 'rgba(0, 0, 0, 0.2)',
                      },
                        content: {
                        border: 'none',
                        borderRadius: '1em ',
                        padding: '0',
                        maxWidth: '300px',
                        maxHeight: '400px',
                        margin: 'auto',
                        overflow: 'hidden'
                      },
                  }}
                >

                <div className="checkiconcontainermodal">
                <img className='checkiconmodal' src={checkicon} alt="Your Description" />
                </div>
                
                <p className='success_p'>Successfully added to the cart!</p>
                <button className='procceedbtn' onClick={handleOpenCart}>proceed to cart</button>
                
                </Modal>
                
              </div>
              
            ))}
          </div>
    
      </div>


    
    </div>
  );
};

export default Products;