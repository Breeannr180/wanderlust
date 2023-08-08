import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FEATURE } from '../../utils/mutations';

const FeatureSearchCard = ({ name, dist, rate, wikidata, locationId }) => {
  const [isSaved, setIsSaved] = useState(false);

  const [addFeature] = useMutation(ADD_FEATURE);

  const saveFeature = async () => {
    try {
      if (!locationId) return;
      const { data } = await addFeature({
        variables: {
          locationId: locationId,
          name: name,
          dist: dist,
          rate: rate,
          wikidata: wikidata,
        },
      });
      if (data) setIsSaved(true);
    } catch (error) {
      console.error('Error saving feature:', error);
    }
  };

  return (
    <div className='card bg-neutral-content card-bordered text-neutral'>
      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <div className='card-content'>
          <div className='content'>
            <p>Distance: {dist}</p>
            <p>Rating: {rate}</p>
            <p>Wikidata: {wikidata}</p>
            {/* //button to save feature */}
            {!isSaved ? (
              <button className='btn btn-secondary' onClick={saveFeature}>
                Save feature from this location
              </button>
            ) : (
              <button className='btn btn-secondary btn-disabled'>
                Feature Saved!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSearchCard;
