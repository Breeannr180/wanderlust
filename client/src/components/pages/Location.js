import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LOCATIONS } from '../../utils/queries';
import FeatureCard from '../elements/FeatureCard';

const Location = () => {

  const { locationId } = useParams();

  const { loading, error, data } = useQuery(QUERY_LOCATIONS, {
    variables: { locationId: locationId }
  })

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    console.log(error);
  }

  const savedFeatures = data.location.savedFeatures;

  return (
    <div>
      <div className='card-content'>
        <div className='content'>
          {!savedFeatures ? (
            <h1>No saved features yet!</h1>
          ) : (
            <div>
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
