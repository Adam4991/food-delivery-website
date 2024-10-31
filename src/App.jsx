import React, { useState } from 'react';
import Header from './components/Header';
import MenuList from './components/MenuList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: '🍕 Pizza', description: 'Cheesy delicious pizza', price: 10 },
    { id: 2, name: '🍔 Burger', description: 'Juicy beef burger', price: 8 },
    { id: 3, name: '🍣 Sushi', description: 'Fresh sushi rolls', price: 12 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      setCart([
        ...cart.slice(0, index),
        ...cart.slice(index + 1)
      ]);
    }
  };

  return (
    <div className="App">
      <Header />
      <MenuList items={menuItems} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;


