require('dotenv').config();
const axios = require('axios');
const APIkey = process.env.OPEN_TRIP_API_KEY;

async function getOpenTripMapData(query) {
  const apiUrl = `https://api.opentripmap.com/0.1/en/places/geoname?name=Paris&apikey=${APIkey}`;
  try {
    const response = await axios.get(apiUrl);

    // Process the data as needed (e.g., extract relevant information, filter, etc.)

    return response.data;
  } catch (error) {
    console.error('Error fetching OpenTripMap data:', error);
    throw new Error('Error fetching OpenTripMap data');
  }
}

async function getDestinationData(destinationName) {
  try {
    // Fetch place data based on the destination name
    const placeUrl = `https://api.opentripmap.com/0.1/en/places/geoname?name=${destinationName}&apikey=${APIkey}`;
    const placeResponse = await axios.get(placeUrl);
    const placeData = placeResponse.data;

    if (placeData.features.length > 0) {
      const destinationId = placeData.features[0].properties.xid;

      // Fetch images based on the destination ID
      const imagesUrl = `https://api.opentripmap.com/0.1/en/places/xid/${destinationId}/images?apikey=${APIkey}`;
      const imagesResponse = await axios.get(imagesUrl);
      const imagesData = imagesResponse.data;

      // Process the data as needed (e.g., extract relevant information, filter, etc.)
      // Combine the information and images as required and return the result
      return {
        name: destinationName,
        info: placeData.features[0].properties,
        images: imagesData,
      };
    } else {
      throw new Error('Destination not found');
    }
  } catch (error) {
    console.error('Error fetching destination data:', error);
    throw new Error('Error fetching destination data');
  }
}

module.exports = { getDestinationData };

module.exports = { getOpenTripMapData };
