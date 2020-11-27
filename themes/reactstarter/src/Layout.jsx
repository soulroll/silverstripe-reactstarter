import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

import Home from './routes/home/home';
import Page from './routes/page/page';

import { useQuery } from '@apollo/react-hooks';
import GET_SITETREE from './graphql/queries/sitetree';

const Layout = () => {

  const { loading, error, data } = useQuery(GET_SITETREE);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const routesToRender = data.readSiteTrees.edges

  return (
    <div className='Layout'>
      <Switch>
        <Route
          exact path={'/'}
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
      </Switch>
    </div>
  );

}

export default Layout;
