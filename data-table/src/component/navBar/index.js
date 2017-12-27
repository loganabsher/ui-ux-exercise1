'use strict';

import './navBar.scss';

import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
  render(){
    return(
      <ul id="nav-bar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/table">Table</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    )
  }
}

export default NavBar
