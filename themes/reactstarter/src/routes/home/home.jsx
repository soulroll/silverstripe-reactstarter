import React, {Component} from 'react';
import BootstrapCarousel from 'components/carousel/carousel';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const slides = [
  'Name',
  'Location'
];

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="col">
          <div className="Home">

            <BootstrapCarousel slides={slides} />

            <h1>Home</h1>
            <p>Home page stuff goes here</p>
            <h2>Things to do</h2>
            <ul>
              <li>Build a table that lists graph ql data</li>
              <li>Get working subpage routing</li>
              <li>Build the homepage components</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
