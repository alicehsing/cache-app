import React from 'react';
import AboutList from './AboutList';
import { aboutData } from './about-data';

export default function About() {

  return (
    <>
      <AboutList abouts={aboutData} />
    </>
  );
}
