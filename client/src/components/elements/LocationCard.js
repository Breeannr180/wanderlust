import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_LOCATION } from '../../utils/mutations';

const LocationCard = ({ name, locationId }) => {
  const [removeLocation] = useMutation(REMOVE_LOCATION);

  const deleteLocation = async () => {
    try {
      const { data } = await removeLocation({
        variables: { locationId: locationId },
      });
      // if (data) {
      //   window.location.assign('/profile');
      // }
    } catch (error) {
      console.error('Error deleting location:', error);
    }
  };

  return (
    <div className='card'>
      <div className='card bg-info card-bordered text-neutral'>
        <div className='card-actions justify-end p-2'>
          <button
            className='btn btn-square btn-outline btn-error'
            onClick={deleteLocation}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='flex flex-wrap content-center card-body'>
          <h1 className='card-title'>{name}</h1>
          <div className='card-content'>
            <div className='content'>
              <Link to={`/location/${locationId}`}>
                <button className='btn btn-outline'>See Saved Features</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
