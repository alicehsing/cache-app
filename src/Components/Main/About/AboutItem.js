import React from 'react';
import { aboutData } from './about-data';

export default function AboutItem({ about }) {
  return (
    <>
      <figure>
        <h2>{about.name}</h2>
        <img />
        <p></p>
      </figure>
    </>
  );
}
