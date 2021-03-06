import React from 'react';
import { Link } from 'react-router-dom';

export default function CacheItem({ cache }){

  return (
    <>
      <Link to={`/cachelist/${cache.id}`}>
        <figure id='figure-detail'>
          <h2 id='cache-title'>{cache.title}</h2>
          <img id='item-image' alt={cache.title} src={cache.image}/>
          <figcaption id='lat-lon'>{cache.latitude}°, {cache.longitude}°</figcaption>
        </figure>
      </Link>
    </>
  );
}