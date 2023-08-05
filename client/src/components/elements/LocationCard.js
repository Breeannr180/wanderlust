import React from 'react';
// import { Link } from 'react-router-dom';

const LocationCard = ({ name }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='card-header-title'>{name}</h3>
      </div>
    </div>
  );
};

export default LocationCard;
