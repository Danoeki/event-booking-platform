import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const CartItem = ({ item, onRemove, onUpdate }) => {

  const navigate = useNavigate();

  return (
    <div className="cart-item">
      <div className="event-image">
        <img src={require(`../assets/${item.event.image}`)} alt={item.event.title} />
      </div>
      <div className="event-info">
        <h3 onClick={() => navigate(`/event/${item.event.id}`)}>{item.event.title}</h3>
        <p>{moment(item.event.date).format('DD/MM/YYYY')}</p>
        <p>{item.event.price}€</p>
        <p>Sous-total ({item.tickets} places) : {item.event.price * item.tickets}€</p>
      </div>
      <div className="event-button">
        <button onClick={(e) => {
          e.stopPropagation();
          onRemove(item.event.id);
          window.dispatchEvent(new Event('storage'));
        }}>Supprimer</button>
        <div className="counter">
          <span className="minus" onClick={() => item.tickets > 1 && onUpdate(item.event.id, item.tickets - 1)}>-</span>
          <span>{item.tickets}</span>
          <span className="plus" onClick={() => item.tickets < item.event.availableTickets && onUpdate(item.event.id, item.tickets + 1)}>+</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
