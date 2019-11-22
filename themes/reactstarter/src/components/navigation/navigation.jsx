import React, { Component } from 'react';
import { NavLink, Route, useRouteMatch, useParams } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, Button } from 'react-bootstrap';
import classnames from 'classnames';
import { useQuery } from "@apollo/react-hooks";

import GET_SITETREE from '../../graphql/queries/sitetree';

import './navigation.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { loading, error, data } = useQuery(GET_SITETREE);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const routesToRender = data.readSiteTrees.edges
  console.log(routesToRender)
  console.log('>>', routesToRender)

  return (
    <div className="container-full navigation-bar">
      <div className="container">
        <Navbar bg="light" expand="lg" className="navigation">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto hidden-sm-up float-xs-right"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav">
              <li key={"home"} className="nav-item">
                <NavLink activeClassName="active" to={"/"} exact className="nav-link">{"Home"}</NavLink>
              </li>
              {routesToRender.map(menu =>
                <li key={menu.node.ID} className="nav-item navigation-item">
                  <NavLink
                    activeClassName="active"
                    to={"/"+menu.node.URLSegment}
                    className={classnames('nav-link navigation-link', { 'has-children': !!menu.node.Children.edges.length })}
                  >
                  {menu.node.Title}
                  </NavLink>
                  {!!menu.node.Children.edges.length && (
                    <button
                      className="navigation-dropdown-toggle"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                    </button>
                  )}
                  {menu.node.Children.edges.length ?
                    <ul className={classnames('navigation-dropdown', { open: isOpen })}>
                      {menu.node.Children.edges.map(submenu =>
                        <li key={submenu.node.ID} className="nav-item navigation-item">
                          <NavLink
                            activeClassName="active"
                            className="nav-link navigation-link"
                            to={`/${menu.node.URLSegment}/${submenu.node.URLSegment}`}
                          >
                            {submenu.node.Title}
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  : null }
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
