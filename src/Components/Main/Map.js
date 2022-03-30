import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import ItemMarker from './ItemMarker';

// hard coded stuff like this usually belongs in a const with screaming snake case
const DEFAULT_CENTER = { lat: 45.512230, lng: -122.658722 };

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={DEFAULT_CENTER}
  >
    {
      props.isMarkerShown &&
      props.cacheList.map((item, i) => { 
        // since item is an object and not a string, adding it to the index was probably having unexpected results like '[object Object]4'
        return <ItemMarker key={ JSON.stringify(item) + i } item={item} />;
      }) 
    }
  </GoogleMap>));

export default MyMapComponent;