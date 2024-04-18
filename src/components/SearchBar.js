// src/components/SearchBar.js

import React from 'react';

const SearchBar = ({ handleSearch }) => {
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    handleSearch(searchTerm);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;