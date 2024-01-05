import React from 'react'
import iconlogoprod from '../img/icon-logo.png';


const Products = () => {
  return (
    <div className='Productspage'>
      <div className="ProductsPageContainer">
        <div className="ProductPageHeader">
          <img className='prodheaderlogo' src={iconlogoprod} alt="Your Description" />
          <button><p>HOME</p></button>
        </div>
          <div className="ProductPageContent">
            <div className="box" id='box1'>
              <div className="imgcontainer1">
                  <h3>Kaulayaw Blend</h3>
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
                          <h3>Irog Blend</h3>
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
                  <h3>Liyag Blend</h3>
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
       
    </div>
  )
}

export default Products
