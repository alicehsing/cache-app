import React from 'react';
import { useCacheContext } from '../../CacheProvider';


export default function CreatePage() {
  const { title, setTitle, description, setDescription, image, setImage, latitude, setLatitude, longitude, setLongitude, handleCreateSubmit } = useCacheContext();

  return (
    <>
      <form onSubmit={handleCreateSubmit}>
        <h2>Create Cache</h2>
        <label htmlFor='title' >
          <input required value={title} name='title' onChange={e => setTitle(e.target.value)} />
        </label>

        <label>
          <input type='file' name='img' accept='image/ *' value={image} onChange={e => setImage(e.target.value)} />
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
