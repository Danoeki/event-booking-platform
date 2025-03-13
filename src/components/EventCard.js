import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={require(`../assets/${event.image}`)} alt={event.title} />
      </div>
      <div className="event-info">
        <h3>{event.title}</h3>
        <p>{moment(event.date).format('DD/MM/YYYY')}</p>
        <p>{event.location}</p>
        <p>{event.price}€</p>
      </div>
      <div className="event-button">
        <Link to={`/event/${event.id}`}>Voir plus</Link>
      </div>
    </div>
  );
};

export default EventCard;
