import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ name, locationId }) => {

  return (
    <div className='card'>
      <div className='card bg-neutral-content card-bordered text-neutral'>
        <div className='flex flex-wrap content-center card-body'>
          <h1 className='card-title'>{name}</h1>
          <div className='card-content'>
            <div className='content'>
              <Link to={`/location/${locationId}`}>
                <button className='btn btn-secondary'>See Saved Features</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
