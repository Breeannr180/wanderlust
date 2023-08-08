import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_FEATURE } from '../../utils/mutations';

const FeatureCard = ({ id, name, dist, rate, wikidata, locationId }) => {
  const wikidataUrl = `https://www.wikidata.org/wiki/${wikidata}`;
  const km = dist / 1000

  const [isDeleted, setIsDeleted] = useState(false);

  const [removeFeature] = useMutation(REMOVE_FEATURE);

  const deleteFeature = async () => {
    try {
      const data = await removeFeature({
        variables: {
          locationId: locationId,
          featureId: id,
        },
      });
      if (data) {
        setIsDeleted(true);
      }
    } catch (error) {
      console.error('Error deleting feature:', error);
    }
  }

  if (isDeleted) {
    return null;
  }

  return (
    <div className='card bg-neutral-content card-bordered text-neutral flex flex-wrap'>
      <button onClick={deleteFeature} className='self-end me-2 btn btn-sm btn-warning'>Unsave</button>
      <div className='card-header flex flex-wrap self-center'>
        <h3 className='card-title text-2xl'>{name}</h3>
      </div>
      <div className='card-content ms-3'>
        <div className='content'>
          <p>Located {km}km from destination</p>
          <p>Rating: {rate}/10</p>
          <p>
            <Link to={wikidataUrl}>
              <button className='btn btn-secondary'>
                View on Wikidata
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
