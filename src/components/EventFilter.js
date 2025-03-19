import React, { useState } from 'react';

const EventFilter = ({ onFilterChange }) => {
  const [dateValue, setDateValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [sortValue, setSortValue] = useState('');

  const handleReset = () => {
    setDateValue('');
    setCategoryValue('');
    setSortValue('');
    onFilterChange('reset', '');
  };

  return (
    <div className="event-filter">
      <select value={dateValue} onChange={(e) => {setDateValue(e.target.value); onFilterChange('date', e.target.value);}}>
        <option value="">Toutes les dates</option>
        <option value="date_past">Date passée</option>
        <option value="date_future">Date à venir</option>
      </select>
      <select value={categoryValue} onChange={(e) => {setCategoryValue(e.target.value); onFilterChange('category', e.target.value);}}>
        <option value="">Toutes les catégories</option>
        <option value="atelier">Atelier</option>
        <option value="concert">Concert</option>
        <option value="conférence">Conférence</option>
        <option value="dégustation">Dégustation</option>
        <option value="exposition">Exposition</option>
        <option value="sport">Sport</option>
        {/* Ajoutez d'autres catégories ici */}
      </select>
      <select value={sortValue} onChange={(e) => {setSortValue(e.target.value); onFilterChange('sort', e.target.value);}}>
        <option value="">Trier par prix</option>
        <option value="price_asc">Prix croissant</option>
        <option value="price_desc">Prix décroissant</option>
      </select>
      <button onClick={handleReset}>Réinitialiser les filtres</button>
    </div>
  );
};

export default EventFilter;
