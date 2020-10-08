import React from 'react';
import Navigation from './Navigation';

export default function Header(props) {
  return (
    <header id="header" className="header container-fluid">
      <Navigation {...props} />
    </header>
  );
}
