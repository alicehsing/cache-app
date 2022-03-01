import React from 'react';

export default function Header() {
  return (
    <header>
      <button onClick={signOutUser}
        type='button'>Sign Out</button>
    </header>
  );
}
