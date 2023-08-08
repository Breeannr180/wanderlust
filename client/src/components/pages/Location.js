import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LOCATIONS } from '../../utils/queries';
import FeatureCard from '../elements/FeatureCard';

const Location = () => {
  const { locationId } = useParams();

  const { loading, error, data, refetch } = useQuery(QUERY_LOCATIONS, {
    variables: { locationId: locationId },
  });

  const locationName = data.location.name
  const savedFeatures = data.location.savedFeatures;

  useEffect(() => {
    refetch()
  }, [savedFeatures]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
  }


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
                  id={feature._id}
                  name={feature.name}
                  dist={feature.dist}
                  rate={feature.rate}
                  wikidata={feature.wikidata}
                  locationId={locationId}
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
