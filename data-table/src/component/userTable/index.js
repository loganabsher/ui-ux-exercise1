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

  componentWillReceiveProps(nextProps){
    this.setState({dataArr: nextProps.dataArr});
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
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {this.state.dataArr.map((ele, index) => {
              return(
                <tr key={index} style={{background: index % 2 === 0 ? '#F0F0F0' : '#F7F7F7'}}>
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
