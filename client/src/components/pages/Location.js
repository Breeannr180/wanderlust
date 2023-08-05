import React from 'react';
import FeatureCard from '../elements/FeatureCard';

const Location = ({ name, savedFeatures }) => {
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
