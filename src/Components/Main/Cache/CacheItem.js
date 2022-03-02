import React from 'react';
import { Link } from 'react-router-dom';
import { useCacheContext } from '../../../CacheProvider';

export default function CacheItem({ cache }){
    // render item information. 
  return (
    <>
      <Link to={`/cachelist/${cache.id}`}>
        <figure>
          <h2>{cache.title}</h2>
          <img alt={cache.title} src={cache.image}/>
          <figcaption>{cache.latitude}°, {cache.longitude}°</figcaption>
        </figure>
      </Link>
    </>
  );
}