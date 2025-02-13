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
      filtered = filtered.filter(event => event.category === value);
    } else if (type === 'sort') {
      filtered.sort((a, b) => (value === 'price_asc' ? a.price - b.price : b.price - a.price));
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
