import React from 'react';

const CartItem = ({ item, onRemove, onUpdate }) => {
  return (
    <div className="cart-item">
      <h3>{item.event.title}</h3>
      <p>Date: {item.event.date}</p>
      <p>Nombre de places: {item.tickets}</p>
      <p>Prix total: ${item.event.price * item.tickets}</p>
      <button onClick={() => onRemove(item.event.id)}>Supprimer</button>
      <input type="number" value={item.tickets} onChange={(e) => onUpdate(item.event.id, e.target.value)} />
    </div>
  );
};

export default CartItem;
