'use strict';

import './userTableContainer.scss';

import React from 'react';
import Faker from 'faker';

import UserTable from '../userTable';

const limitArr = [5, 10, 25, 50, 75, 100];
const sortArr = ['First Name', 'Last Name', 'Country', 'Address', 'City', 'State', 'Zip', 'Phone'];

class UserTableContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      limit: 5,
      offset: 0,
      sorting: 'First Name',
      data: []
    }

    this.changeOffSet = this.changeOffSet.bind(this);
    this.changeLimit = this.changeLimit.bind(this);
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

  changeOffSet(e){
    let offset = parseInt(this.state.offset);
    let limit = parseInt(this.state.limit);
    if(e.target.textContent === 'prev'){
      if(offset - limit > 0){
        this.setState({offset: offset - limit});
      }else{
        this.setState({offset: 0});
      }
    }else{
      if(offset + limit < this.state.data.length - limit){
        this.setState({offset: offset + limit});
      }else{
        this.setState({offset: this.state.data.length - limit});
      }
    }
  }

  changeLimit(e){
    this.setState({limit: e.target.options[e.target.selectedIndex].value})
  }

  render(){
    let offset = parseInt(this.state.offset);
    let limit = parseInt(this.state.limit);
    return(
      <div className="app">
        <ul id="sorting-items">
          <li><h1>List of Awesome</h1></li>
          <li><p>|</p></li>
          <li><p>Sort by</p>
            <select>
              {sortArr.map((val) => {
                return(<option value={val}>{val}</option>)
              })}
            </select>
          </li>
          <li><p>items per page</p>
            <select onChange={this.changeLimit}>
              {limitArr.map((ele) => {
                return(<option value={ele}>{ele}</option>)
              })}
            </select>
          </li>
          <li><p>{`${offset} - ${offset + limit}`}</p><button onClick={this.changeOffSet}>prev</button><button onClick={this.changeOffSet}>next</button></li>
        </ul>
        {this.state.loading ? <p>...Loading</p> : <UserTable dataArr={this.state.data.slice(offset, (offset + limit))} />}
      </div>
    )
  }
}

export default UserTableContainer;
