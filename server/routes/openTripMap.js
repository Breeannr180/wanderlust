require('dotenv').config();
const axios = require('axios');
const APIkey = process.env.OPEN_TRIP_API_KEY;

async function getOpenTripMapData(query) {
  const apiUrl = `https://api.opentripmap.com/0.1/en/places/geoname?name=${query}&apikey=${APIkey}`;
  try {
    const response = await axios.get(apiUrl);

    // Process the data as needed (e.g., extract relevant information, filter, etc.)

    return response.data;
  } catch (error) {
    console.error('Error fetching OpenTripMap data:', error);
    throw new Error('Error fetching OpenTripMap data');
  }
}

async function getDestinationData(lon, lat, kind) {
  try {
    // Fetch place data based on the destination name
    const placeUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${lon}&lat=${lat}&kinds=${kind}&rate=3&limit=25&apikey=${APIkey}`;
    const placeResponse = await axios.get(placeUrl);
    const placeData = placeResponse.data;
    return placeData;
  } catch (error) {
    console.error('Error fetching destination data:', error);
    throw new Error('Error fetching destination data');
  }
}

module.exports = { getOpenTripMapData, getDestinationData };
