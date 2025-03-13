import React from 'react';

const EventFilter = ({ onFilterChange }) => {
  return (
    <div className="event-filter">
      <input type="text" placeholder="Rechercher..." onChange={(e) => onFilterChange('search', e.target.value)} />
      <select onChange={(e) => onFilterChange('date', e.target.value)}>
        <option value="">Toutes les dates</option>
        <option value="date_asc">Date ascendante</option>
        <option value="date_desc">Date descendante</option>
      </select>
      <select onChange={(e) => onFilterChange('category', e.target.value)}>
        <option value="">Toutes les catégories</option>
        <option value="atelier">Atelier</option>
        <option value="concert">Concert</option>
        <option value="conférence">Conférence</option>
        <option value="dégustation">Dégustation</option>
        <option value="exposition">Exposition</option>
        <option value="sport">Sport</option>
        {/* Ajoutez d'autres catégories ici */}
      </select>
      <select onChange={(e) => onFilterChange('sort', e.target.value)}>
        <option value="">Trier par prix</option>
        <option value="price_asc">Prix croissant</option>
        <option value="price_desc">Prix décroissant</option>
      </select>
    </div>
  );
};

export default EventFilter;
