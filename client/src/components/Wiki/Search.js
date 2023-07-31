// Search.js fetch OpenTripMap
import React, { useState } from 'react';
// import axios from 'axios'fomr ;
import {getOpenTripMapData, getDestinationData} from '../../utils/Api';

const Search = () => {
  const [query, setQuery] = useState('');
  const [openTripMapData, setOpenTripData] = useState('');
    getDestinationData ("Paris")

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`/api/opentripmap?query=${query}`);
//       const data = await response.json();
//       setOpenTripMapData(data);
//     } catch (error) {
//       console.error('Error fetching OpenTripMap data:', error);
//     }
//   };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      {/* <button onClick={handleSearch}>Search</button>
      {openTripMapData && <div>{openTripMapData}</div>} */}
    </div>
  );
};

export default Search;
