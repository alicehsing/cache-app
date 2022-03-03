const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async (event, context) => {
  try {
    const { startLat, startLon, endLat, endLon } = event.queryStringParameters;

    const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/${startLon},${startLat};${endLon},${endLat}?geometries=geojson&access_token=${process.env.MAPBOX_KEY}`);

    const data = await response.json();
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};