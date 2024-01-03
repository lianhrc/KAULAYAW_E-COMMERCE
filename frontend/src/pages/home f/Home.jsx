import React from 'react';
import iconlogo from '../img/icon-logo.png';
import carticon from '../img/shopping-bag.png';
import usericon from '../img/user.png';

const Home = () =>{
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
                      <li>HOME</li>
                      <li>PRODUCTS</li>
                      <li>ABOUT</li>
                      <li>CONTACT</li>
                    </ul>
                </nav>
              </div>
              <div className="rightheader">
                <button><img className='logo-icon' src={carticon} alt="Your Description" /></button>
                <button><img className='logo-icon' src={usericon} alt="Your Description" /></button>
              </div>
            </div>
            <div className="introsection">
                 <div className="leftintrosection">
                  
                 </div>
                 <div className="rightintrosection"></div>
            </div>
          </div>
          <div id='section2'>

          </div>
          <div id='section3'></div>
          <div id='section4'></div>
      </div>
    </div>
    
)
}

export default Home
