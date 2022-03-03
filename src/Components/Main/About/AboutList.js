import React from 'react';
import AboutItem from './AboutItem';

export default function AboutList(props) {
  return (
    <div>{
      props.abouts.map((about, i) => 
        <AboutItem 
          key={about.name + i}
          {...about} />
      )
    }</div>
  );
}
