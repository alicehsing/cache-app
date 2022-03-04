import React from 'react';
import { useCacheContext } from '../../CacheProvider';



export default function CreatePage() {
  const { title, setTitle, description, setDescription, image, setImage, latitude, setLatitude, longitude, setLongitude, handleCreateSubmit } = useCacheContext();

  function handleImageUpload(e){
    setImage(e.target.files[0]); 
  }

  return (
    <>
      <form id='create-form' onSubmit={handleCreateSubmit} >
        <h2 id="title-form">Create Cache</h2>
        <label htmlFor='title' >Title
          <input name='title' onChange={e => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>Image Upload
          <input onChange={e => handleImageUpload(e)}
            type='file'
            name='img'
            accept='image/ *'
            id='image-upload'
            required />
        </label>

        <label htmlFor='description'>Description
          <textarea onChange={e => setDescription(e.target.value)}
            value={description}
            name='description'
            required ></textarea>
        </label>
        <button id='form-button'>Submit Cache</button>
      </form>
    </>
  );
}
