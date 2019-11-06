import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
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

const Layout = () => (
  <div>
    <Query query={GET_SITETREE}>
      {({ loading, error, data }) => {

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error!</div>;

        const routesToRender = data.readSiteTrees.edges
        console.log(routesToRender)

        return (
          <div className="Layout">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/teams" component={Teams} />
              <Route path="/components" component={Components} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        );
      }}
    </Query>
  </div>
)

export default Layout;
