import React, { Component } from 'react';
import logo from './logo.svg';

import './Header.css';

class Header extends Component {
  state = {}
  render() { 
    return (
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h3 className="Header-title">React Playground</h3>
      </header>
    )
  }
}
 
export default Header;