import React from 'react';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { ADD_LOCATION, ADD_FEATURE } from '../../utils/mutations';
import auth from '../../utils/auth';

const FeatureSearchCard = ({ name, dist, rate, wikidata, locationName, lat, long }) => {
  const [isSaved, setIsSaved] = useState(false);

  const [addLocation] = useMutation(ADD_LOCATION);
  const [addFeature] = useMutation(ADD_FEATURE);

  const userId = localStorage.getItem('userId');

  const { loading, error, data, refetch } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
  }

  const savedLocations = data.user.savedLocations;

  const saveFeature = async (locId) => {
    try {
      const data = await addFeature({
        variables: {
          locationId: locId,
          name: name,
          dist: dist,
          rate: rate,
          wikidata: wikidata,
        },
      });
      if (data) {
        setIsSaved(true);
        console.log(data);
      }
    } catch (error) {
      console.error('Error saving feature:', error);
    }
  };

  const saveLocation = async () => {
    let locationId

    const addNewLocation = async () => {
      console.log("add Location");
      try {
        const { data } = await addLocation({
          variables: {
            userId: userId,
            name: locationName,
            lat: lat,
            long: long,
          },
        });
        console.log(data.addLocation._id);
        locationId = data.addLocation._id
        refetch()
        saveFeature(locationId)
      }
      catch (error) {
        console.error('Error saving location:', error);
      }
    }

    if (!auth.loggedIn()) {
      console.log('You must be logged in to save a location!');
      return
    }
    let locationExists = savedLocations.find(location => location.name === locationName)
    if (!locationExists) {
      console.log("location not exist");
      addNewLocation()
    } else {
      console.log("location exist");
      locationId = locationExists._id
      console.log(locationExists);
      console.log(locationId);
      refetch();
      saveFeature(locationId)
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
              <button className='btn btn-secondary' onClick={saveLocation}>
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
