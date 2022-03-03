import React from 'react';

export default function AboutItem({ 
  name,
  image,
  description
}) {
  return (
    <>
      <figure id='about-figure'>
        <h2 id='about-title'>{name}</h2>
        <img id='profile-image' alt={name} src={image}/>
        <p id='about-description'>{description}</p>
      </figure>
    </>
  );
}
