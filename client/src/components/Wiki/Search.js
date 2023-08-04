import React, { useState } from 'react';
import SearchResults from './SearchResults';

const Search = () => {
  const [specificQuery, setSpecificQuery] = useState('');
  const [specificResults, setSpecificResults] = useState(null);
  const [activitiesQuery, setActivitiesQuery] = useState('');
  const [activitiesResults, setActivitiesResults] = useState(null);
  const [popularQuery, setPopularQuery] = useState('');
  const [popularResults, setPopularResults] = useState(null);
  const [searchType, setSearchType] = useState('');

  const handleSearch = async () => {
    try {
      if (searchType === 'specific') {
        const response = await fetch(`/api/opentripmap/destination?query=${specificQuery}`);
        const data = await response.json();
        setSpecificResults(data.features);
      } else if (searchType === 'activities') {
        const response = await fetch(`/api/opentripmap/destination?query=${activitiesQuery}`);
        const data = await response.json();
        setActivitiesResults(data.features);
      } else if (searchType === 'popular') {
        const response = await fetch(`/api/opentripmap/destination?query=${popularQuery}`);
        const data = await response.json();
        setPopularResults(data.features);
      }
    } catch (error) {
      console.error('Error fetching OpenTripMap data:', error);
    }
  };

  return (
    <div>
      <div className='search-section'>
        <h2>Specific Destination</h2>
        <input type='text' value={specificQuery} onChange={(e) => setSpecificQuery(e.target.value)} />
        <button onClick={() => setSearchType('specific')}>Search</button>
      </div>
      {specificResults && <SearchResults results={specificResults} />}

      <div className='search-section'>
        <h2>Activities</h2>
        <input type='text' value={activitiesQuery} onChange={(e) => setActivitiesQuery(e.target.value)} />
        <button onClick={() => setSearchType('activities')}>Search</button>
      </div>
      {activitiesResults && <SearchResults results={activitiesResults} />}

      <div className='search-section'>
        <h2>Most Popular</h2>
        <input type='text' value={popularQuery} onChange={(e) => setPopularQuery(e.target.value)} />
        <button onClick={() => setSearchType('popular')}>Search</button>
      </div>
      {popularResults && <SearchResults results={popularResults} />}
    </div>
  );
};

export default Search;
