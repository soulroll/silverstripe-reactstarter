import React, { Component } from 'react';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import Layout from './Layout';

import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
