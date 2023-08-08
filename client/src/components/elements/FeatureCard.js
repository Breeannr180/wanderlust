import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ name, dist, rate, wikidata }) => {
  const wikidataUrl = `https://www.wikidata.org/wiki/${wikidata}`;
  const km = dist / 1000

  return (
    <div className='card bg-neutral-content card-bordered text-neutral'>
      <div className='card-header flex flex-wrap content-center'>
        <h3 className='card-title text-2xl'>{name}</h3>
      </div>
      <div className='card-content'>
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
