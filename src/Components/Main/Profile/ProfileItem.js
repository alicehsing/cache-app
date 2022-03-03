import React from 'react';

export default function ProfileItem({ cache }) {
    
  return (
    <figure id='figure-detail'>
      <h2 id='cache-title'>{cache.title}</h2>
      <img id='item-image' alt={cache.title} src={cache.image}/>
      <figcaption id='lat-lon'>{cache.latitude}°, {cache.longitude}°</figcaption>
    </figure>
  );
}
