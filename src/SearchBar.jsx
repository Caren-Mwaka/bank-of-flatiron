import React from 'react';

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className='Search'>
      <input
        type="text"
        placeholder="Search your recent transactions..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
