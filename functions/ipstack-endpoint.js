const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async () => {
  try {
    const response = await fetch(`http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IPSTACK_KEY}`);
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
