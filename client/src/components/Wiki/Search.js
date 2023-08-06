import React, { useState } from 'react';
import SearchResults from './SearchResults';
import LocationResults from './LocationResults';

const Search = () => {
  // const [specificQuery, setSpecificQuery] = useState('');
  // const [specificResults, setSpecificResults] = useState(null);
  // const [activitiesQuery, setActivitiesQuery] = useState('');
  // const [activitiesResults, setActivitiesResults] = useState(null);
  // const [popularQuery, setPopularQuery] = useState('');
  // const [popularResults, setPopularResults] = useState(null);
  // const [searchType, setSearchType] = useState('');

  const [query, setQuery] = useState('');
  const [openTripMapData, setOpenTripMapData] = useState(null);

  const handleSearch = async () => {
    try {
      // if (searchType === 'specific') {
      //   const response = await fetch(
      //     `/api/opentripmap/destination?query=${specificQuery}`
      //   );
      //   const data = await response.json();
      //   setSpecificResults(data.features);
      // } else if (searchType === 'activities') {
      //   const response = await fetch(
      //     `/api/opentripmap/destination?query=${activitiesQuery}`
      //   );
      //   const data = await response.json();
      //   setActivitiesResults(data.features);
      // } else if (searchType === 'popular') {
      //   const response = await fetch(
      //     `/api/opentripmap/destination?query=${popularQuery}`
      //   );
      //   const data = await response.json();
      //   setPopularResults(data.features);
      // } else {
      const response = await fetch('/api/opentripmap/destination', {
        method: 'POST',
        body: JSON.stringify({ location: query }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setOpenTripMapData(data);
      // }
    } catch (error) {
      console.error('Error fetching OpenTripMap data:', error);
    }
  };

  return (
    <div>
      {/* <div className='search-section'>
        <h2>Specific Destination</h2>
        <input
          type='text'
          value={specificQuery}
          onChange={(e) => setSpecificQuery(e.target.value)}
        />
        <button onClick={() => setSearchType('specific')}>Search</button>
      </div>
      {specificResults && <SearchResults results={specificResults} />}

      <div className='search-section'>
        <h2>Activities</h2>
        <input
          type='text'
          value={activitiesQuery}
          onChange={(e) => setActivitiesQuery(e.target.value)}
        />
        <button onClick={() => setSearchType('activities')}>Search</button>
      </div>
      {activitiesResults && <SearchResults results={activitiesResults} />}

      <div className='search-section'>
        <h2>Most Popular</h2>
        <input
          type='text'
          value={popularQuery}
          onChange={(e) => setPopularQuery(e.target.value)}
        />
        <button onClick={() => setSearchType('popular')}>Search</button>
      </div>
      {popularResults && <SearchResults results={popularResults} />} */}

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
