import React from 'react';

export default function AboutItem({ 
  name,
  image,
  description
}) {
  return (
    <>
      <figure>
        <h2>{name}</h2>
        <img alt={name} src={image}/>
        <p>{description}</p>
      </figure>
    </>
  );
}
