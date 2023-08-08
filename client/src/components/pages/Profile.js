import React from 'react';
import LocationCard from '../elements/LocationCard';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import auth from '../../utils/auth';

const Profile = () => {
  if (!auth.loggedIn()) {
    window.location.assign('/login');
  }

  const user = auth.getProfile();

  const id = user.data._id;

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { userId: id },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
  }

  const savedLocations = data.user.savedLocations;

  return (
    <div>
      <div className='card-content'>
        <div className='content container'>
          {savedLocations.length < 1 ? (
            <h1>No saved locations yet!</h1>
          ) : (
            <div className='grid grid-cols-4 gap-2'>
              {savedLocations.map((location) => (
                <LocationCard
                  key={location._id}
                  name={location.name}
                  locationId={location._id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
