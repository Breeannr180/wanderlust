import React from 'react';

import FeatureSearchCard from '../elements/FeatureSearchCard';

const FeatureSearchGrid = (props) => {
  const { featureArray } = props;
  return (
    <div className='container'>
      {0 < featureArray.length ? (
        <div className='grid grid-cols-3 gap-2'>
          {featureArray?.map((feature) => (
            <FeatureSearchCard
              key={feature.properties.xid}
              name={feature.properties.name}
              dist={feature.properties.dist}
              rate={feature.properties.rate}
              wikidata={feature.properties.wikidata}
              locationName={props.locationName}
              lat={props.lat}
              long={props.long}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1>Search above for features</h1>
        </div>
      )}
    </div>
  );
};

export default FeatureSearchGrid;
