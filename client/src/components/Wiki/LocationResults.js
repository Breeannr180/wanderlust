import React, { useState } from 'react';

const LocationResults = (props) => {
  const [query, setQuery] = useState('');
  const [openTripMapData, setOpenTripMapData] = useState('');

  const handleFeatureSearch = async () => {
    try {
      const response = await fetch('/api/opentripmap/features', {
        method: 'POST',
        body: JSON.stringify({ lon: props.lon, lat: props.lat }),
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
    <div className='card-body'>
      <div className=''>
        <h1>{props.name}</h1>
        <input
          className='input input-bordered'
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='btn' onClick={handleFeatureSearch}>
          Search for interesting features nearby
        </button>
        <div> {JSON.stringify(openTripMapData)}</div>
      </div>
    </div>
  );
};

export default LocationResults;
