import { useEffect } from 'react';
import { useCacheContext } from '../../../CacheProvider';
import { getAllCaches } from '../../../services/fetch-utils';
import CacheItem from './CacheItem';


export default function CachePage() {
  const { search, setSearch, cacheList, setCacheList, userLocation, setUserLocation, toggleView, setToggleView } = useCacheContext();

  
  useEffect(() => {
    async function fetchCache() {
      const myCacheData = await getAllCaches();
      setCacheList(myCacheData);
    }
    fetchCache();
  }, [setCacheList]);

  return (
    <>
      {/* carousoul, search and toggle view 
      true= map
      false= carousoul
      onClick link to detail page*/}
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
