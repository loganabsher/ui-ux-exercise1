'use strict';

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import NavBar from '../navBar';
import HomeContainer from '../homeContainer';
import UserTableContainer from '../userTableContainer';
import AboutContainer from '../aboutContainer';

class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <section>
            <NavBar />
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/table" component={UserTableContainer} />
            <Route exact path="/about" component={AboutContainer} />
          </section>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;