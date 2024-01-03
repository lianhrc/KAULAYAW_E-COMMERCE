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

          </div>
          <div id='section3'></div>
          <div id='section4'></div>
      </div>
    </div>
    
)
}

export default Home
