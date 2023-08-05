import React from 'react';
// import { Link } from 'react-router-dom';
import FeatureCard from './FeatureCard';

const LocationCard = ({ name, savedFeatures }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='card-header-title'>{name}</h3>
      </div>
      <div className='card-content'>
        <div className='content'>
          {!savedFeatures ? (
            <p>No saved features yet!</p>
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

export default LocationCard;
