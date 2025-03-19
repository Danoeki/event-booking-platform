import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventForm from '../components/EventForm';
import eventsData from '../data/events.json';
import { addToCart, getCart  } from '../services/localStorageService';
import moment from 'moment';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const EventDetailPage = () => {
  const [cart, setCart] = useState(getCart());

  const navigate = useNavigate();

  // Récupération de l'ID de l'événement dans l'URL
  const { id } = useParams();
  // Récupération de l'événement correspondant à l'ID
  const event = eventsData.find(event => event.id === id);

  // Fonction pour gérer la réservation d'un événement
  const handleBook = (formData) => {
    addToCart({ event, ...formData });
    setCart(getCart());
    alert('Réservation effectuée avec succès !');
    window.dispatchEvent(new Event('storage'));
  };

  // Utilisation de la fonction useEffect pour mettre à jour le panier lors du chargement de la page
  useEffect(() => {
    const updateCartSize = () => {
      setCart(getCart());
    };
    updateCartSize();
  }, []);

  if (!event) {
    return <div>Événement non trouvé</div>;
  }

  // Vérifiez si une réservation existe déjà pour l'événement dans le panier
  const hasReservation = cart.some(reservation => reservation.event.id === event.id);
  
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
        {hasReservation ? (
          <div>
            <h3>Vous avez une réservation pour cet événement</h3>
            <button onClick={() => navigate(`/cart`)}>Voir dans le panier</button>
          </div>
        ) : (
          <div>
            {new Date(event.date) < new Date() ? (
              <div>
                <h3>Les réservations ne sont plus disponibles pour cet événement</h3>
                <button onClick={() => navigate(`/`)}>Voir les autres événements</button>
              </div>
            ) : (
              <div>
                <h3>Réserver des billets</h3>
                <EventForm event={event} onBook={handleBook} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetailPage;
