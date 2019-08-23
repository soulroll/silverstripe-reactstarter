import React, { Component } from 'react';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import Layout from './Layout';

import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_PLAYER = gql`
  query{
    readPlayer(ID: 3) {
      ID
      Alias
      Name
    }
  }
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <div>
          <Query query={GET_PLAYER}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error!</div>;

              console.log(data)

              return (
                <div>
                    <span>{data.readPlayer.Name}</span><br/>
                    <span>{data.readPlayer.Alias}</span><br/>
                    <span>{data.readPlayer.ID}</span><br/>
                </div>
              )
            }}
          </Query>
        </div>
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
