import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Home from './routes/home/home';
import Teams from './routes/teams/teams';
import Components from './routes/components/components';
import Contact from './routes/contact/contact';

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

const Routes = () => (
  <div>
    <Query query={GET_SITETREE}>
      {({ loading, error, data }) => {

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error!</div>;

        const routesToRender = data.readSiteTrees.edges

        return (
          <div>
            {routesToRender.map(menu =>
              <li key={menu.node.ID}>
                <a href={menu.node.URLSegment}>{menu.node.Title}{menu.node.ShowInMenus}</a>
              </li>
            )}
          </div>
        );
      }}
    </Query>
  </div>
)

export default Routes;
