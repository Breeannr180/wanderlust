import React, { useState } from 'react';
import FeatureSearchCard from '../elements/FeatureSearchCard';

const LocationResults = (props) => {
  const [query, setQuery] = useState('');
  const [openTripMapData, setOpenTripMapData] = useState('');
  const [featureArray, setFeatures] = useState([]);

  const handleFeatureSearch = async () => {
    try {
      const response = await fetch('/api/opentripmap/features', {
        method: 'POST',
        body: JSON.stringify({ lon: props.lon, lat: props.lat }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setOpenTripMapData(data);
      const temp = openTripMapData.features;
      setFeatures(temp);
      console.log(featureArray);
    } catch (error) {
      console.error('Error fetching OpenTripMap data:', error);
    }
  };

  return (
    <div className='card-body'>
      <div className=''>
        <h1>{props.name}</h1>
        <button className='btn btn-primary' onClick={handleFeatureSearch}>
          Save this location and search for interesting features nearby
        </button>
        <div>
          {openTripMapData ? (
            <div className='flex-col'>
              {featureArray?.map((feature) => (
                <FeatureSearchCard
                  key={feature.properties.xid}
                  name={feature.properties.name}
                  dist={feature.properties.dist}
                  rate={feature.properties.rate}
                  wikidata={feature.properties.wikidata}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LocationResults;
