'use strict';

import './navBar.scss';

import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
  render(){
    return(
      <ul id="nav-bar">
        <li className={window.location.pathname === '/' ? 'nav-selected' : 'nav'}><Link to="/">Home</Link></li>
        <li className={window.location.pathname === '/table' ? 'nav-selected' : 'nav'}><Link to="/table">Table</Link></li>
        <li className={window.location.pathname === '/about' ? 'nav-selected' : 'nav'}><Link to="/about">About</Link></li>
      </ul>
    )
  }
}

export default NavBar
