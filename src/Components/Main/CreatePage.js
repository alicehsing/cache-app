import React from 'react';
import { useCacheContext } from '../../CacheProvider';


export default function CreatePage() {
  const { title, setTitle, description, setDescription, image, setImage, latitude, setLatitude, longitude, setLongitude, handleCreateSubmit } = useCacheContext();
  function handleImageUpload(e){
    console.log(e.target.files);
    setImage(e.target.files[0]); 
  }

  return (
    <><img src='https://nioqwidggusxqcqbwypa.supabase.in/storage/v1/object/public/cache-images/9a5b1474-1fd1-426f-b04f-5d5969b873e0/cache-images/9a5b1474-1fd1-426f-b04f-5d5969b873e0/23-1.jpeg' />
      <form onSubmit={handleCreateSubmit}>
        <h2>Create Cache</h2>
        <label htmlFor='title' >
          <input required value={title} name='title' onChange={e => setTitle(e.target.value)} />
        </label>

        <label>
          <input type='file' name='img' accept='image/ *' onChange={e => handleImageUpload(e)} />
        </label>

        <label htmlFor='description'>
          <input required value={description} name='description' onChange={e => setDescription(e.target.value)} />
        </label>
        <button>Submit Cache</button>


      </form>

    </>

     /* // ---Form---
      // Title
      // Description
      // Image Upload
      // Create Cache button
      // handleCreateSubmit-call the IP Location API
      // .insert to supabase to create row.
      // clear form state. 
      // Where to send user after submit??? */
 
  );
}
