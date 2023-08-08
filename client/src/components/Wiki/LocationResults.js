import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_LOCATION } from '../../utils/mutations';
import FeatureSearchGrid from './FeatureSearchGrid';
import auth from '../../utils/auth';

const LocationResults = (props) => {
  const [kind, setKind] = useState('amusements');
  // const [openTripMapData, setOpenTripMapData] = useState([]);
  const [featureArray, setFeatures] = useState([]);
  const [locationId, setLocationId] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const [addLocation] = useMutation(ADD_LOCATION);

  const handleFeatureSearch = async () => {
    try {
      const response = await fetch('/api/opentripmap/features', {
        method: 'POST',
        body: JSON.stringify({
          lon: props.lon,
          lat: props.lat,
          kind: kind,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const temp = data.features.filter(
        (feature) => feature.properties.rate > 0 && feature.properties.wikidata
      );
      setFeatures(temp);
    } catch (error) {
      console.error('Error fetching OpenTripMap data:', error);
    }
  };

  return (
    <div className='card-body'>
      <div className=''>
        <h1 className='card-title'>{props.name}</h1>
        <select
          className='select select-bordered select-primary'
          id='kind'
          aria-label='Default select example'
          value={kind}
          onChange={(e) => setKind(e.target.value)}
        >
          <option value='amusements'>Amusements</option>
          <option value='interesting_places'>Interesting Places</option>
          <option value='sport'>Sport</option>
          <option value='tourist_facilities'>Tourist Facilities</option>
        </select>
        <button className='btn btn-primary' onClick={handleFeatureSearch}>
          Search for interesting features nearby
        </button>
        <FeatureSearchGrid
          featureArray={featureArray}
          locationName={props.name}
          lat={props.lat}
          long={props.lon}
        />
      </div>
    </div>
  );
};

export default LocationResults;
