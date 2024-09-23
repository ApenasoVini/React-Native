import React, { createContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';

export const CartContext = createContext();

const Layout = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <View style={styles.container}>
        {children}
      </View>
    </CartContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Layout;
