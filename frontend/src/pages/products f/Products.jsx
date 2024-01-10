import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import addtocartIcon from '../img/shopping-bag.png';


const Products = () => {
  const [beans, setBeans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBeans = async () => {
      try {
        const res = await axios.get("http://localhost:8801/beans");
        setBeans(res.data);
        setLoading(false); // Set loading to false after data is fetched
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

  return (
    <div className="Productspage">
      <div className="ProductPageContent">
        {loading ? (
          // Render a loading indicator (spinner) while data is being fetched
          <p>Loading...</p>
        ) : (
          <div className="beans">
            {beans.map((bean) => (
              <div className="bean" key={bean.coffeeid}>
                {bean.coffeecover && (
                  <div>
                    <img
                      src={`http://localhost:8801/public/images/${bean.coffeecover}`}
                      alt={bean.coffeename} 
                      style={{ width: '100px', height: '100px' }}
                    />
                  </div>
                )}

                <h4>{bean.coffeename}</h4>
                <span>{f.format(bean.coffeeprice)}</span>
                <button
                  className="addCart"
                  onClick={() => {
                    // Add functionality to add item to cart
                    console.log(`Add to cart: ${bean.coffeename}`);
                  }}
                >
                  <img src={addtocartIcon} alt="Add to Cart" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;