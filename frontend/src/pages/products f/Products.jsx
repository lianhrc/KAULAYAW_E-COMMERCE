import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Products = () => {

  const [beans, setBeans] = useState([])

  useEffect(()=>{
    const fetchAllBeans = async () =>{
        try {
            const res = await axios.get("http://localhost:8801/beans")
            setBeans(res.data);
        } catch (error) {
            console.error(error)
        }
    }
    fetchAllBeans()
},[])

const f = new Intl.NumberFormat("en-us",{
  currency: "PHP",
  style: "currency"
})

  return (
    <div className='Productspage'>
        <div className="ProductPageContent">

          <div className="beans">
            {beans.map(bean=>(
              <div className="bean" key={bean.coffeeid}>
              {bean.coffeecover && <img src={bean.coffeecover} alt=""/>}
                <h4>{bean.coffeename}</h4>   
                <span>{f.format(bean.coffeeprice)}</span>
                <button className="addCart">Cart</button>
                </div>
            ))}
          </div>  

      {/* 
              <Link to="/home" className="link-style">
                <button>
                    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                    <span>Back to home</span>
                </button>
              </Link>
  */}
              

  
          
        </div>
      </div>
       
  )
}

export default Products
