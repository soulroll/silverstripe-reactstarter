import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import './navigation.scss';

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

const Navigation = () => (
  <div>
    <Query query={GET_SITETREE}>
      {({ loading, error, data }) => {

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error!</div>;

        const routesToRender = data.readSiteTrees.edges

        return (
          <div className="container-full navigation">
            <div className="container">
              <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto hidden-sm-up float-xs-right"/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <ul className="navbar-nav">
                    <li key={"1"} className="nav-item">
                      <Link to={"/"} className="nav-link">{"Home"}</Link>
                    </li>
                    {routesToRender.map(menu =>
                      <li key={menu.node.ID} className="nav-item">
                        <Link to={menu.node.URLSegment} className="nav-link">{menu.node.Title}</Link>
                      </li>
                    )}
                  </ul>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        );
      }}
    </Query>
  </div>
)

export default Navigation;
