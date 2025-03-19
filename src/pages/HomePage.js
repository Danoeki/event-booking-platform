import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';
import eventsData from '../data/events.json'; // Assurez-vous d'avoir un fichier JSON avec les données des événements

const HomePage = () => {
  const [events, setEvents] = useState(eventsData);
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const onFilterChange = (type, value) => handleFilterChange(type, value);

  const handleFilterChange = (type, value) => {
    if (type === 'reset') {
      // Réinitialiser les filtres
      setFilteredEvents(eventsData);
    } else {
      // Mettre à jour les filtres comme avant
      let filtered = [...events];
      if (type === 'search') {
        filtered = filtered.filter(event => event.title.toLowerCase().includes(value.toLowerCase()));
      } else if (type === 'category') {
        if (value !== "") {
          filtered = filtered.filter(event => event.category === value);
        }
      } else if (type === 'date') {
        if (value === 'date_past') {
          filtered = filtered.filter((item) => {
            const eventDate = new Date(item.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate.getTime() < today.getTime();
          }).sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime();
          });
        } else if (value === 'date_future') {
          filtered = filtered.filter((item) => {
            const eventDate = new Date(item.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate.getTime() >= tomorrow.getTime();
          }).sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime();
          });
        }
      } else if (type === 'sort') {
        if (value === 'price_asc') {
          filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (value === 'price_desc') {
          filtered = filtered.sort((a, b) => b.price - a.price);
        }
      }
      setFilteredEvents(filtered);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Rechercher..." onChange={(e) => onFilterChange('search', e.target.value)} />
      </div>
      <EventFilter onFilterChange={handleFilterChange} />
      <div className="event-list">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
