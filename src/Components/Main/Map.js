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
    
    {/* <Marker position={{ lat: -34.397, lng: 150.644 }} /><Marker position={{ lat: 45.397, lng: -150.644 }} /></>} */}
  </GoogleMap>));

{/* <MyMapComponent isMarkerShown /> // Map with a Marker
<MyMapComponent isMarkerShown={false} /> // Just only Map */}

export default MyMapComponent;