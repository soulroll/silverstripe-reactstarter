import React, { Component } from 'react';
import { NavLink, Route, useRouteMatch, useParams } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import { useQuery } from "@apollo/react-hooks";
import GET_SITETREE from '../../graphql/queries/sitetree';

import './navigation.scss';

const Navigation = () => {

  const { loading, error, data } = useQuery(GET_SITETREE);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const routesToRender = data.readSiteTrees.edges
  console.log(routesToRender)

  return (
    <div className="container-full navigation">
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto hidden-sm-up float-xs-right"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav">
              <li key={"home"} className="nav-item">
                <NavLink activeClassName="active" to={"/"} exact className="nav-link">{"Home"}</NavLink>
              </li>
              {routesToRender.map(menu =>
                <li key={menu.node.ID}>
                  <NavLink
                    activeClassName="active"
                    to={"/"+menu.node.URLSegment}
                    className="nav-link"
                  >
                  {menu.node.Title}
                  </NavLink>
                  <ul>
                    {menu.node.Children.edges.map(submenu =>
                      <li key={submenu.node.ID}>
                        <NavLink
                          activeClassName="active"
                          className="nav-link"
                          to={`/${menu.node.URLSegment}/${submenu.node.URLSegment}`}
                        >
                          {submenu.node.Title}
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </li>
              )}
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );

}

export default Navigation;
