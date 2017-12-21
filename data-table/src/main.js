'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import App from './component/app';

class AppContainer extends React.Component{
  render(){
    return(
      <div>
        <App />
      </div>
    )
  }
}

ReactDom.render(<AppContainer />, document.getElementById('root'));
