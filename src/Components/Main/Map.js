import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import ItemMarker from './ItemMarker';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 45.512230, lng: -122.658722 }}
  >
    {
      props.isMarkerShown &&
      props.cacheList.map((item, i) => { 
        return <ItemMarker key={ item + i } item={item} />;
      }) 
    }
  </GoogleMap>));

export default MyMapComponent;