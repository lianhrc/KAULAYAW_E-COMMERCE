import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart data from local storage during initialization
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Update local storage whenever cartItems change
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

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
                totalPrice: cartItem.totalPrice + item.coffeeprice,
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

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.coffeeid !== itemId);
    setCartItems(updatedCartItems);
  };

  const updateCartItemQuantity = (itemId, quantityChange) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.coffeeid === itemId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + quantityChange),
              totalPrice: Math.max(
                item.coffeeprice,
                item.totalPrice + quantityChange * item.coffeeprice
              ),
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
