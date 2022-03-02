const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async (event, context) => {
  try {
    console.log('hiiii, we hit our endpoint');
    const response = await fetch(`http://api.ipstack.com/check?access_key=${process.env.IPSTACK_KEY}`);
    console.log('endpoint response', response);
    const data = await response.json();
    console.log('data', data);

    const json = JSON.stringify({ data });
    console.log('json', json);
    
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
