import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="mb-5 mt-5">
      <input
        type="text"
        className="form-control"
        placeholder="Nom d'équipement"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
}