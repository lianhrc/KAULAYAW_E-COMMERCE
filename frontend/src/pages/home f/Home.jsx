import React from 'react';
import iconlogo from '../img/icon-logo.png';
import carticon from '../img/shopping-bag.png';
import usericon from '../img/user.png';
import Modal from 'react-modal';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CartSidebar from '../popups/CartSidebar'; // Update the path based on your project structure
import { useNavigate, Link } from 'react-router-dom'
import kaulayawvid from "../video/kaulayaw_vid_ads.mp4"
import { useCart } from '../../components/CartContext';




const Home = () =>{
  
  const { addToCart } = useCart();
  const [cartItems, setCartItems] = useState([]); // new state for cart items

  const handleAddToCart = (bean) => {
    addToCart(bean);
    setCartItems((prevCartItems) => [...prevCartItems, bean]);
    openCartModal();
  };


  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    // Replace '/product' with the actual path you want to navigate to
    navigate('/products');
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalExploreIsOpen, setmodalExploreIsOpen] = useState(false);

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

  const openExploreModal = () => {
    setmodalExploreIsOpen(true);
  };

  const closeExploreModal = () => {
    setmodalExploreIsOpen(false);
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


  const [isCartModalOpen, setIsCartModalOpen] = useState(false);


  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  
  const handleRemoveCartItem = (coffeeId) => {
    // Implement logic to remove the item with the given coffeeId from the cart
    // You can use setCartItems to update the cart state
    const updatedCartItems = cartItems.filter(item => item.coffeeid !== coffeeId);
    setCartItems(updatedCartItems);
  };
  
  return (
    <div className='HomePage'>
      <div className="HomePageContainer">
          <div id="section1">
            <div className="headersection">
              <div className="leftheader">
                <img className='logo-icon' src={iconlogo} alt="Your Description" />
              </div>
              <div className="centerheader">
                <nav>
                    <ul>
                      <li><a href='#section1'>HOME</a></li>
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
                        borderRadius: '2em ',
                        padding: '0',
                        maxWidth: '500px',
                        margin: 'auto',
                        background: '#F8EBE2',
                      },
                    }}
                  >
                        <div className="modalimgcontainer">
                            <mg className='logo-icon-modal' src={iconlogo} alt="Your Description" />
                        </div>
                    <animated.div style={animation}>
                        
                        <div className="inputfieldcontainer">
                            <div className="usernamecontainer">
                                <div className="iconinput"></div>
                                <input type="text"  placeholder='username'/>
                            </div>
                            <div className="passwordcontainer">
                              <div className="iconinput2"></div>
                              <input type="password" placeholder='password'/>
                            </div>
                          </div>
                        <div className="buttonmodal">
                            <button className='signupbtn' onClick={handleRegister}>Sign up</button>
                            <button className='loginbtn'onClick={handleLogin}>Log in</button>
                        </div>
                    </animated.div>
                  </Modal>
                    
              </div>
            </div>
            <div className="introsection">
                 <div className="leftintrosection">
                    <div className="left-one">
                         <h1>ETHICALLY SOURCED,</h1>
                    </div>
                    <div className="left-two">
                         <h1>LOCALLY GROWN</h1>
                       
                    </div>
                    <div className="left-three"
                    >
                      <p>In the heart of the tropics, where sunlit fields unfold,<br/>Coffee beans, a treasure, in the soil, they're bold.<br/>Born of Philippine soil, nurtured by the sun's embrace,<br/>Each bean tells a story, a journey filled with grace.</p>
                    </div>
                    <div className="left-four">
                          <button  onClick={openExploreModal}>Explore</button> 
                    </div>
                        <Modal
                        isOpen={modalExploreIsOpen}
                        onRequestClose={closeExploreModal}
                        contentLabel="Login Modal"
                        style={{
                          overlay: {
                            background: 'rgba(0, 0, 0, 0.5)',
                          },
                          content: {
                            border: 'none',
                            padding: '0',
                            maxWidth: '1000px',
                            margin: 'auto',
                            background: 'none',
                            backgroundColor: 'transparent',
                          },
                        }}
                        >   
                        <div className="exploremaincontainer">
                        
                        <div className="subexplorcontainer">
                              <div className="div1"></div>
                              <div className="div2"></div>
                              <div className="div3"></div>
                              <div className="div4"></div>
                              <div className="div5"></div>
                              <div className="div6"></div>
                              <div className="div7"></div>
                              <div className="div8"></div>
                              <div className="div9"></div>
                              <div className="div10"></div>
                              <div className="div11"></div>
                              <div className="div12"></div>
                              </div>
                              </div>
                      </Modal>
                 </div>
                 <div className="rightintrosection">
                 <video
                 autoPlay
                 loop
                 style={
                  {
                    width:"100%",
                    height:"100%",
                    objectFit:"contain",
                    zIndex:"-1",
                    borderRadius:"10px",
                    background:"black"
                  }
                 }
                 
                 >
                 <source src={kaulayawvid} typeof="video/mp4"/>
                 </video>
                    
                 </div>
            </div>
          </div>
          <div id='section2'>
              <div className="headersection2">
                  <h1>OUR SPECIAL OFFERS</h1>
                  <p>Discover the perfect harmony of flavors with our three classic coffee blends at Kaulayaw Coffee. Introducing Irog, Liyag, and our exquisite Kaulayaw Special Blend.</p>
              </div>
              <div className="section2content">
                    <div className="box" id='box1'>
                      <div className="imgcontainer1">
                          <h3>Kaulayaw Blend</h3>
                      </div>
                      <button onClick={handleViewMoreClick} className='cta'><span class="hover-underline-animation"> view more </span>
                          <svg
                            id="arrow-horizontal"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="10"
                            viewBox="0 0 46 16"
                          >
                            <path
                              id="Path_10"
                              data-name="Path 10"
                              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                              transform="translate(30)"
                            ></path>
                          </svg>
                      </button>
                  </div>
                  <div className="box" id='box2'>
                      <div className="imgcontainer2">
                          <h3>Irog Blend</h3>
                      </div>
                      <button onClick={handleViewMoreClick} className='cta'><span class="hover-underline-animation"> view more </span>
                          <svg
                            id="arrow-horizontal"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="10"
                            viewBox="0 0 46 16"
                          >
                            <path
                              id="Path_10"
                              data-name="Path 10"
                              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                              transform="translate(30)"
                            ></path>
                          </svg>
                      </button>
                  </div>
                  <div className="box" id='box3'>
                      <div className="imgcontainer3">
                         <h3>Liyag Blend</h3>
                      </div>
                      <button onClick={handleViewMoreClick} className='cta'><span class="hover-underline-animation"> view more </span>
                          <svg
                            id="arrow-horizontal"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="10"
                            viewBox="0 0 46 16"
                          >
                            <path
                              id="Path_10"
                              data-name="Path 10"
                              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                              transform="translate(30)"
                            ></path>
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
          <div id='section3'>
            <div className="section3leftcontainer">
              <div className="aboutuscontainerimg">
              </div>
            </div>
            <div className="section3rightcontainer">
              <h1>KAULAYAW?</h1>
                <p className='p1'><span>‘kaulayaw‘</span> means a pleasant and intimate companion.</p>
              <h1>ABOUT?</h1>
                <p className='p2'>"Experience the rich tapestry of flavors rooted in the heart of the Philippines at Kaulayaw Coffee! Our beans are not just a culinary delight; they're a celebration of local goodness. Sourced from the fertile soils of the Philippines, our beans bring you the authentic taste of homegrown freshness. Join us on a journey through the diverse landscapes of Philippine agriculture and savor the distinct flavors that make our beans truly exceptional. Welcome to Kaulayaw Coffee, where every bite is a tribute to the vibrant and bountiful fields of our beloved Philippines!"</p>
              
            </div>
          </div>
          <div id='section4'>
              <div className="footersection">
                 <div className="divtop">
                  <p>@2019 KAULAYAW COFFEE SHOP</p>
                    <img className='footerlogo' src={iconlogo} alt="Your Description" />
                    <p>Made by AliGraphy</p>
                  </div>
                  <div className="divbottom">
                  <button className='foot1'><div className="imgfoot1"></div></button>
                  <button className='foot2'><div className="imgfoot2"></div></button>
                  <button className='foot3'><div className="imgfoot3"></div></button>
                  <button className='foot4'><div className="imgfoot4"></div></button>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
)
}

export default Home
