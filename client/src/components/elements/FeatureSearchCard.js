import React from 'react';

const FeatureSearchCard = ({ name, dist, rate, wikidata }) => {
  return (
    <div className='card bg-neutral-content card-bordered flex-4'>
      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <div className='card-content'>
          <div className='content'>
            <p>Distance: {dist}</p>
            <p>Rating: {rate}</p>
            <p>Wikidata: {wikidata}</p>
            {/* //button to save feature */}
            <button className='btn btn-secondary'>
              Save feature from this location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSearchCard;
