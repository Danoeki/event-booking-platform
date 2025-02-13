import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>${event.price}</p>
      <Link to={`/event/${event.id}`}>Voir plus</Link>
    </div>
  );
};

export default EventCard;
