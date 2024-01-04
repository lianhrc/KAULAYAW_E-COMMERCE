import React from 'react';
import iconlogo from '../img/icon-logo.png';
import carticon from '../img/shopping-bag.png';
import usericon from '../img/user.png';
import prod1 from '../img/prod1.png';
import prod2 from '../img/prod2.png';
import prod3 from '../img/prod3.png';
import Modal from 'react-modal';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';



const Home = () =>{

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
                      <li><a href='#section2'>PRODUCTS</a></li>
                      <li><a href='#section3'>ABOUT</a></li>
                      <li><a href='#section4'>CONTACT</a></li>
                    </ul>
                </nav>
              </div>
              <div className="rightheader">
                <button><img className='logo-icon' src={carticon} alt="Your Description" /></button>
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
                              <button className='closemodal' onClick={closeModal}>X</button>
                                 <img className='logo-icon-modal' src={iconlogo} alt="Your Description" />
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
                          <button>Explore</button>
                    </div>
                 </div>
                 <div className="rightintrosection">
                  <div className="rightimgcontainer">
                    
                  </div>
                 </div>
            </div>
          </div>
          <div id='section2'>
              <div className="headersection2">
                  <h1>OUR SPECIAL OFFERS</h1>
              </div>
              <div className="section2content">
                    <div className="box" id='box1'>
                      <div className="imgcontainer1">
                          <h3>Palangga</h3>
                      </div>
                      <button className='cta'><span class="hover-underline-animation"> view more </span>
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
                          <h3>Tala</h3>
                      </div>
                      <button className='cta'><span class="hover-underline-animation"> view more </span>
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
                         <h3>Dapit-Hapon</h3>
                      </div>
                      <button className='cta'><span class="hover-underline-animation"> view more </span>
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
              <div className="leftsection4">
                <a href="#section1"><img className='logo-icon' src={iconlogo} alt="Your Description" /></a>
              </div>
              <div className="rightsection4">
                  <button className='foot1'><div className="imgfoot1"></div></button>
                  <button className='foot2'><div className="imgfoot2"></div></button>
                  <button className='foot3'><div className="imgfoot3"></div></button>
                  <button className='foot4'><div className="imgfoot4"></div></button>
          
              </div>
          </div>
      </div>
    </div>
    
)
}

export default Home
