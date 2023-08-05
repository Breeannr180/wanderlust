import React from 'react';
// import { Link } from 'react-router-dom';

const LocationCard = ({ name, dist, rate, wikidata }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='card-header-title'>{name}</h3>
      </div>
      <div className='card-content'>
        <div className='content'>
          <p>Distance: {dist}</p>
          <p>Rating: {rate}</p>
          <p>Wikidata: {wikidata}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
