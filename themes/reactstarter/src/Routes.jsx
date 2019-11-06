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

console.log(GET_SITETREE);

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

const Routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Home,
  },
  {
    path: '/teams',
    name: 'teams',
    component: Teams,
  },
  {
    path: '/components',
    name: 'components',
    component: Components,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  }
];

export default Routes;

