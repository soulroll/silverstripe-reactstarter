import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import { Query } from 'react-apollo';
import GET_SITETREE from '../../graphql/queries/sitetree';

import './navigation.scss';

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
                      <NavLink activeClassName="active" to={"/"} exact className="nav-link">{"Home"}</NavLink>
                    </li>
                    {routesToRender.map(menu =>
                      <li key={menu.node.ID} className="nav-item">
                        <NavLink
                          activeClassName="active"
                          exact
                          to={menu.node.URLSegment}
                          className="nav-link"
                        >
                          {menu.node.URLSegment}
                        </NavLink>

                        <ul>
                          {menu.node.Children.edges.map(menu2 =>
                            <li key={menu2.node.ID}>
                              <NavLink
                                to={`/${menu.node.URLSegment}/${menu2.node.URLSegment}`}
                                className="nav-link"
                              >
                              {menu2.node.Title}
                              </NavLink>
                            </li>
                          )}
                        </ul>

                      </li>
                    )}

                    <li>
                      <NavLink
                        to={'/services/website-design'}
                        className="nav-link"
                       >
                       Test
                      </NavLink>
                    </li>

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
