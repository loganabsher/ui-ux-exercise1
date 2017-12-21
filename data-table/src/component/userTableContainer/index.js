'use strict';

import React from 'react';
import Faker from 'faker';

import UserTable from '../userTable';

class UserTableContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      data: []
    }
  }
      
  componentDidMount(){
    for(let i = 1000; i > 0; i--){
      this.state.data.push({
        FirstName: `${Faker.name.firstName()}`,
        LastName: `${Faker.name.lastName()}`,
        Country: `${Faker.address.country()}`,
        Street: `${Faker.address.streetAddress()}`,
        City: `${Faker.address.city()}`,
        State: `${Faker.address.state()}`,
        Zip: `${Faker.address.zipCode()}`,
        Phone: `${Faker.phone.phoneNumber()}`
      })
    }
    this.setState({loading: false});
  }
    
  render(){
    return(
      <div className="app">
        <ul>
          <li><h1>List of Awesome | </h1></li>
          <li><p>items per page</p><option id="limit-sorter"></option></li>
          <li><p>something of something</p><button>prev</button><button>next</button></li>
        </ul>
        {this.state.loading ? <p>...Loading</p> : <UserTable dataArr={this.state.data} />}
      </div>
    )
  }
}

export default UserTableContainer;