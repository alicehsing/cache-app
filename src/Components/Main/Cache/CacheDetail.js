import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCacheContext } from '../../../CacheProvider';
import { createCache, getCacheById } from '../../../services/fetch-utils';
// import Map from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import ReactMapGl from 'react-map-gl';

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
    const ipResponse = await fetch(`/.netlify/functions/ipstack-endpoint`);

    const json = await ipResponse.json();
    // setStartLat(json.data.latitude);
    // setStartLon(json.data.longitude);

    // with the users lat/lon that we get from ipstack call:
    // call mapbox with the query strings startLat, startLon, endLat, endLon

    const mapResponse = await fetch(`/.netlify/functions/mapbox-endpoint?startLon=${json.data.longitude}&startLat=${json.data.latitude}&endLon=${cacheDetail.longitude}&endLat=${cacheDetail.latitude}`);

    console.log('mapResponse', mapResponse);
    // json the response

    //how tf do we get the map?
  }

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
        <button id='map-toggle' onClick={handleMap}>Map</button>
      </section>
      {/* // toggle view first..Stretch-swipe up.
        // onLoad= get item based on Params. 
        // False=Default get the row in supabase. render image, title, description
      // True(toggle)=call the map. render the pin on map. */}
      <section>
        {/* <Map 
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 10
          }}
          style={{
            width: 600,
            height: 400
          }}
          mapStyle="mapbox://style/mapbox/streets-v9"
        /> */}
        
      </section>
    </>
  );
}
