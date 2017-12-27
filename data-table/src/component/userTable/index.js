'use strict';

import './userTable.scss'

import React from 'react';

class UserTable extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataArr: this.props.dataArr
    }
  }

  render(){
    return(
      <div className="user-table">
        <table>
          <thead id="table-head">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {this.state.dataArr.map((ele) => {
              return(
                <tr key={ele.FirstName}>
                  <td>{ele.FirstName}</td>
                  <td>{ele.LastName}</td>
                  <td>{ele.Country}</td>
                  <td>{ele.Street}</td>
                  <td>{ele.City}</td>
                  <td>{ele.State}</td>
                  <td>{ele.Zip}</td>
                  <td>{ele.Phone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserTable;
