import React from 'react';
import LocationCard from '../elements/LocationCard';

const Profile = ({ username, savedLocations }) => {
  return (
    <div>
      <div className='card-content'>
        <div className='content'>
          {!savedLocations ? (
            <h1>No saved locations yet!</h1>
          ) : (
            <div>
              {savedLocations.map((location) => (
                <LocationCard key={location._id} name={location.name} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='grid-container'>
        <div className='grid-item'>
          <LocationCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
