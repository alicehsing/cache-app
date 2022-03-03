import { useEffect } from 'react';
import { useCacheContext } from '../../../CacheProvider';
import { getUsersCache } from '../../../services/fetch-utils';
import ProfileItem from './ProfileItem';


export default function ProfilePage() {
  const { toggleView, setToggleView, cacheId, setCacheId, cacheList, setCacheList, } = useCacheContext();

  
  useEffect(() => {
    async function fetchMyCache() {
      const myCacheData = await getUsersCache(cacheId);

      setCacheList(myCacheData);
    }
    fetchMyCache();
  }, [cacheId, setCacheList]);

  return (
    // carousoul..onDefault= Created caches.
    // Toggle (tabs first--stretch is toggle slider)true=found
    // Toggle false=created
    // carousoul..found caches
    // (stretch) onClick of image redirect to detail page of cache.

    <section>
      {
        cacheList.map((cache, i) => 
          <ProfileItem 
            key={cache.title + i}
            cache={cache}/>
        )
      }
    </section>
  );
}
