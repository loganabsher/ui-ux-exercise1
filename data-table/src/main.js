'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';

const data = [];

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.makeFakeData = this.makeFakeData.bind(this);
  }
    
  makeFakeData(){
    
  }
  
  render(){
    return(
      <div>
        <h1>This is working</h1>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
