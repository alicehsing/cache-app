import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCacheContext } from '../../../CacheProvider';
import { createCache, getCacheById } from '../../../services/fetch-utils';

export default function CacheDetail() {
  const { toggleView,
    setToggleView,
    cacheDetail,
    setCacheDetail,
    startLat,
    setStartLat,
    startLon,
    setStartLon } = useCacheContext();

  const params = useParams();
  useEffect(() => {
    async function onLoad() {
      const responseData = await getCacheById(params.id);
      setCacheDetail(responseData);
    }
    
    onLoad();

  }, [params.id, setCacheDetail]);

  async function handleMap() {
    // console.log(cacheDetail.latitude, cacheDetail.longitude);
    // we have the items lat/lon stored in cacheDetail (endLat, endLon)
    // we need the users current location by calling ipstack
    console.log('gonna fetch now...');
    const response = await fetch(`/.netlify/functions/ipstack-endpoint`);
    console.log('response', response);
    const json = await response.json();

    setStartLat(json.data.latitude);
    setStartLon(json.data.longitude);

    console.log('startLat', json.data.latitude);
    console.log('startLon', json.data.longitude);

    // with the users lat/lon that we get from ipstack call:
    // call mapbox with the query strings startLat, startLon, endLat, endLon
    // json the response

    //how tf do we get the map?
  }

  return (
    <>
      <section className='cache-detail'>

        <figure>
          <h2>{cacheDetail.title}</h2>
          <img alt={cacheDetail.title} src={cacheDetail.image}/>
          <figcaption>{cacheDetail.latitude}°, {cacheDetail.longitude}°</figcaption>
          <p>{cacheDetail.description}</p>
        </figure>
        <button onClick={handleMap}>Map</button>
      </section>
      {/* // toggle view first..Stretch-swipe up.
        // onLoad= get item based on Params. 
        // False=Default get the row in supabase. render image, title, description
      // True(toggle)=call the map. render the pin on map. */}
    </>

  );
}
