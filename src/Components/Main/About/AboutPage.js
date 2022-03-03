import React from 'react';
import AboutList from './AboutList';
import { aboutData } from './about-data';

export default function About() {

  return (

    // Carasoul-dev picture and description
    // create dev profile data somewhere
    <>
      <AboutList abouts={aboutData} />
    </>
  );
}
