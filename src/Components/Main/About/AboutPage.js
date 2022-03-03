import React, { useEffect } from 'react';
import { useCacheContext } from '../../../CacheProvider';
import AboutItem from './AboutItem';

export default function About() {
  const { 
    aboutList,
    setAboutList,
  } = useCacheContext();

  useEffect(() => {
    setAboutList(aboutList);
  }, [aboutList, setAboutList]);

  return (

    // Carasoul-dev picture and description
    // create dev profile data somewhere
    <>
      {
        aboutList.map((about, i) => 
          <AboutItem 
            key={about.name + i}
            about={about} />
        )
      }
    </>
  );
}
