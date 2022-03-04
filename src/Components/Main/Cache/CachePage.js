import { useEffect } from 'react';
import { useCacheContext } from '../../../CacheProvider';
import { getAllCaches } from '../../../services/fetch-utils';
import CacheItem from './CacheItem';
import MyMapComponent from '../Map';

export default function CachePage() {
  const { cacheList, setCacheList } = useCacheContext();
  
  useEffect(() => {
    async function fetchCache() {
      const myCacheData = await getAllCaches();
      setCacheList(myCacheData);
    }
    fetchCache();
  }, [setCacheList]);

  return (
    <>
      <MyMapComponent 
        cacheList = {cacheList}
        isMarkerShown={true}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}/>
      
      <section>
        {
          cacheList.map((cache, i) => 
            <CacheItem 
              key={cache.title + i}
              cache={cache}/>
          )
        }
      </section>
    </>
  );
}
