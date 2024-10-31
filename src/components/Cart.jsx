import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - 💲{item.price}
            <button onClick={() => removeFromCart(item)}>Remove ❌</button>
          </li>
        ))}
      </ul>
      <h3>Total: 💲{total}</h3>
    </div>
  );
};

export default Cart;
