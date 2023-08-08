import React, { useState } from 'react';
import LocationResults from './LocationResults';

const Search = () => {
  const [query, setQuery] = useState('');
  const [openTripMapData, setOpenTripMapData] = useState(null);

  const handleSearch = async () => {
    try {
      if (!query) return;
      const response = await fetch('/api/opentripmap/destination', {
        method: 'POST',
        body: JSON.stringify({ location: query }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('OpenTripMap data:', data);
      setOpenTripMapData(data);
    } catch (error) {
      console.error('Error fetching OpenTripMap data:', error);
    }
  };

  return (
    <div className='container'>
      <div className='card card-bordered'>
        <div className='card-body'>
          <h1 className='card-title text-primary'>
            Find your travel destination
          </h1>

          <input
            className='input input-bordered text-neutral'
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className='btn btn-primary' onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {openTripMapData ? (
        <div className='card card-bordered'>
          {openTripMapData.status === 'OK' ? (
            <LocationResults
              name={openTripMapData.name}
              lat={openTripMapData.lat}
              lon={openTripMapData.lon}
            />
          ) : (
            <div>Location not found!</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
