import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <><Marker position={{ lat: -34.397, lng: 150.644 }} /><Marker position={{ lat: 45.397, lng: -150.644 }} /></>}
  </GoogleMap>));

{/* <MyMapComponent isMarkerShown /> // Map with a Marker
<MyMapComponent isMarkerShown={false} /> // Just only Map */}

export default MyMapComponent;