import React, { Component } from 'react';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import Layout from './Layout';

import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_SITETREE = gql`
  query readSiteTrees {
    readSiteTrees(ShowInMenus: true) {
      edges {
        node {
          ID
          Title
          Content
          URLSegment
          ShowInMenus
          Sort
        }
      }
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Query query={GET_SITETREE}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error!</div>;
              const menuToRender = data.readSiteTrees.edges
              console.log(menuToRender)
              return (
                <div>
                  {menuToRender.map(menu =>
                    <li key={menu.node.ID}>
                      <a href={menu.node.URLSegment}>{menu.node.Title}{menu.node.ShowInMenus}</a>
                    </li>
                  )}
                </div>
              )
            }}
          </Query>
        </div>
        <Header />
        <Navigation />
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
