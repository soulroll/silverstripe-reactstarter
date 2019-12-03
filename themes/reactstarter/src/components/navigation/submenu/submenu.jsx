import React, { Component } from 'react';
import { NavLink, Route, useRouteMatch, useParams } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, Button } from 'react-bootstrap';
import { useQuery } from "@apollo/react-hooks";
import classnames from 'classnames';

import GET_SITETREE from '../../../graphql/queries/sitetree';

import './submenu.scss';

const Submenu = (props) => {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {!!props.menu.node.Children.edges.length && (
        <button
          className={classnames('navigation-dropdown-toggle', { open: isOpen })}
          onClick={() => setIsOpen(!isOpen)}
        >
        </button>
      )}
      {props.menu.node.Children.edges.length ?
        <ul className={classnames('navigation-dropdown', { open: isOpen })}>
          {props.menu.node.Children.edges.map(submenu =>
            <li key={submenu.node.ID} className="nav-item navigation-item">
              <NavLink
                activeClassName="active"
                className="nav-link navigation-link"
                to={`/${props.menu.node.URLSegment}/${submenu.node.URLSegment}`}
              >
                {submenu.node.Title}
              </NavLink>
            </li>
          )}
        </ul>
      : null }
    </>
  );
}

export default Submenu;
