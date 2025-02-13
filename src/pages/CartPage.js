import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { getCart, removeFromCart, updateCart } from '../services/localStorageService';

const CartPage = () => {
  const [cart, setCart] = useState(getCart());

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (eventId) => {
    removeFromCart(eventId);
    setCart(getCart());
  };

  const handleUpdate = (eventId, tickets) => {
    updateCart(eventId, tickets);
    setCart(getCart());
  };

  const totalPrice = cart.reduce((total, item) => total + item.event.price * item.tickets, 0);

  // Vérifiez si le panier est vide
  if (cart.length === 0) {
    return <div>Votre panier est vide.</div>;
  }

  return (
    <div>
      <h2>Panier</h2>
      {cart.map(item => (
        <CartItem
          key={item.event.id}
          item={item}
          onRemove={handleRemove}
          onUpdate={handleUpdate}
        />
      ))}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default CartPage;
