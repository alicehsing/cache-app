import React from 'react';
import { useCacheContext } from '../../../CacheProvider';

export default function CacheItem({ cache }){
    // render item information. 
  console.log(cache);
  return (
    <>
      
      <figure>
        <h2>{cache.title}</h2>
        <img alt={cache.title} src={cache.image}/>
        <figcaption>{cache.latitude}°, {cache.longitude}°</figcaption>
      </figure>
    </>
  );
}