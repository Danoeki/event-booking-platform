import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const CartItem = ({ item, onRemove, onUpdate }) => {

  const navigate = useNavigate();

  return (
    <div className="cart-item" onClick={() => navigate(`/event/${item.event.id}`)}>
      <h3>{item.event.title}</h3>
      <p>Date : {moment(item.event.date).format('DD/MM/YYYY')}</p>
      <p>Nombre de places : {item.tickets}</p>
      <p>Prix total : {item.event.price * item.tickets}€</p>
      <button onClick={(e) => {
        e.stopPropagation();
        onRemove(item.event.id);
      }}>Supprimer</button>
      <input type="number" value={item.tickets} onChange={(e) => {
        e.stopPropagation();
        onUpdate(item.event.id, e.target.value);
      }} />
    </div>
  );
};

export default CartItem;
