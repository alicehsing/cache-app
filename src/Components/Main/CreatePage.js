import React from 'react';
import { useCacheContext } from '../../CacheProvider';


export default function CreatePage() {
  const { title, setTitle, description, setDescription, image, setImage, latitude, setLatitude, longitude, setLongitude, handleCreateSubmit } = useCacheContext();

  return (
    // ---Form---
    // Title
    // Description
    // Image Upload
    // Create Cache button
    // handleCreateSubmit-call the IP Location API
    // .insert to supabase to create row.
    // clear form state. 
    // Where to send user after submit???
    <div>CreatePage</div>
  );
}
