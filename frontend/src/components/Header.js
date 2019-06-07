import React from 'react';
import HeaderGreeting from './HeaderGreeting'

const Header = () => (
  <header id="header">
    <h1>M. Log</h1>
    <p>A personal log (Movie Log) of the movies you watched recently.</p>
    <HeaderGreeting />
  </header>
)

export default Header