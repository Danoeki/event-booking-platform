import React, { useState } from 'react';

const EventForm = ({ event, onBook }) => {
  const [formData, setFormData] = useState({ name: '', email: '', tickets: 1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="number" name="tickets" min="1" max={event.availableTickets} value={formData.tickets} onChange={handleChange} required />
      <button type="submit">Réserver</button>
    </form>
  );
};

export default EventForm;
