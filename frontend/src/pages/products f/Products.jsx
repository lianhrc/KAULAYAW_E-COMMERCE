import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className='Productspage'>
      <div className="ProductsPageContainer">
          <div className="ProductPageContent">
            <div className="ProductPageHeader">
              <Link to="/home" className="link-style">
                <button>
                    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                    <span>Back to home</span>
                </button>
              </Link>
            </div>
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
