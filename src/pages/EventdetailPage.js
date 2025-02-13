import React from 'react';
import { useParams } from 'react-router-dom';
import EventForm from '../components/EventForm';
import eventsData from '../data/events.json';
import { addToCart } from '../services/localStorageService';

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
    <div>
      <img src={event.image} alt={event.title} />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Lieu: {event.location}</p>
      <p>Organisateur: {event.organizer}</p>
      <EventForm event={event} onBook={handleBook} />
    </div>
  );
};

export default EventDetailPage;
