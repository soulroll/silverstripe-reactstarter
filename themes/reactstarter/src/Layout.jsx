import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Home from './routes/home/home';
import Teams from './routes/teams/teams';
import Components from './routes/components/components';
import Page from './routes/page/page';

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
              {routesToRender.map(menu =>
                <Route
                  key={menu.node.ID}
                  exact path={"/"+menu.node.URLSegment}
                  render={(props) => <Page {...props} title={menu.node.Title} content={menu.node.Content} />}
                />
              )}
            </Switch>
          </div>
        );
      }}
    </Query>
  </div>
)

export default Layout;
