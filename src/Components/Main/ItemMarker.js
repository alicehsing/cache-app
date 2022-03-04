import React from 'react';
import { Marker } from 'react-google-maps';

export default function ItemMarker({ item }) {
  console.log(item);
  return (
    <Marker
      position={{ lat: item.latitude, lng: item.longitude }}
    />
  );
}
