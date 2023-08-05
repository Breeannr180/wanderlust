import React from 'react';
import LocationCard from '../elements/LocationCard';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useProfileContext } from '../../utils/GlobalState';

const Profile = () => {

  const [queryUser, { error, data }] = useQuery(QUERY_USER);
  const { profile } = useProfileContext();

  const fetchData = async (event) => {
    event.preventDefault();

    try {
      const { data } = await queryUser({
        variables: { _id: profile._id },
      });

      console.log(data)

    } catch (err) {
      console.error(err);
    }
  };

  fetchData()

  return (
    <div>
      <h1>${username}'s saved locations</h1>
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
