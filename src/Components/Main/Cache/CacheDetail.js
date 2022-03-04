import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCacheContext } from '../../../CacheProvider';
import { getCacheById } from '../../../services/fetch-utils';

export default function CacheDetail() {
  const { 
    cacheDetail,
    setCacheDetail,
  } = useCacheContext();

  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      const responseData = await getCacheById(params.id);
      setCacheDetail(responseData);
    }
    onLoad();
  }, [params.id, setCacheDetail]);

  return (
    <>
      <section className='cache-detail'>
        <figure id='figure-detail'>
          <h2 id='cache-title'>{cacheDetail.title}</h2>
          <img id='detail-page-img' alt={cacheDetail.title} src={cacheDetail.image}/>
          <figcaption id='lat-lon'>{cacheDetail.latitude}°, {cacheDetail.longitude}°</figcaption>
          <h3 id='description-title'>Description</h3>
          <p id='description'>{cacheDetail.description}</p>
        </figure>
      </section> 
    </>
  );
}
