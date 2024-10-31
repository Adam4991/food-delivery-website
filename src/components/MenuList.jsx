import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ items, addToCart }) => {
  return (
    <div className="menu-list">
      {items.map(item => (
        <MenuItem 
          key={item.id} 
          item={item} 
          addToCart={addToCart} 
        />
      ))}
      <div className="footer">
        <p>Enjoy your meal! 🍕🍔🍣</p>
      </div>
    </div>
  );
};

export default MenuList;
