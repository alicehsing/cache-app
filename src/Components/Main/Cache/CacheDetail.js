import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCacheContext } from '../../../CacheProvider';
import { getCacheById } from '../../../services/fetch-utils';

export default function CacheDetail() {
  const { toggleView, setToggleView, cacheDetail, setCacheDetail, } = useCacheContext();

  const params = useParams();
  useEffect(() => {
    async function onLoad() {
      const responseData = await getCacheById(params.id);
      setCacheDetail(responseData);
      console.log(responseData, params);
    }
    
    onLoad();

  }, [params.id, setCacheDetail]);

  return (
    <><section className='cache-detail'>

      <figure>
        <h2>{cacheDetail.title}</h2>
        <img alt={cacheDetail.title} src={cacheDetail.image}/>
        <figcaption>{cacheDetail.latitude}°, {cacheDetail.longitude}°</figcaption>
        <p>{cacheDetail.description}</p>
      </figure>

    </section>
    {/* // toggle view first..Stretch-swipe up.
      // onLoad= get item based on Params. 
      // False=Default get the row in supabase. render image, title, description
      // True(toggle)=call the map. render the pin on map. */}
    </>

  );
}
