
import React from 'react';
import logo from './logo.png';
import background from './background-3.png';
export default function Header() {

  return (
    <header id='main-header' style={{ backgroundImage  : `url(${background})` }} >
      <img src={logo} alt='logo' id='logo-img' />

    </header>
  );
}
