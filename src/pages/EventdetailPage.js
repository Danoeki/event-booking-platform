import React from 'react';
import { useParams } from 'react-router-dom';
import EventForm from '../components/EventForm';
import eventsData from '../data/events.json';
import { addToCart } from '../services/localStorageService';
import moment from 'moment';
import '@fortawesome/fontawesome-free/css/all.min.css';

const EventDetailPage = () => {
  const { id } = useParams();
  const event = eventsData.find(event => event.id === id);

  const handleBook = (formData) => {
    addToCart({ event, ...formData });
    alert('Réservation effectuée avec succès!');
  };

  if (!event) {
    return <div>Événement non trouvé</div>;
  }

  return (
    <div className="event-detail">
      <img src={require(`../assets/${event.image}`)} alt={event.title} />
      <div className="event-detail-info">
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <div className="event-meta">
          <i className="fas fa-calendar-alt"></i> {moment(event.date).format('DD/MM/YYYY')}
        </div>
        <div className="event-meta">
          <i className="fas fa-map-marker-alt"></i> {event.location}
        </div>
        <div className="event-meta">
          <i className="fas fa-user"></i> {event.organizer}
        </div>
        <div className="event-meta">
          <i className="fas fa-tag"></i> Prix : {event.price}€
        </div>
        <div className="event-meta">
          <i className="fas fa-ticket"></i> Places restantes : {event.availableTickets}
        </div>
      </div>
      <div className="event-detail-form">
        <h3>Réserver des billets</h3>
        <EventForm event={event} onBook={handleBook} />
      </div>
    </div>
  );
};

export default EventDetailPage;
