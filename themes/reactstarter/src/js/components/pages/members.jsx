import React, { Component } from 'react';

import axios from 'axios';

class Test extends Component {
  constructor(){
    // Pass props to parent class
    super()
    // Set initial state
    this.state = {
      response: []
    }

  }

  componentDidMount() {
    axios
      .get("http://silverstripereactstarter.davidm.wgtn.cat-it.co.nz/home/members")
      .then(res => {
        const response = res.data;
        this.setState({ response });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  componentWillUnmount() {
  }

  render() {
    // Render JSX
    console.log(this.state.response);
    return (
      <div>
        <p>I am ajax requesting data directly from silverstripes members table :)</p>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.response.map(item =>
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.FirstName}</td>
                <td>{item.Surname}</td>
                <td>{item.Email}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

const Members = () => (
  <div>
    <h1>Members</h1>
    <Test/>
  </div>
);

export default Members;
