import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { Query } from 'react-apollo';

import Home from './routes/home/home';
import Teams from './routes/teams/teams';
import Components from './routes/components/components';
import Page from './routes/page/page';

import Contact from './routes/contact/contact';
import GET_SITETREE from './graphql/queries/sitetree';

const Layout = () => (

  <div>
    <Query query={GET_SITETREE}>
      {({ loading, error, data }) => {

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error!</div>;

        const routesToRender = data.readSiteTrees.edges

        return (
          <div className="Layout">
            <Switch>

              <Route
                exact path={"/"}
                render={(props) => <Home {...props} />}
              />

              <>
              {routesToRender.map(menu =>
                <Switch key={menu.node.ID}>
                <Route
                  key={menu.node.ID}
                  path={"/"+menu.node.URLSegment}
                  exact
                  render={(props) => <Page {...props} title={menu.node.Title} content={menu.node.Content} />}
                />
                {menu.node.Children.edges.map(submenu =>
                <Route
                  key={submenu.node.ID}
                  path={`/${menu.node.URLSegment}/${submenu.node.URLSegment}`}
                  exact
                  render={(props) => <Page {...props} title={submenu.node.Title} content={submenu.node.Content} />}
                />
                )}
                </Switch>
              )}
              </>

              <Route
                path={"/services/website-design"}
                component={Teams}
              />

            </Switch>
          </div>
        );
      }}
    </Query>
  </div>
)

export default Layout;
