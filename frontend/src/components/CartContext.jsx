import { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();

//provider component
export const CartProvider = ({ children }) => {
  // Set up state for cart items
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart data from local storage during initialization
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  //useEffect to update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Define function to add item to cart
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.coffeeid === item.coffeeid);

    if (existingItem) {
      // If the item exists, update its quantity and total price
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.coffeeid === item.coffeeid
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalPrice: (cartItem.quantity + 1) * cartItem.coffeeprice,
              }
            : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1 and total price
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1, totalPrice: item.coffeeprice },
      ]);
    }
  };

  //function to remove item from cart
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.coffeeid !== itemId);
    setCartItems(updatedCartItems);
  };

  // function to update quantity of an item in the cart
  const updateCartItemQuantity = (itemId, quantityChange) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.coffeeid === itemId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + quantityChange),
              totalPrice: Math.max(
                item.coffeeprice,
                (item.quantity + quantityChange) * item.coffeeprice
              ),
            }
          : item
      )
    );
  };

  // Render CartContext.Provider, providing the context value
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for consuming the context
export const useCart = () => {
  return useContext(CartContext);
};
