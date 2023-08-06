import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import FeatureSearchCard from '../elements/FeatureSearchCard';
import { ADD_LOCATION } from '../../utils/mutations';

const LocationResults = (props) => {
  const [kind, setKind] = useState('amusements');
  const [openTripMapData, setOpenTripMapData] = useState([]);
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
      setOpenTripMapData(data);
      const temp = openTripMapData.features.filter(
        (feature) => feature.properties.rate > 0 && feature.properties.wikidata
      );
      setFeatures(temp);
      console.log(featureArray);
    } catch (error) {
      console.error('Error fetching OpenTripMap data:', error);
    }
  };

  const saveLocation = async () => {
    try {
      const { data } = await addLocation({
        variables: {
          userId: localStorage.getItem('userId'),
          name: props.name,
          lat: props.lat,
          lon: props.lon,
        },
      });
      if (data) {
        setLocationId(data._id);
        setIsSaved(true);
      }
    } catch (error) {
      console.error('Error saving location:', error);
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
        {!isSaved ? (
          <button className='btn btn-secondary' onClick={saveLocation}>
            Save this location
          </button>
        ) : (
          <button className='btn btn-secondary btn-disabled'>
            Location Saved!
          </button>
        )}
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
                  locationId={locationId}
                />
              ))}
            </div>
          ) : (
            <div>
              <h1>No features found!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationResults;
