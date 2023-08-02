// client/src/components/Search.js
import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [openTripMapData, setOpenTripMapData] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/opentripmap/destination?query=${query}`);
      const data = await response.json();
      setOpenTripMapData(data);
    } catch (error) {
      console.error('Error fetching OpenTripMap data:', error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {openTripMapData && <div>{JSON.stringify(openTripMapData)}</div>}
    </div>
  );
};

export default Search;

