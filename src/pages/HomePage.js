import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';
import eventsData from '../data/events.json'; // Assurez-vous d'avoir un fichier JSON avec les données des événements

const HomePage = () => {
  const [events, setEvents] = useState(eventsData);
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const handleFilterChange = (type, value) => {
    let filtered = [...events];
    if (type === 'search') {
      filtered = filtered.filter(event => event.title.toLowerCase().includes(value.toLowerCase()));
    } else if (type === 'category') {
      if (value !== "") {
        filtered = filtered.filter(event => event.category === value);
      }
    } else if (type === 'date') {
      if (value === 'date_asc') {
        filtered = filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (value === 'date_desc') {
        filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
    } else if (type === 'sort') {
      if (value === 'price_asc') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (value === 'price_desc') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }
    }
    setFilteredEvents(filtered);
  };

  return (
    <div>
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
