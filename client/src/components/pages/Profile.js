import React from 'react';
import LocationCard from '../elements/LocationCard';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import auth from '../../utils/auth';

const Profile = () => {

  const user = auth.getProfile()

  const id = user.data._id

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { userId: id }
  })

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    console.log(error);
  }

  const savedLocations = data.user.savedLocations

  return (
    <div>
      <div className='card-content'>
        <div className='content'>
          {savedLocations.length === 0 ? (
            <h1>No saved locations yet!</h1>
          ) : (
            <div>
              {savedLocations.map((location) => (
                <LocationCard key={location._id} name={location.name} locationId={location._id} />
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
