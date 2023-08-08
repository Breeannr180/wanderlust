import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LOCATIONS } from '../../utils/queries';
import FeatureCard from '../elements/FeatureCard';

const Location = () => {
  const { locationId } = useParams();

  const { loading, error, data } = useQuery(QUERY_LOCATIONS, {
    variables: { locationId: locationId },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
  }

  const locationName = data.location.name
  const savedFeatures = data.location.savedFeatures;

  return (
    <div>
      <div className='card-content'>
        <h1 className='text-4xl ms-5 mb-5'>Saved Features for {locationName}</h1>
        <div className='content'>
          {savedFeatures.length < 1 ? (
            <h1>No saved features yet!</h1>
          ) : (
            <div className='grid grid-cols-3 gap-4'>
              {savedFeatures.map((feature) => (
                <FeatureCard
                  key={feature._id}
                  name={feature.name}
                  dist={feature.dist}
                  rate={feature.rate}
                  wikidata={feature.wikidata}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
