import React from 'react';
import { Link } from 'react-router-dom';

export default function CacheItem({ 
  // here's how you would destructure a nested object
  cache: {
    title,
    image,
    longitude,
    latitude,
    id,
  } 
}){

  return (
    <>
      <Link to={`/cachelist/${id}`}>
        <figure id='figure-detail'>
          <h2 id='cache-title'>{title}</h2>
          <img id='item-image' alt={title} src={image}/>
          <figcaption id='lat-lon'>{latitude}°, {longitude}°</figcaption>
        </figure>
      </Link>
    </>
  );
}