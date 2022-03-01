import React from 'react';
import { useCacheContext } from '../../../CacheProvider';

export default function CachePage() {
  const { search, setSearch, cacheList, setCacheList, userLocation, setUserLocation, toggleView, setToggleView } = useCacheContext();
  return (
    <>
      {/* carousoul, search and toggle view 
      true= map
      false= carousoul
      onClick link to detail page*/}
    </>
  );
}
