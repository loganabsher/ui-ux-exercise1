'use strict';

import React from 'react';

class UserTable extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataArr: this.props.dataArr
    }
    
    console.log(this.state.dataArr);
    
    this.renderTableData = this.renderTableData.bind(this);
  }
  
  renderTableData(){
    
  }
  
  render(){
    return(
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th><button>First Name</button></th>
              <th><button>Last Name</button></th>
              <th><button>Country</button></th>
              <th><button>Address</button></th>
              <th><button>City</button></th>
              <th><button>State</button></th>
              <th><button>Zip</button></th>
              <th><button>Phone</button></th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataArr.map((ele) => {
              console.log(ele);
              return(
                <tr>
                  <td>{ele.FirstName}</td>
                  <td>{ele.LastName}</td>
                  <td>{ele.Country}</td>
                  <td>{ele.Address}</td>
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