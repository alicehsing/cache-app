import React from 'react';
import { useCacheContext } from '../../CacheProvider';


export default function ProfilePage() {
  const { toggleView, setToggleView, userID, setUserID } = useCacheContext();

  return (
    // carousoul..onDefault= Created caches.
    // Toggle (tabs first--stretch is toggle slider)true=found
    // Toggle false=created
    // carousoul..found caches
    // (stretch) onClick of image redirect to detail page of cache.

    <div>ProfilePage</div>
  );
}
