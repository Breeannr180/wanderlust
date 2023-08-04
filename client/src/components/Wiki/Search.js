// client/src/components/Search.js
import React, { useState } from 'react';
import LocationResults from './LocationResults';

const Search = () => {
  const [query, setQuery] = useState('');
  const [openTripMapData, setOpenTripMapData] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch('/api/opentripmap/destination', {
        method: 'POST',
        body: JSON.stringify({ location: query }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const features = setOpenTripMapData(data);
    } catch (error) {
      console.error('Error fetching OpenTripMap data:', error);
    }
  };

  return (
    <div>
      <div className='card card-bordered'>
        <div className='card-body'>
          <h1 className='card-header'>Find your travel destination</h1>
          <input
            className='input input-bordered'
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className='btn' onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {openTripMapData ? (
        <div className='card card-bordered'>
          <div>{JSON.stringify(openTripMapData)}</div>
          <LocationResults
            name={openTripMapData.name}
            lat={openTripMapData.lat}
            lon={openTripMapData.lon}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
