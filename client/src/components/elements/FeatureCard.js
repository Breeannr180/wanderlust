import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ name, dist, rate, wikidata }) => {
  const wikidataUrl = `https://www.wikidata.org/wiki/${wikidata}`;
  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='card-header-title'>{name}</h3>
      </div>
      <div className='card-content'>
        <div className='content'>
          <p>Distance: {dist}</p>
          <p>Rating: {rate}</p>
          <p>
            <Link to={wikidataUrl}>View on Wikidata</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
