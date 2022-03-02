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
    <><div className='cache-detail-div'>
      <h1>{cacheDetail.title}</h1>
      <img className='detail-page-img' src={cacheDetail.image} />
      <p>{cacheDetail.lat}, {cacheDetail.lon}</p>
      <p className='description'>{cacheDetail.description}</p>


    </div>
    {/* // toggle view first..Stretch-swipe up.
      // onLoad= get item based on Params. 
      // False=Default get the row in supabase. render image, title, description
      // True(toggle)=call the map. render the pin on map. */}
    </>

  );
}
