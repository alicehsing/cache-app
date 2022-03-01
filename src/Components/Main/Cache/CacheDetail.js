import React from 'react';
import { useCacheContext } from '../../../CacheProvider';

export default function CacheDetail() {
  const { toggleView, setToggleView, params, setParams, cacheDetail, setCacheDetail, } = useCacheContext();

  return (
    // toggle view first..Stretch-swipe up.
    // onLoad= get item based on Params. 
    // False=Default get the row in supabase. render image, title, description
    // True(toggle)=call the map. render the pin on map.
    
    <div>CacheDetail</div>

  );
}
