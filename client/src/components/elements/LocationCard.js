import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ key, name }) => {



  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='card-header-title'>{name}</h3>
        <Link to={'./location/' + key}>
          <button>See Saved Features</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
