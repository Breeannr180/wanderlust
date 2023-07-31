const axios = require('axios');
const APIkey = '5ae2e3f221c38a28845f05b6ea3ff1b8d0097fe37c7a818fa11a6e58';

async function getOpenTripMapData(query) {
  try {
    const apiUrl = `https://api.opentripmap.com/0.1/en/places/geoname?name=${query}&apikey=YOUR_OPENTRIPMAP_API_KEY`;
    const response = await axios.get(apiUrl);

    // Process the data as needed (e.g., extract relevant information, filter, etc.)

    return response.data;
  } catch (error) {
    console.error('Error fetching OpenTripMap data:', error);
    throw new Error('Error fetching OpenTripMap data');
  }
}

module.exports = { getOpenTripMapData };


async function getOpenTripMapData(query) {
  try {
    const apiUrl = `https://api.opentripmap.com/0.1/en/places/geoname?name=${query}&apikey=YOUR_OPENTRIPMAP_API_KEY`;
    const response = await axios.get(apiUrl);

    // Process the data as needed (e.g., extract relevant information, filter, etc.)

    return response.data;
  } catch (error) {
    console.error('Error fetching OpenTripMap data:', error);
    throw new Error('Error fetching OpenTripMap data');
  }
}

module.exports = { getOpenTripMapData };
